import { getTextFieldErrors } from "@/utils/formik";
import React from "react";

type Props = {
  label: string;
  name: string;
  formik: any;
  placeholder: string;
};

const TextField = ({ label, name, formik, placeholder }: Props) => {
  const { error, helperText } = getTextFieldErrors(formik, name);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className="block border rounded w-full p-2 mt-2"
      />
      {error && <span className="text-sm text-red-800">{helperText}</span>}
    </div>
  );
};

export default TextField;
