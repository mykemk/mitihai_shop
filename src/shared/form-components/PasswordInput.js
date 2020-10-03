import React from "react";
import { useFormContext } from "react-hook-form";
import { validationRules } from "utils/validations/rules";
import { ErrorMessage } from "react-hook-form";
const PaswordInput = ({
  label,
  name,
  placeholder,
  className = "",
  ...props
}) => {
  const { register, errors } = useFormContext();
  return (
    <div className={className} {...props}>
      <label>{label}</label>
      <input
        type="password"
        name={name}
        ref={register(validationRules.password)}
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default PaswordInput;
