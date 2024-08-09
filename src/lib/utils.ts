import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMeta() {
  return {
    title: "KBS",
    description: "Kharagpur Blockchain Society",
    icons: [{ rel: "icon", url: "/logo.png" }],
  };
}
export function getAllTags(posts: any) {
  const tags = posts.reduce((acc: any, post: any) => {
    post.tags.forEach((tag: any) => {
      if (acc[tag]) {
        acc[tag] += 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});
  return tags;
}

export function sortTagsByCount(tags: any) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
