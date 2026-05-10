import { useState } from "react";
import API from "../services/api";

function Predict() {

  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: ""
  });

  const [result, setResult] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post("/predict", formData);

      setResult(response.data.message);

    } catch (error) {

      console.log(error);

      setResult("Error connecting to server");

    }
  };

  return (
  <div style={styles.container}>

    <h1 style={styles.title}>❤️ Heart Disease Prediction</h1>

    <form onSubmit={handleSubmit} style={styles.form}>

      <input name="age" placeholder="Age" onChange={handleChange} style={styles.input} />
      <input name="sex" placeholder="Sex (1=Male, 0=Female)" onChange={handleChange} style={styles.input} />
      <input name="cp" placeholder="Chest Pain Type" onChange={handleChange} style={styles.input} />
      <input name="trestbps" placeholder="Blood Pressure" onChange={handleChange} style={styles.input} />
      <input name="chol" placeholder="Cholesterol" onChange={handleChange} style={styles.input} />
      <input name="fbs" placeholder="Fasting Blood Sugar" onChange={handleChange} style={styles.input} />
      <input name="restecg" placeholder="ECG" onChange={handleChange} style={styles.input} />
      <input name="thalach" placeholder="Max Heart Rate" onChange={handleChange} style={styles.input} />
      <input name="exang" placeholder="Exercise Angina" onChange={handleChange} style={styles.input} />
      <input name="oldpeak" placeholder="Oldpeak" onChange={handleChange} style={styles.input} />
      <input name="slope" placeholder="Slope" onChange={handleChange} style={styles.input} />
      <input name="ca" placeholder="CA" onChange={handleChange} style={styles.input} />
      <input name="thal" placeholder="Thal" onChange={handleChange} style={styles.input} />

      <button type="submit" style={styles.button}>
        Predict
      </button>

    </form>

    <h2 style={styles.result}>{result}</h2>

  </div>
);

}

export default Predict;

const styles = {

  container: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh"
  },

  title: {
    color: "#e63946",
    marginBottom: "25px",
    fontSize: "35px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    maxWidth: "400px",
    margin: "auto",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)"
  },

  input: {
    padding: "12px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },

  button: {
    padding: "14px",
    marginTop: "15px",
    backgroundColor: "#1d3557",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },

  result: {
    marginTop: "25px",
    color: "#2a9d8f",
    fontSize: "28px",
    fontWeight: "bold"
  }

};