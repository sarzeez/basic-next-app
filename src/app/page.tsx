import { getServerAuthSession } from "@/config/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <main className="flex items-center justify-center h-screen w-full bg-gray-200">
      <div className="p-10 rounded-lg bg-white">
        <h1 className="text-3xl">Home Page</h1>
        <ul>
          <li className="hover:underline w-max">
            <Link href="/auth/login">Login</Link>
          </li>
        </ul>
        <div>User Session: {JSON.stringify(session)}</div>
      </div>
    </main>
  );
}
