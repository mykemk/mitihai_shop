import React, { useEffect, useContext } from "react";
import { UserContext } from "contexts/UserContext";
import { useHistory } from "react-router-dom";

function LogOut() {
  let { dispatch } = useContext(UserContext);
  let history = useHistory();
  useEffect(() => {
    dispatch({ details: "LOG_OUT" });
    history.push("/");
  }, [dispatch, history]);
  return <div className="page-container">Leaving....</div>;
}

export default LogOut;
