import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProductActions from "./ProductActions";
import image from "assets/images/lifestyle1.jpg";
import { UserContext } from "contexts/UserContext";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 1s ease-in",
    },
  },
  media: {
    height: 100,
  },
});
function BrandCard({ product = {} }) {
  const classes = useStyles();
  let { user } = useContext(UserContext);
  let { name, price } = product;
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography variant="subtitle1" component="p">
            {name}
          </Typography>
          {user.isLoggedIn && (
            <Typography variant="caption" component="p">
              KSH: {price} /-
            </Typography>
          )}
        </CardContent>
        <ProductActions />
      </Card>
    </Grid>
  );
}

export default React.memo(BrandCard);
