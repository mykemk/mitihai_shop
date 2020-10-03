import React from "react";
import { Shorttext, Select, Timeinput } from "shared/form-components";

const ShopDetailsInput = () => {
  return (
    <>
      <h3 className="section-title">Shop Details</h3>
      <Shorttext
        name="shopName"
        placeholder="Shop Name"
        label="How would you Like to name your shop?"
      />
      <Shorttext
        name="location"
        placeholder="Your Location"
        label="Where are you located ?"
      />
      <Select
        name="availableOn"
        label="On which days can customers find you ?"
        options={["Everyday", "Weekends only", "Weekdays Only"]}
      />
      <Timeinput name="opensAt" label="At what time do you open ?" />
      <Timeinput name="clossesAt" label="At what time do you Close ?" />
    </>
  );
};

export default ShopDetailsInput;
