function Navbar({ onLogout }) {

  return (

    <nav style={styles.nav}>

      <h2>❤️ Heart Disease Predictor</h2>

      <div>

        <button style={styles.button}>
          Dashboard
        </button>

        <button style={styles.button}>
          Prediction
        </button>

        <button
          style={styles.logoutButton}
          onClick={onLogout}
        >
          Logout
        </button>

      </div>

    </nav>

  );
}

const styles = {

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1d3557",
    color: "white",
    flexWrap: "wrap"
  },

  button: {
    marginLeft: "10px",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  logoutButton: {
    marginLeft: "10px",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#e63946",
    color: "white",
    fontWeight: "bold"
  }

};

export default Navbar;