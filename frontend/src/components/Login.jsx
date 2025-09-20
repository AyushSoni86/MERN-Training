import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const loginUser = async (event) => {
    event.preventDefault();
    console.log("register user function start");
    const data = await axios.post("http://localhost:3000/login", {
      email,
      password,
    });
    const token = data.data.token;
    localStorage.setItem("token", token);
    setApiResponse(data.data);
    setEmail("");
    setPassword("");
    console.log("data: ", data);
    console.log("register user function end");
  };

  return (
    <div className="page">
      <h2>Login Page</h2>
      <form onSubmit={loginUser}>
        <br />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <button type="submit">Login</button>
        {apiResponse.message}
      </form>
    </div>
  );
}
