import React from "react";
import Styles from "./vendor-styles.module.css";
import { useForm, FormContext } from "react-hook-form";
import PersonalDetailsInput from "./PersonalDetailsInput";
import ShopDetailsInput from "./ShopDetailsInput";
import ContactDetailsInput from "./ContactDetailsInput";
import VendorUpdateButton from "./VendorUpdateButton";

const VendorUpdate = () => {
  const formMethods = useForm();
  return (
    <div className={`${Styles.signUpForm} ${Styles.updateForm}`}>
      <h3 className="centreTitle">Update details</h3>
      <FormContext {...formMethods}>
        <form>
          <div className={Styles.personalDetails}>
            <PersonalDetailsInput />
            <VendorUpdateButton />
          </div>
          <div className={Styles.shopDetails}>
            <ShopDetailsInput />
            <VendorUpdateButton />
          </div>
          <div className={Styles.contactDetails}>
            <ContactDetailsInput />
            <VendorUpdateButton />
          </div>
        </form>
      </FormContext>
    </div>
  );
};

export default VendorUpdate;
