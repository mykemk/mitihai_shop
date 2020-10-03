import React from "react";
import { useFormContext } from "react-hook-form";

const ShortOutput = ({ label, name, inputStyle, value = 0 }) => {
  const { register } = useFormContext();
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        style={inputStyle}
        value={value}
        name={name}
        ref={register}
        disabled
      />
    </>
  );
};

export default ShortOutput;
