import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import IndividualProduct from "./components/IndividualProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/products/:productId"} element={<IndividualProduct />} />
        <Route path={"*"} element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
