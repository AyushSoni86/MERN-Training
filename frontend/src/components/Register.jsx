import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();
    console.log("register user function start");
    const data = await axios.post("http://localhost:3000/register", {
      username,
      email,
      password,
    });
    setApiResponse(data.data);
    setEmail("");
    setPassword("");
    setUsername("");
    console.log("data: ", data);
    console.log("register user function end");
  };

  return (
    <div className="page">
      <h2>Sign Up Page</h2>
      <form onSubmit={registerUser}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
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
        <button type="submit">Sign Up</button>
        {apiResponse}
      </form>
    </div>
  );
}
