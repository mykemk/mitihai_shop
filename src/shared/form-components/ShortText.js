import React from "react";
import { useFormContext } from "react-hook-form";
import { validationRules } from "utils/validations/rules";
import { ErrorMessage } from "react-hook-form";
const ShortText = ({ label, name, placeholder, ...props }) => {
  const { register, errors } = useFormContext();
  return (
    <div {...props}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        ref={register(validationRules.shortText)}
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default ShortText;
