"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import LogoutButton from "./form/LogoutButton";

const ClientUserInfo = () => {
  const session = useSession();

  return (
    <div>
      <p>
        <b>Client Side User Info</b>: {JSON.stringify(session, null, "\t")}
      </p>
      {session ? (
        <LogoutButton title="Logout" />
      ) : (
        <>
          <Link
            href="/auth/login"
            className="hover:underline hover:text-blue-800"
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default ClientUserInfo;
