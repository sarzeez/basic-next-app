import { getServerAuthSession } from "@/config/auth";
import Link from "next/link";
import React from "react";

const DashboardPage = async () => {
  const session = await getServerAuthSession();
  return (
    <div>
      <Link href="/" className="hover:underline hover:text-blue-800">
        Home Page
      </Link>
      <h1>This dashboard is protected</h1>
      <p>
        session: <code>{JSON.stringify(session, null, 2)}</code>
      </p>
    </div>
  );
};

export default DashboardPage;
