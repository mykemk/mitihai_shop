import React from "react";
import { useFormContext } from "react-hook-form";
import { validationRules } from "utils/validations/rules";
import { ErrorMessage } from "react-hook-form";

const Email = ({ label, name, placeholder, className = "" }) => {
  const { register, errors } = useFormContext();
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type="email"
        name={name}
        ref={register(validationRules.email)}
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default Email;
