import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import Link from "next/link";

export const UserAccount = (props: { signUp: boolean }) => {
  return (
    <div>
      <Typography variant="h3">Create Your Account</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Continue</Button>
      <p>
        Already have an account{" "}
        <Link href={"/"} className="underline">
          Log in
        </Link>
      </p>
      <div className="flex items-center">
        <hr className="w-1/4 m-0 p-0" />
        <span className="mx-2">or</span>
        <hr className="w-1/4 m-0 p-0" />
      </div>
    </div>
  );
};
