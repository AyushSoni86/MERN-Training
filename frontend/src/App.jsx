import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <h1>Connecting Frontend and Backend</h1>
      <Register />
      <Login />
    </div>
  );
}

export default App;
