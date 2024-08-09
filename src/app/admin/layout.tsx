import { Role } from "@prisma/client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import AuthProvider from "~/provider/AuthProvider";
import { getServerAuthSession } from "~/server/auth";
import "~/styles/globals.css";
import { Sidebar } from "./sidebar";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerAuthSession();

  console.log(session?.user.email);
  if (
    session === null ||
    session.user.email == undefined ||
    session?.user.role !== Role.ADMIN
  ) {
    redirect("/api/auth/signin");
  }

  return (
    <html>
      <AuthProvider>
        <body className="overflow-y-hidden" contentEditable={false}>
          <div className="flex h-svh">
            <Sidebar session={session} />
            <main
              className="flex-1 overflow-y-hidden p-6"
              contentEditable={false}
            >
              {children}
            </main>
          </div>
        </body>
      </AuthProvider>
    </html>
  );
};

export default RootLayout;
