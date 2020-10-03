import Shorttext from "./ShortText";
import Longtext from "./LongText";
import Dateinput from "./DateInput";
import Select from "./Select";
import Timeinput from "./TimeInput";
import createDescriptionField from "./DescriptionField";
import Phonenumber from "./PhoneNumber";
import Shortoutput from "./ShortOutput";
import Linkinput from "./LinkInput";
import Postalcode from "./PostalCode";
import Email from "./Email";
import Fileinput from "./FileInput";
import Passwordinput from "./PasswordInput";

let ShortDescription = createDescriptionField(true);
let LongDescription = createDescriptionField(false);

export {
  Shorttext,
  Longtext,
  Dateinput,
  Select,
  Timeinput,
  ShortDescription,
  LongDescription,
  Shortoutput,
  Linkinput,
  Postalcode,
  Phonenumber,
  Email,
  Fileinput,
  Passwordinput,
};
