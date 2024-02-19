// IMPORT THE REACT AND REACT DOM LIBRARIES
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"

// Get a reference to the div with the id 'root'
const el = document.getElementById('root');

// Tell React to take control of the element
const root = ReactDOM.createRoot(el);



// Show the component on the screen
root.render(<App />);