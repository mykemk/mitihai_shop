import React from "react";
import { useFormContext } from "react-hook-form";
import { validationRules } from "utils/validations/rules";
import { ErrorMessage } from "react-hook-form";

const QuantityInput = ({
  label,
  name,
  placeholder,
  className = "",
  onChange,
}) => {
  const { register, errors } = useFormContext();
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type="number"
        name={name}
        //Chcks whether an onChange function is defined and then triggers it
        onChange={onChange ? (e) => onChange(e.target.value) : null}
        ref={register(validationRules.quantity)}
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors} name={name}>
        {({ message }) => <p className="fieldError">{message}</p>}
      </ErrorMessage>
    </div>
  );
};

export default React.memo(QuantityInput);
