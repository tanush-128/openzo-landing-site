"use client";

import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import { Suspense, useState } from "react";
import { createBlog } from "../action";
// import { createBlog } from "~/";

const EditorComp = dynamic(
  () => import("~/components/editor/EditorComponent"),
  { ssr: false },
);

const CreateBlog = () => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(true);
  const [disabled, setDisabled] = useState(false);
  //  const   useSession();
  const { data, status } = useSession();

  const handleSave = async () => {
    setDisabled(true);
    console.log("got Clicked !!!");
    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("tags", tags);
    formData.append("published", published.toString());
    formData.append("content", content);
    formData.append("slug", title.replaceAll(" ", "-"));
    formData.append("createdBy", data?.user.id ?? ""); // Replace "user-id" with the actual user ID

    try {
      await createBlog(formData);
      router.push("/admin");
    } catch (e) {
      console.error(e);
    }
    setDisabled(false);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-12 overflow-y-hidden">
        <div className="sticky top-0 col-span-3 max-h-svh">
          <h1 className="mb-6 text-3xl font-bold">Create New Blog</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded border p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={description}
              cols={30}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block h-36 w-full rounded border p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full rounded border p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1 block w-full rounded border p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Published</label>
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="mt-1 rounded border p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Content</label>
          </div>
          <button
            onClick={handleSave}
            disabled={disabled}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Save
          </button>
        </div>
        <div className="col-span-9">
          <Suspense fallback={null}>
            <EditorComp markdown={content} onChange={(e) => setContent(e)} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
