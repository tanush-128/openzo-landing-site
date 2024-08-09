import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { Blog } from "@prisma/client";
import { Tag } from "./tag";

export function BlogItem({ blog }: { blog: Blog }) {
  {
    return (
      <article className="flex flex-col gap-2 border-b border-border py-3 ">
        <div>
          <h2 className="text-2xl font-bold">
            <Link href={"/blogs/" + blog.slug}>{blog.name}</Link>
          </h2>
        </div>
        <div className="flex gap-2">
          {blog.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
        <div className="max-w-none text-muted-foreground">
          {blog.description}
        </div>
        <div className="flex items-center justify-between">
          <dl>
            <dt className="sr-only">Published On</dt>
            <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
              <Calendar className="h-4 w-4" />
              <time dateTime={blog.createdAt.toISOString()}>
                {formatDate(blog.createdAt.toISOString())}
              </time>

              {/* <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time> */}
            </dd>
          </dl>
          <Link
            href={"/blogs/" + blog.slug}
            className={cn(buttonVariants({ variant: "link" }), "py-0")}
          >
            Read more →
          </Link>
        </div>
      </article>
    );
  }
}
