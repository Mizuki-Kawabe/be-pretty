"use client";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Logged In");
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Heading title="Register" />
      <button className="btn btn-outline text-black w-full" onClick={() => {}}>
        <FaGoogle />
        Sign up with Google
      </button>
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
        {isLoading ? "Loading" : "Register"}
      </button>
      <p className="text-sm">
        Already have an account?
        <Link href="/login" className="underline ml-1">
          Log in
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
