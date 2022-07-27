import { React, useEffect, useState } from "react";
import { omit } from "lodash";
function useForm(callback) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const validate = (event, name, value) => {
    switch (name) {
      case "dispDate":
        const date = new Date();
        let sDate = new Date(value);
        sDate = `${sDate.getDate()}-${sDate.getMonth()}-${sDate.getFullYear()}`;
        const newDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        console.log(newDate);
        if (sDate < newDate) {
          console.log("Date is less then current date");
          setErrors({
            ...errors,
            "created-date": "Date is less then the current Date",
          });
        } else {
          let newObj = omit(errors, "created-date");
          setErrors(newObj);
        }
        break;
      case "blogHeading":
        if (value.length < 10) {
          setErrors({
            ...errors,
            "blog-heading": "Blog heading cannot be empty",
          });
        } else {
          let newObj = omit(errors, "blog-heading");
          setErrors(newObj);
        }
        break;
      case "authorName":
        if (value.length < 10) {
          setErrors({
            ...errors,
            author: "author cannot be empty",
          });
        } else {
          let newObj = omit(errors, "author");
          setErrors(newObj);
        }
        break;
      case "blogDescription":
        if (value.length < 5) {
          setErrors({
            ...errors,
            "text-discription": "Blog discription cannot be empty",
          });
        } else {
          let newObj = omit(errors, "text-discription");
          setErrors(newObj);
        }
        break;
      case "selectedImage":
        const re = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
        console.log(re.test(value));
        if (!re.test(value)) {
          setErrors({
            ...errors,
            "image-upload": "Please upload a valid image",
          });
        } else {
          let newObj = omit(errors, "image-upload");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let value = event.target.value;
    validate(event, name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      console.log(errors);
      alert("There is an Error!");
    }
  };
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
