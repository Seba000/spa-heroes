import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return logged ? <Navigate to="/" /> : children;
};

//otra forma de hacerlo, colocando la negacion
// export const PrivateRoute = ({ children }) => {
//     const { logged } = useContext(AuthContext);
//
//     return (!logged)
//        ? children
//        : <Navigate to="/" />;
//   };
