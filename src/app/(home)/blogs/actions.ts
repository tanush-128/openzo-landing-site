"use server";

import { Invitation } from "@prisma/client";

import { db } from "~/server/db";

const getPublishedBlogs = async () => {
  const blogs = await db.blog.findMany({
    where: {
      published: true,
    },
  });

  return blogs;
};

export { getPublishedBlogs };
