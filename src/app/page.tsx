import ClientUserInfo from "@/components/ClientUserInfo";
import UserInfo from "@/components/UserInfo";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-full bg-gray-200">
      <div className="p-10 rounded-lg bg-white flex flex-col gap-3">
        <h1 className="text-3xl">Home Page</h1>
        <UserInfo />
        <ClientUserInfo />
        <Link
          href="/dashboard"
          className="hover:underline hover:text-blue-800 w-max"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}
