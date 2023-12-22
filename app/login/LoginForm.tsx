"use client";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Heading title="Sign up" />
      <button className="btn btn-outline text-black w-full" onClick={() => {}}>
        <FaGoogle />
        Login with Google
      </button>
      <hr className="bg-slate-300 w-full h-px" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <button
        className="btn bg-deepTan border-none text-white"
        onClick={handleSubmit(onSubmit)}
      >
        {isLoading ? "Loading" : "Login"}
      </button>
      <p className="text-sm">
        Do not have an account?
        <Link href="/login" className="underline ml-1">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
