"use client";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {
  title: string;
};

const LogoutButton = (props: Props) => {
  return (
    <button
      className="px-3 py-2 rounded bg-gray-50 hover:bg-gray-100"
      onClick={() => signOut({ callbackUrl: "/", redirect: true })}
    >
      {props.title}
    </button>
  );
};

export default LogoutButton;
