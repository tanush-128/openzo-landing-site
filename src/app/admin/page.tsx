"use client";

import { Blog, User } from "@prisma/client";
import { Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { getAllBlogs, getUserById, deleteBlog } from "./blog/action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setBlogs(await getAllBlogs());
    };
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-3xl" contentEditable={false}>
      <div className="mb-6 flex items-center justify-between">
        <div className="text-3xl font-bold">All Blogs</div>
        <Link
          href="/admin/blog/create"
          className="flex items-center rounded-lg bg-blue-500 px-3 py-2 font-bold text-white"
        >
          <Plus size={18} className="mr-2" />
          Create New Blog
        </Link>
      </div>
      <Table className="max-w-3xl">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Created By</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <BlogRow
              blog={blog}
              deleteSelectedBlog={() => {
                deleteBlog(blog.id);
                setBlogs(blogs.filter((b) => b.id !== blog.id));
              }}
            />
          ))}
        </TableBody>
      </Table>

      {/* <button onClick={() => sendInvitation("agarwalom128@gmail.com", "ADMIN")}>
        mail try
      </button> */}
    </div>
  );
};

export default AdminDashboard;

const BlogRow = ({
  blog,
  deleteSelectedBlog,
}: {
  blog: Blog;
  deleteSelectedBlog: () => void;
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      // user = await getUserById(blog.createdById);
      setUser(await getUserById(blog.createdById));
      console.log(user);
    };
    fetchUser();
  }, []);

  return (
    <TableRow key={blog.id}>
      <TableCell>
        <Link
          href={`/admin/blog/edit/${blog.id}`}
          className="text-blue-500 hover:underline"
        >
          {blog.name}
        </Link>
      </TableCell>
      <TableCell>{new Date(blog.createdAt).toDateString()}</TableCell>
      <TableCell>
        {user ? user.name : "Loading"}

        {/* {getUserById(blog.createdById).then((user) => user.name)} */}
      </TableCell>

      <TableCell className="flex space-x-2">
        <Link
          href={`/admin/blog/edit/${blog.id}`}
          className="flex h-10 items-center rounded-lg bg-blue-500 px-3 font-bold text-white"
        >
          Edit
        </Link>
        <AlertDialog>
          <AlertDialogTrigger className="rounded-lg bg-red-500 p-2 text-white">
            <Trash2 size={18} />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                Blog
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500"
                onClick={() => {
                  deleteSelectedBlog();
                }}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
};
