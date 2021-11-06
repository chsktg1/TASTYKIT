import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const ProtectedPath = (props) => {
  const token = Cookies.get("jwt_token");
  if (token === undefined) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
};

export default ProtectedPath;
