import { NextApiRequest, NextApiResponse } from "next";
import { Role } from "@prisma/client";
import { db } from "~/server/db";



export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  // const { token, role } = req.query;
  const url = new URL(req.url!, `http://${req.headers.host}`);
  const token = url.searchParams.get("token");
  const role = url.searchParams.get("role");

  const invitation = await db.invitation.findUnique({
    where: { token: token as string },
  });

  if (!invitation) {
    // return res.status(400).json({ error: "Invalid token" });
    return new Response("Invalid token", { status: 400 });
  }

  const user = await db.user.update({
    where: { email: invitation.email },
    data: {
      role:
        role == "ADMIN"
          ? Role.ADMIN
          : role == "EDITOR"
            ? Role.EDITOR
            : Role.USER,
    },
  });

  await db.invitation.delete({
    where: { token: token as string },
  });

  // res.status(200).json({ message: "Role updated successfully", user });
  return new Response("Role updated successfully", { status: 200 });
};
