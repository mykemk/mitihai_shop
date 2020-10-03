import React, { useContext, useState, useMemo } from "react";
import { ShopsContext } from "components/shop_locator/ShopLocator";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VendorContacts from "./VendorContacts";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "auto",
    marginBottom: "2%",
  },
  shopName: {
    fontSize: "1em",
    color: "maroon",
    fontWeight: "bold",
  },
  shopDetails: {
    fontSize: "1em",
    marginTop: "2%",
  },
  contactsToggle: {
    backgroundColor: "whitesmoke",
    color: "black",
    outline: "none",
    paddingBottom: 4,
  },
});

function ShopCard({ shopDetails = {} }) {
  const {
    name,
    location,
    position,
    phoneNumber,
    email,
    availableOn,
    opensAt,
    clossesAt,
    contacts,
  } = shopDetails;
  const { setMarkerPosition } = useContext(ShopsContext);
  const [showContacts, setShowContacts] = useState(false);
  const classes = useStyles();
  const atleastOneContactExists = useMemo(() => {
    return Object.values(contacts).some((value) => value !== 0);
  }, [contacts]);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.shopName} variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="h5" className={classes.shopDetails}>
          <LocationOnIcon fontSize="small" />
          {` ${location}`}
        </Typography>
        <Typography variant="h5" className={classes.shopDetails}>
          <PhoneIcon fontSize="small" />
          {` ${phoneNumber}`}
        </Typography>
        <Typography variant="h5" className={classes.shopDetails}>
          <EmailIcon fontSize="small" />
          {` ${email}`}
        </Typography>
        <Typography variant="h5" className={classes.shopDetails}>
          <AccessTimeIcon fontSize="small" />
          {`Available ${availableOn}`}
        </Typography>
        <Typography variant="h5" className={classes.shopDetails}>
          <AccessTimeIcon fontSize="small" />
          {` ${opensAt} - ${clossesAt}`}
        </Typography>
        {atleastOneContactExists && (
          <div>
            <button
              className={classes.contactsToggle}
              onClick={() => setShowContacts(!showContacts)}>
              {!showContacts ? (
                <span>
                  Contact vendor
                  <KeyboardArrowDownIcon />
                </span>
              ) : (
                <span>
                  Hide contacts <KeyboardArrowUpIcon />
                </span>
              )}
            </button>
            <Collapse in={showContacts}>
              <VendorContacts contacts={contacts} />
            </Collapse>
          </div>
        )}
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => setMarkerPosition(position)}>
          Show on Map
        </Button>
      </CardActions>
    </Card>
  );
}
export default React.memo(ShopCard);
