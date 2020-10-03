import React from "react";
import { useFormContext } from "react-hook-form";
import { isRequired } from "utils/validations/rules";
import { ErrorMessage } from "react-hook-form";
const Select = ({ name, options, label, ...props }) => {
  const { register, errors } = useFormContext();

  return (
    <div {...props}>
      <label>{label}</label>
      <select name={name} className="left" ref={register(isRequired)}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default Select;
