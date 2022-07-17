//React Imports
import React from "react"
import ReactDOM  from "react-dom/client"

//App imports
import App from "./App"

//Creating Roots
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)