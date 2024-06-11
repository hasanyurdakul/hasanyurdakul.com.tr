import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

export default function WorkList({ allPosts, activeSlug }) {
  const {
    query: { slug },
  } = useRouter();

  return (
    <div className="w-full">
      <div
      // className={clsx(
      //   "bg-gray-50 dark:bg-gray-900 overflow-auto rounded-lg h-full border border-gray-200/50 dark:border-gray-800/50"
      // )}
      >
        <h2 className="font-medium text-black text-2xl mb-4 mt-4">Projects</h2>
        <div className="last:!border-b-0">
          {allPosts?.map((post) => (
            <div
              key={post.slug}
              // className="border-gray-200/50 dark:border-gray-800/50 py-[5px] border-b"
            >
              <Link href={`/projects/${post.slug}`} className="w-full ">
                <article
                  className={clsx(
                    "flex items-center border-dashed font-medium w-full py-3 md:py-[12px] dark:text-white border-b border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 flex-row",
                    activeSlug == post.slug ? "text-black" : "text-gray-800 "
                  )}
                  // className={clsx(
                  //   "rounded-lg flex items-center text-sm w-full py-[10px] transition-all duration-150 ease-in-out  dark:text-white",
                  //   activeSlug == post.slug
                  //     ? "bg-white text-black dark:bg-gray-800 shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                  //     : "text-gray-800  hover:bg-white dark:hover:bg-gray-800 hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                  // )}
                >
                  {post?.icon ? (
                    <img
                      src={post?.icon}
                      alt={post.title}
                      className="w-6 h-6 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:border-gray-800"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-6 h-6 text-lg font-bold text-white bg-black border border-gray-100 rounded-full dark:border-gray-800">
                      {post?.title?.slice(0, 1)}
                    </div>
                  )}
                  <div className=" flex items-center gap-2  ml-3 ">
                    <h3 className="text-lg  dark:text-white">{post.title}</h3>
                    <p className="text-gray-500  text-xs  line-clamp-2  dark:text-gray-400">
                      {post?.tagline}
                    </p>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
