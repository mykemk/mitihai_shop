import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { UserContext } from "contexts/UserContext";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 1s ease-in",
    },
    marginRight: "2%",
  },
  media: {
    width: "95%",
    margin: "auto",
    marginTop: "2%",
    height: 130,
  },
  productName: {
    width: "95%",
    margin: "auto",
    marginTop: "3%",
    marginBottom: "2%",
  },
});

function ProductCard({ brandName = "", image = "" }) {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={brandName} />
      <Typography variant="h6" component="p" className={classes.productName}>
        {brandName}
      </Typography>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          {user.isLoggedIn ? (
            <Link to="/order">Order Now</Link>
          ) : (
            <Link to="/shops">Locate Shop</Link>
          )}
        </Button>
      </CardActions>
    </Card>
  );
}
export default React.memo(ProductCard)