import React, { useContext } from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { UserContext } from "contexts/UserContext";

const ProductActions = () => {
  let { user } = useContext(UserContext);
  return (
    <>
      <CardActions>
        {user.isLoggedIn ? (
          <Button variant="outlined" size="small" color="secondary">
            <Link to="/order">Order Now</Link>
          </Button>
        ) : (
          <Button size="small" color="secondary">
            <Link to="/shops">Locate Shop</Link>
          </Button>
        )}
      </CardActions>
    </>
  );
};

export default ProductActions;
