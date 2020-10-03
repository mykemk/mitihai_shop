import React, { useMemo, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShopDetails from "./ShopDetails";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";
import SignUpSuccessMsg from "./SignupSuccessMsg";
import Styles from "./vendor-styles.module.css";
import { useForm, FormContext } from "react-hook-form";

export const VendorContext = React.createContext(null);

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const VendorSignup = () => {
  const methods = useForm({ mode: "onChange" });
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = useMemo(() => {
    return [
      "Provide Personal details",
      "Add shop details",
      "Provide contact details",
    ];
  }, []);

  const stepContent = useMemo(() => {
    switch (activeStep) {
      case 0:
        return <PersonalDetails />;
      case 1:
        return <ShopDetails />;
      case 2:
        return <ContactDetails />;
      default:
        return "Become a vendor";
    }
  }, [activeStep]);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const submitData = (data) => {
    console.log(data);
  };
  return (
    <VendorContext.Provider>
      <h3 className="centreTitle">Create Account</h3>
      <FormContext {...methods}>
        <div className={Styles.signUpForm}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <SignUpSuccessMsg />
            ) : (
              <form name="check" onSubmit={methods.handleSubmit(submitData)}>
                <Typography className={classes.instructions}>
                  {stepContent}
                </Typography>
                <div className={Styles.navButtons}>
                  <Button
                    variant="text"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}>
                    Back
                  </Button>
                  <Button variant="text" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </FormContext>
    </VendorContext.Provider>
  );
};

export default React.memo(VendorSignup);
