"use server";

import { Invitation } from "@prisma/client";
import { db } from "~/server/db";
import { v4 as uuidv4 } from "uuid";
import { sendMail } from "~/lib/mailer";
import { Linkedin } from "lucide-react";

const getAllBlogs = async () => {
  const blogs = await db.blog.findMany({});

  return blogs;
};

const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
};

const getUserAdmins = async () => {
  const admins = await db.user.findMany({
    where: {
      role: "ADMIN",
    },
  });

  return admins;
};

const getUserEditors = async () => {
  const editors = await db.user.findMany({
    where: {
      role: "EDITOR",
    },
  });

  return editors;
};

const getIniviationByToken = async (
  token: string,
): Promise<Invitation | null> => {
  const invitation = await db.invitation.findUnique({
    where: {
      token: token,
    },
  });

  return invitation;
};

const getBlog = async (id: string) => {
  const blog = await db.blog.findUnique({
    where: {
      id: id,
    },
  });

  return blog;
};

const getBlogBySlug = async (slug: string) => {
  const blog = await db.blog.findFirst({
    where: {
      slug: slug,
    },
  });

  return blog;
};

const createBlog = async (formData: FormData) => {
  console.log(formData);
  try {
    await db.blog.create({
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        // date: formData.get('date'),
        // tags: formData.get('tags') as string,
        tags: (formData.get("tags") as string).split(","),
        published:
          (formData.get("published") as string) === "true" ? true : false,
        content: formData.get("content") as string,

        slug: formData.get("slug") as string,
        createdBy: {
          connect: {
            id: formData.get("createdBy") as string,
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
  }
};

const updateBlog = async (formData: FormData) => {
  console.log(formData);
  try {
    await db.blog.update({
      where: {
        id: formData.get("id") as string,
      },
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        // date: formData.get('date'),
        // tags: formData.get('tags') as string,
        tags: (formData.get("tags") as string).split(","),
        published:
          (formData.get("published") as string) === "true" ? true : false,
        content: formData.get("content") as string,

        slug: formData.get("slug") as string,
        createdBy: {
          connect: {
            id: formData.get("createdBy") as string,
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
  }
};

const sendInvitation = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  if (!email || !role) {
    throw new Error("Email and role are required");
  }

  const token = uuidv4();
  const url = `${process.env.NEXTAUTH_URL}/invite?token=${token}&role=${role}`;

  try {
    await sendMail(
      email,
      "You are invited to join as an admin/editor",
      `You have been invited to join as an ${role}. Click the link to accept the invitation: ${url}`,
    );

    await db.invitation.create({
      data: {
        email,
        token,
        role: role as any,
      },
    });

    return { message: "Invitation sent" };
  } catch (error: any) {
    return { error: error.message };
  }
};

const getPendingInvitations = async () => {
  const invitations = await db.invitation.findMany();

  return invitations;
};

const deleteInvitation = async (id: string) => {
  await db.invitation.delete({
    where: {
      id: id,
    },
  });
};

const deleteBlog = async (id: string) => {
  await db.blog.delete({
    where: {
      id: id,
    },
  });
};

export {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  getBlogBySlug,
  getUserById,
  getIniviationByToken,
  getUserAdmins,
  getUserEditors,
  sendInvitation,
  getPendingInvitations,
  deleteInvitation,
  deleteBlog,
};
