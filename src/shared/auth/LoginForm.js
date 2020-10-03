import React, { useState, useContext, useCallback } from "react";
import Styles from "./login.module.css";
import { Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "contexts/UserContext";

function LoginForm() {
  const invalid = {
    border: "1px solid red",
  };
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState();
  const { dispatch } = useContext(UserContext);
  const validatePassword = useCallback(() => {
    if (username === "vendor" && password === "vendor") {
      setIsWrongPassword(false);
      dispatch({ details: "LOG_IN", payload: { username: "Vendor" } });
      history.push("/");
    }
    return setIsWrongPassword(true);
  }, [username, password, dispatch, history]);
  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginForm}>
        <h3 className="centreTitle">Login</h3>
        <h3 className="center with-top-margin">
          <LockIcon fontSize="large" />
        </h3>
        <label htmlFor="Vendor Id">Vendor Id</label>
        <input
          style={isWrongPassword ? invalid : {}}
          type="text"
          placeholder="Vendor Id"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          style={isWrongPassword ? invalid : {}}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={Styles.loginActions}>
          {isWrongPassword && (
            <p className="fieldError wrong-password">
              Invalid username or password
            </p>
          )}
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={validatePassword}>
            Log In
          </Button>
          <p className="center">
            <Link>Forgot password ?</Link>
          </p>
          <p className="center">
            Not a vendor yet ? <Link to="/shops/register">register</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
