import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const profileRedirection = () => {
    console.log("user redirected");
    navigate("/profile");
  };

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard! Quick stats and links go here.</p>

      <button onClick={profileRedirection}>Profile</button>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
