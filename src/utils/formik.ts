import {
  FormikErrors,
  FormikTouched,
  FormikValues,
  getIn,
  FormikState,
} from "formik";

// get text field errors
export const getTextFieldErrors = function (
  form: {
    touched: FormikTouched<FormikValues>;
    errors: FormikErrors<FormikValues>;
  },
  field: string,
  defaultHelperText?: string
): { error: boolean; helperText?: string } {
  const fieldError = getIn(form.errors, field);
  const showError = getIn(form.touched, field) && !!fieldError;

  return {
    error: showError,
    helperText: showError ? fieldError : defaultHelperText,
  };
};

// has field error
export const hasFieldError = (
  formik: FormikState<any>,
  name: string
): boolean => {
  return !!formik.touched[name] && Boolean(formik.errors[name]);
};
