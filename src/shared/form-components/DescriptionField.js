import React from "react";
import { useFormContext } from "react-hook-form";
import { validationRules } from "utils/validations/rules";
import { ErrorMessage } from "react-hook-form";

function createDescriptionField(isShortDescription = true) {
  const DescriptionField = ({ label, className, name, ...props }) => {
    const { register, errors } = useFormContext();
    const { shortDesription, longDescription } = validationRules;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea
          {...props}
          name={name}
          rows={isShortDescription ? 1 : 2}
          ref={register(isShortDescription ? shortDesription : longDescription)}
        />
        <ErrorMessage errors={errors} name={name}>
          {({ message }) => <p className="fieldError">{message}</p>}
        </ErrorMessage>
      </div>
    );
  };
  return DescriptionField;
}

export default createDescriptionField;
