"use client";
import { Blog } from "@prisma/client";
import { Fragment, useEffect, useState } from "react";
import { BlogItem } from "~/components/blog-item";
import BlogsHero from "~/components/blogs-hero/blogs-hero.component";
import { QueryPagination } from "~/components/query-pagination";
import { getAllTags, sortTagsByCount } from "~/lib/utils";
import { getPublishedBlogs } from "./actions";

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getPublishedBlogs().then((data) => {
      setBlogs(data);
      setFilteredBlogs(data);
    });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredBlogs(blogs);
    }
    if (searchTerm) {
      const filteredBlogs = blogs.filter((blog) =>
        blog.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      // setBlogs(filteredBlogs);
      setFilteredBlogs(filteredBlogs);
    }
  }, [searchTerm]);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  const displayBlogs = blogs.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  );
  const tags = getAllTags(blogs);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="">
      <Fragment>
        <BlogsHero
          tags={sortedTags}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </Fragment>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-12 gap-3">
        <div className="col-span-12 col-start-1 sm:col-span-12">
          <hr />
          {filteredBlogs?.length > 0 ? (
            <ul className="flex flex-col">
              {displayBlogs.map((blog) => (
                <BlogItem blog={blog} key={blog.id} />
              ))}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="mt-4 justify-end"
          />
        </div>
      </div>
    </div>
  );
}
