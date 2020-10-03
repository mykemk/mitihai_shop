import { isNotPastDate } from "./callbacks";

export const isRequired = {
  value: true,
  message: "Sorry, this is a required field",
};

export const validationRules = {
  shortText: {
    required: isRequired,
    maxLength: { value: 15, message: "Name should not exceed 20 characters" },
    minLength: {
      value: 3,
      message: "This field should be atleast 3 characters",
    },
  },
  idNumber: {
    required: isRequired,
    maxLength: {
      value: 15,
      message: "ID number should not exceed 15 Characters",
    },
    minLength: { value: 7, message: "Should be atleast 7 characters" },
  },
  phoneNumber: {
    required: isRequired,
    maxLength: {
      value: 15,
      message: "Phone number should not exceed 15 characters",
    },
    minLength: {
      value: 7,
      message: "Phone number Should be atleast 7 characters",
    },
    pattern: {
      value: /^\d{10}$/,
      message: "Please enter a valid phone number",
    },
  },
  email: {
    required: isRequired,
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      message: "Please enter a valid email address",
    },
    minLength: { value: 5, message: "Email address is too short" },
    maxLength: { value: 30, message: "Email address is too long" },
  },
  longText: {
    required: isRequired,
    minLength: {
      value: 3,
      message: "This field should be atleast 3 characters",
    },
    maxLength: { value: 30, message: "Field should not exceed 30 characters" },
  },
  password: {
    required: isRequired,
    minLength: { value: 8, message: "Password should be atleast 8 characters" },
    maxLength: { value: 30, message: "Pasword too short" },
  },
  productName: {
    required: isRequired,
    minLength: { value: 2, message: "Product name too short" },
    maxLength: { value: 30, message: "Product name too long" },
  },
  longDescription: {
    required: isRequired,
    minLength: { value: 3, message: "Description too short" },
    maxLength: {
      value: 150,
      message: "Description should not exceed 100 characters",
    },
  },
  cost: {
    required: isRequired,
    min: { value: 0, message: "Cost cannot be less than 0" },
    maxLength: { value: 15, message: "Value too large" },
  },
  quantity: {
    required: isRequired,
    min: { value: 0, message: "Quantity cannot be less than 0" },
    maxLength: { value: 15, message: "Quantity too high" },
  },
  eventDate: {
    required: isRequired,
    validate: (date) =>
      isNotPastDate(date) || "Please enter a present or future date",
  },
  shortDesription: {
    required: isRequired,
    maxLength: {
      value: 50,
      message: "Only a maximum of 50 characters is allowed",
    },
  },
  percentage: {
    required: isRequired,
    min: { value: 0, message: "Percentage cannot be less than 0" },
    max: { value: 100, message: "Perentage value should be a maximum of 100" },
  },
  shortDuration: {
    required: isRequired,
    min: { value: 1, message: "Duration should be atleast 1 day" },
    maxLength: { value: 3, message: "Duration too long" },
  },
  postalCode: {
    min: { value: 1, message: "Enter a value greater than 1" },
    maxLength: {
      value: 10,
      message: "Expected a value less than 10 charaters",
    },
  },
  url: {
    pattern: {
      value: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
      message: "Please enter a valid link",
    },
    minLength: { value: 5, message: "Link should be atlease 5 characters" },
    maxLength: {
      value: 50,
      message: "The link provided is too long. Should not exceed 50 charaters",
    },
  },
};
