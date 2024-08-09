"use client";

import {
  AdmonitionDirectiveDescriptor,
  InsertFrontmatter,
  KitchenSinkToolbar,
  MDXEditor,
  // MDXEditor,
  MDXEditorMethods,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  sandpackPlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
// import ALL_PLUGINS from "@mdxeditor/editor/dist/plugins";
import { FC } from "react";
import { virtuosoSampleSandpackConfig } from "./_boilerplate";
import { on } from "events";
import { basicDark } from "cm6-theme-basic-dark";
interface EditorProps {
  markdown: string;
  onChange: (markdown: string) => void;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const MdxView: FC<EditorProps> = ({ markdown, onChange, editorRef }) => {
  return (
    <MDXEditor
      onChange={onChange}
      ref={editorRef}
      markdown={markdown}
      readOnly
      contentEditableClassName="prose prose-stone prose-invert prose-lg prose-a:text-blue-600 max-w-none  prose-p:text-gray-200 "
      className="dark-editor light  h-full   w-full rounded-md shadow-md"
      plugins={[
        listsPlugin(),
        quotePlugin(),
        headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({
          imageAutocompleteSuggestions: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
          ],
        }),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
        sandpackPlugin({ sandpackConfig: virtuosoSampleSandpackConfig }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            css: "CSS",
            txt: "text",
            tsx: "TypeScript",
            jsx: "React",
          },
          autoLoadLanguageSupport: true,
          codeMirrorExtensions: [basicDark],
        }),
        directivesPlugin({
          directiveDescriptors: [
            // YoutubeDirectiveDescriptor,
            AdmonitionDirectiveDescriptor,
          ],
        }),
        diffSourcePlugin({
          viewMode: "rich-text",
          diffMarkdown: "boo",
          codeMirrorExtensions: [basicDark],
        }),
        markdownShortcutPlugin(),
      ]}
    />
  );
};

export default MdxView;
