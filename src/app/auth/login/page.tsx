"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@/components/form/TextField";

type FormValues = {
  username: string;
  password: string;
};

const initialValues: FormValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().nullable().required("Username is required"),
  password: Yup.string().nullable().required("Password is required"),
});

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      const callbackUrl = searchParams.get("callbackUrl") || "/";
      if (response?.ok) {
        router.push(callbackUrl);
        return;
      }
      setError("Invalid credentials.");
    } catch (error) {
      setError("Server is not available, please try again!");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex h-screen justify-center items-center px-6 lg:px-8 bg-gray-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-20 bg-white p-10 rounded-lg">
        <form
          className="space-y-6"
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Username"
            name="username"
            formik={formik}
            placeholder="Username"
          />
          <TextField
            label="Password"
            name="password"
            formik={formik}
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full border bg-gray-100 p-2 rounded hover:bg-slate-200"
          >
            Submit
          </button>
          {error ? (
            <p className="text-red-600 text-center capitalize">{error}</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
