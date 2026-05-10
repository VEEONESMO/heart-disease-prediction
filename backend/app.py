from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

# Create flask app
app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///predictions.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db = SQLAlchemy(app)

# Enable CORS
CORS(app)

# Load trained model
model = joblib.load("model.pkl")

# Load scaler
scaler = joblib.load("scaler.pkl")


# Database Model
class Prediction(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    age = db.Column(db.Integer)
    sex = db.Column(db.Integer)
    result = db.Column(db.String(50))
    date = db.Column(db.DateTime, default=datetime.utcnow)


# Create database tables
with app.app_context():
    db.create_all()


# Home route
@app.route("/")
def home():

    return "Heart Disease Prediction API Running Successfully!"


# Prediction route
@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.json

        features = np.array([[

            data["age"],
            data["sex"],
            data["cp"],
            data["trestbps"],
            data["chol"],
            data["fbs"],
            data["restecg"],
            data["thalach"],
            data["exang"],
            data["oldpeak"],
            data["slope"],
            data["ca"],
            data["thal"]

        ]])

        # Scale data
        scaled_data = scaler.transform(features)

        # Predict
        prediction = model.predict(scaled_data)

        result = int(prediction[0])

        # Prediction message
        if result == 1:
            message = "Heart Disease Detected"
        else:
            message = "No Heart Disease"

        # Save prediction to database
        new_prediction = Prediction(
            age=data["age"],
            sex=data["sex"],
            result=message
        )

        db.session.add(new_prediction)
        db.session.commit()

        return jsonify({
            "prediction": result,
            "message": message
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })


# History route
@app.route("/history", methods=["GET"])
def history():

    predictions = Prediction.query.all()

    results = []

    for item in predictions:

        results.append({
            "id": item.id,
            "age": item.age,
            "sex": item.sex,
            "result": item.result,
            "date": item.date
        })

    return jsonify(results)


# Run server
if __name__ == "__main__":
    app.run(debug=True)