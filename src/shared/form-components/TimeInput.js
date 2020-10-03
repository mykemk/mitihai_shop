import React from "react";
import { useFormContext } from "react-hook-form";
import { isRequired } from "utils/validations/rules";
import { ErrorMessage } from "react-hook-form";

const TimeInput = ({ label, name, className = "" }) => {
  const { register, errors } = useFormContext();
  return (
    <div className={className}>
      <label>{label}</label>
      <input type="time" name={name} ref={register(isRequired)} />
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default TimeInput;
