function Dashboard() {

  return (

    <div style={styles.container}>

      <h1 style={styles.title}>
        📊 Heart Disease Dashboard
      </h1>

      <div style={styles.cardContainer}>

        <div style={styles.card}>
          <h2>Total Predictions</h2>
          <p>120</p>
        </div>

        <div style={styles.card}>
          <h2>Heart Disease Cases</h2>
          <p>45</p>
        </div>

        <div style={styles.card}>
          <h2>No Disease Cases</h2>
          <p>75</p>
        </div>

      </div>

    </div>

  );
}

const styles = {

  container: {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#f1f5f9",
    minHeight: "100vh"
  },

  title: {
    marginBottom: "40px",
    color: "#1d3557",
    fontSize: "35px"
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "50px"
  },

  card: {
    backgroundColor: "white",
    padding: "35px",
    width: "280px",
    borderRadius: "15px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)"
  },

  chartContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  },

  chart: {
    width: "90%",
    maxWidth: "450px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)"
  }

};

export default Dashboard;