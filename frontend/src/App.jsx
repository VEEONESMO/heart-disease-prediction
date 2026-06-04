import { useState } from "react";

import {
BrowserRouter,
Routes,
Route,
Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Predict from "./pages/Predict";

import Navbar from "./components/Navbar";

function App() {

const [isLoggedIn,setIsLoggedIn]=useState(false);

if(!isLoggedIn){
return(
<Login onLogin={setIsLoggedIn}/>
);
}

return(

<BrowserRouter>

<Navbar onLogout={()=>setIsLoggedIn(false)}/>

<Routes>

<Route path="/" element={<Navigate to="/dashboard"/>}/>

<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/predict"
element={<Predict/>}
/>

</Routes>

</BrowserRouter>

);

}

export default App;