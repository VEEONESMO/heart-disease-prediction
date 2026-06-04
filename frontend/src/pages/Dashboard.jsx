import { useEffect, useState } from "react";
import API from "../services/api";

import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend,
CategoryScale,
LinearScale,
BarElement
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
ArcElement,
Tooltip,
Legend,
CategoryScale,
LinearScale,
BarElement
);

function Dashboard() {

const [history,setHistory]=useState([]);

useEffect(()=>{

fetchData();

},[]);

const fetchData=async()=>{

try{

const response=await API.get("/history");

setHistory(response.data);

}
catch(error){

console.log(error);

}

};

const total=history.length;

const heartCases=
history.filter(
(item)=>
item.result==="Heart Disease Detected"
).length;

const noDisease=
total-heartCases;

const male=
history.filter(
(item)=>item.sex===1
).length;

const female=
history.filter(
(item)=>item.sex===0
).length;

const pieData={

labels:[
"Heart Disease",
"No Disease"
],

datasets:[

{
data:[
heartCases,
noDisease
],

backgroundColor:[
"#e63946",
"#2a9d8f"
]

}

]

};

const barData={

labels:[
"Male",
"Female"
],

datasets:[

{
label:"Patients",

data:[
male,
female
],

backgroundColor:[
"#1d3557",
"#457b9d"
]

}

]

};

return(

<div style={styles.container}>

<h1>
📊 Heart Disease Dashboard
</h1>

<div style={styles.cardContainer}>

<div style={styles.card}>
<h2>Total Predictions</h2>
<p>{total}</p>
</div>

<div style={styles.card}>
<h2>Heart Disease</h2>
<p>{heartCases}</p>
</div>

<div style={styles.card}>
<h2>No Disease</h2>
<p>{noDisease}</p>
</div>

</div>

<div style={styles.chartWrapper}>

<div style={styles.chartBox}>

<h2>Disease Distribution</h2>

<Pie data={pieData}/>

</div>

<div style={styles.chartBox}>

<h2>Gender Distribution</h2>

<Bar data={barData}/>

</div>

</div>

</div>

);

}

const styles={

container:{
padding:"30px",
textAlign:"center"
},

cardContainer:{
display:"flex",
gap:"20px",
justifyContent:"center",
flexWrap:"wrap"
},

card:{
background:"white",
padding:"30px",
width:"250px",
borderRadius:"10px",
boxShadow:"0 0 10px rgba(0,0,0,0.1)"
},

chartWrapper:{
marginTop:"40px",
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap"
},

chartBox:{
width:"450px",
background:"white",
padding:"20px",
borderRadius:"10px"
}

};

export default Dashboard;
