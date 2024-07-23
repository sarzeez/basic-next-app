import { getServerAuthSession } from "@/config/auth";
import Link from "next/link";
import React from "react";
import LogoutButton from "./form/LogoutButton";

const UserInfo = async () => {
  const session = await getServerAuthSession();

  return (
    <div>
      <p>
        <b>Server Side User Info</b>: {JSON.stringify(session, null, "\t")}
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

export default UserInfo;
