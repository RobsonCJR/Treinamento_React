import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import HelloWorld from "./App"
import reportWebVitals from "./reportWebVitals"
 
ReactDOM.render(
 <React.StrictMode>
   <HelloWorld />
 </React.StrictMode>,
 document.getElementById("root")
)
 
reportWebVitals()