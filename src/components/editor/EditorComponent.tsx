"use client";

import {
  AdmonitionDirectiveDescriptor,
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
import { basicDark } from "cm6-theme-basic-dark";
import { solidity } from "@replit/codemirror-lang-solidity";
import { FC } from "react";
import {
  YoutubeDirectiveDescriptor,
  virtuosoSampleSandpackConfig,
} from "./_boilerplate";
import "~/styles/globals.css";
interface EditorProps {
  markdown: string;
  onChange: (markdown: string) => void;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, onChange, editorRef }) => {
  return (
    <div>
      <script src="./node_modules/codemirror-solidity/solidity.js"></script>
      <link rel="stylesheet" href="@radix-ui/colors/mauve-dark.css" />
      <MDXEditor
        onChange={onChange}
        ref={editorRef}
        markdown={markdown}
        contentEditableClassName="prose prose-stone bg-black  prose-invert prose-lg prose-a:text-blue-600 max-w-none  prose-p:text-gray-200  prose-li:text-gray-200"
        className="dark-editor dark-theme h-full max-h-svh  w-full overflow-y-auto  rounded-md border  border-gray-800 shadow-md"
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <KitchenSinkToolbar />,
              </>
            ),
          }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
          linkPlugin(),
          // slashMenuPlugin(),
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
              sol: "Solidity",
              py: "Python",
              js: "JavaScript",
              css: "CSS",
              txt: "text",
              tsx: "TypeScript",
              jsx: "React",
              sh: "Shell",
            },

            autoLoadLanguageSupport: true,
            codeMirrorExtensions: [basicDark, solidity],
          }),
          directivesPlugin({
            directiveDescriptors: [
              YoutubeDirectiveDescriptor,
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
    </div>
  );
};

export default Editor;
