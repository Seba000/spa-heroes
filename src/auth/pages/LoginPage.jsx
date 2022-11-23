import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Sebastian");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
