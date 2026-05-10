import { useState } from "react";

import Navbar from "./components/Navbar";
import Predict from "./pages/Predict";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div>

      {isLoggedIn ? (
        <>
          <Navbar onLogout={() => setIsLoggedIn(false)} />
          <Dashboard />
          <Predict />
        </>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}

    </div>

  );
}

export default App;