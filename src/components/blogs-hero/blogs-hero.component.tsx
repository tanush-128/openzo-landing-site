import Link from "next/link";

const BlogsHero = ({
  tags,
  searchTerm,
  setSearchTerm,
}: {
  tags: string[];
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}) => {
  return (
    <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-[1]">
      <div className="mx-auto mt-20 w-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <div className="pb-4 text-4xl font-bold text-transparent text-white md:pb-10 md:text-6xl">
            OPENZO BLOGS
          </div>

          <p className="mx-auto mt-3 max-w-lg text-gray-800">
            Learn about the latest trends in the industry and how Openzo is
            evolutionizing the local commerce space.
          </p>

          <div className="relative mx-auto mt-7 max-w-xl bg-gradient-to-t sm:mt-12">
            <form>
              <div className="relative z-10 flex space-x-3 rounded-lg border bg-white p-2 shadow-lg shadow-gray-900/[.2]">
                <div className="flex-[1_0_0%]">
                  <label
                    htmlFor="hs-search-article-1"
                    className="block text-sm font-medium text-gray-700 text-white"
                  >
                    <span className="sr-only">Search article</span>
                  </label>
                  <input
                    type="email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    name="hs-search-article-1"
                    id="hs-search-article-1"
                    className="block w-full rounded-lg border-transparent px-4 py-2.5 text-gray-400 outline-none"
                    placeholder="Search Blogs"
                  />
                </div>
                <div className="flex-[0_0_auto]">
                  <a
                    className="inline-flex h-[46px] w-[46px] items-center justify-center gap-x-2 rounded-lg border border-transparent bg-kred text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      stroke="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-10 sm:mt-20">
            {tags.map((tag, index) => (
              <Link
                key={index}
                href="#"
                className="m-1 inline-flex items-center gap-x-2 rounded-lg border bg-secondary px-4 py-3 text-sm text-black shadow-sm hover:bg-white focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
