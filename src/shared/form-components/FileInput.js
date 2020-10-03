import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "react-hook-form";
import { isRequired } from "utils/validations/rules";

const FileInput = ({ label, name, placeholder, className = "" }) => {
  const { register, errors } = useFormContext();
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type="file"
        name={name}
        ref={register(isRequired)}
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default FileInput;
