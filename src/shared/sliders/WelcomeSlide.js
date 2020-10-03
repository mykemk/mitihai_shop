import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    marginRight: "2%",
    opacity: 1,
    marginTop: "2%",
  },
  media: {
    width: "95%",
    margin: "auto",
    marginTop: "2%",
    height: "35vh",
  },
  productName: {
    width: "50%",
    textAlign: "center",
    margin: "auto",
    marginTop: "3%",
    marginBottom: "2%",
  },
});

function WelcomeSlide({ label = "", image = "" }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={label} />
      <h2 className={classes.productName}>{label}</h2>
    </Card>
  );
}

export default React.memo(WelcomeSlide)