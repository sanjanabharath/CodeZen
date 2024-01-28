import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Signin = () => {
  return (
    <div className="flex items-center flex-col">
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="main logo"
        style={{ borderRadius: "50%", marginTop: "3px" }}
      />
      <div className="flex items-center flex-col gap-6">
        <Typography variant="h4" className="mt-16">
          Welcome Back
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="w-full"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className="w-full"
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#94ff00", width: "100%" }}
        >
          Continue
        </Button>
        <p>
          Already have an account?{" "}
          <Link href={"/"} className="underline">
            Log in
          </Link>
        </p>
        <div className="flex items-center">
          <hr className="w-1/4 m-0 p-0 text-black" />
          <span className="mx-2">or</span>
          <hr className="w-1/4 m-0 p-0" />
        </div>
        <Button
          component="label"
          variant="outlined"
          startIcon={<FcGoogle />}
          className="normal-case w-full"
        >
          Continue with Google
        </Button>
        <Button
          component="label"
          variant="outlined"
          startIcon={<FaLinkedin />}
          className="normal-case w-full"
        >
          Continue with LinkedIn
        </Button>
        <Button
          component="label"
          variant="outlined"
          startIcon={<VscGithubInverted />}
          className="normal-case w-full"
        >
          Continue with Github
        </Button>
      </div>
    </div>
  );
};
