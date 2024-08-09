// "use client";
import { compileMDX } from "next-mdx-remote/rsc";

import rehypeSlug from "rehype-slug";
// import Video from "@/app/components/Video";
// import CustomImage from "@/app/components/CustomImage";

interface PostPageProps {
  params: {
    id: string;
  };
}

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getBlogBySlug } from "~/app/admin/blog/action";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";

import { createHighlighterCore } from "shiki/core";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// const myLang = JSON.parse(fs.readFileSync("solidity.json", "utf8"));

const highlighter = await createHighlighterCore({
  themes: [import("shiki/themes/github-dark.mjs")],
  langs: [
    import("shiki/langs/javascript.mjs"),
    import("shiki/langs/solidity.mjs"),
    import("shiki/langs/markdown.mjs"),
    import("shiki/langs/json.mjs"),
    import("shiki/langs/css.mjs"),
    import("shiki/langs/html.mjs"),
    import("shiki/langs/yaml.mjs"),
    import("shiki/langs/jsx.mjs"),
    import("shiki/langs/typescript.mjs"),
    import("shiki/langs/python.mjs"),
  ],
  langAlias: {
    js: "javascript",
    sol: "solidity",
    ts: "typescript",
    py: "python",
    md: "markdown",
  },
  loadWasm: import("shiki/wasm"),
});

export default async function RemoteMdxPage({ params }: PostPageProps) {
  const blog = await getBlogBySlug(params.id);

  if (!blog) {
    return <div>404 - Not found {params.id}</div>;
  }

  const { frontmatter, content } = await compileMDX<{
    title: string;
    description: string;
    date: string;
    tags: string[];
    published: boolean;
  }>({
    source: blog.content,
    components: {
      // Video,
      // CustomImage,
    },

    options: {
      parseFrontmatter: true,

      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypeShikiFromHighlighter,
            highlighter,
            {
              // theme: "vitesse-dark",
              theme: "github-dark",
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["subheading-anchor"],
                ariaLabel: "Link to section",
              },
            },
          ],
          rehypeSlug,
        ],
      },
    },
  });

  return (
    <div className="mx-auto xl:max-w-4xl">
      <Link
        href={"/blogs"}
        className="flex items-center space-x-1 px-2 text-lg"
      >
        <ArrowLeft />
        <span>Back</span>
      </Link>
      <div className="prose prose-stone mt-12 max-w-[100svw] p-4 lg:prose-xl prose-a:text-blue-600">
        <article>{content}</article>
      </div>
    </div>
  );
}
