"use client";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { UserCard } from "./users/page";

export const Sidebar = ({ session }: { session: Session }) => {
  return (
    <aside className="flex w-64 flex-col bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-2">
            <Link href="/admin">
              Dashboard
              {/* <a className="block rounded p-2 text-white hover:bg-gray-700"> */}
              {/* </a> */}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/admin/event">
              Manage Events
              {/* <a className="block rounded p-2 text-white hover:bg-gray-700"> */}
              {/* </a> */}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/admin/blog/create">
              Create New Blog
              {/* <a className="block rounded p-2 text-white hover:bg-gray-700"> */}
              {/* </a> */}
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/admin/users">
              Manage Users
              {/* <a className="block rounded p-2 text-white hover:bg-gray-700"> */}
              {/* </a> */}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 p-2">
        <UserCard user={session.user} className="bg-transparent" />
        <button onClick={() => signOut()}>
          <LogOut className="h-4 w-4 hover:text-red-500" />
        </button>
        {/* {session?.user.email} */}
      </div>
    </aside>
  );
};
