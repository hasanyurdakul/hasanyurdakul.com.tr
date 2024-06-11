import { ExternalLinkIcon, AppleIcon } from "lib/icons";

export default function WorkContent({ post }) {
  return (
    <div
      key={post.title}
      className="inline-flex flex-col items-center justify-start w-full pb-32"
    >
      {post?.icon ? (
        <div className="w-12 h-12 mx-auto mb-5">
          <img
            src={post?.icon}
            className="mb-4 border border-gray-100 rounded-full shadow-lg dark:border-gray-600"
          />
        </div>
      ) : (
        ""
      )}
      <h1 className="text-4xl mb-3 font-black md:text-4xl text-center max-w-[620px] mx-auto dark:text-white">
        {post.title}
      </h1>
      {post?.tech ? (
        <div className="flex flex-wrap mx-auto mb-5 gap-2 align-middle overflow-auto">
          {post?.tech.map((tech) => (
            <div
              key={tech}
              className="mt-2 font-mono border border-gray-200 dark:border-gray-800 px-2  rounded-md text-gray-600 dark:text-gray-400 shadow-[0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-xs"
            >
              {tech}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-center items-center space-x-5 max-w-[620px] w-full mt-5 mb-10">
        {post?.web ? (
          <a
            href={post?.web}
            target="_blank"
            className="flex items-center justify-center w-full px-4 py-1 text-base text-center text-white bg-black rounded-lg shadow-lg dark:bg-white dark:text-black"
          >
            <span className="w-5 h-5 mr-2">{ExternalLinkIcon}</span>
            <span>Web App</span>
          </a>
        ) : (
          ""
        )}
        {post?.github ? (
          <a
            href={post?.github}
            target="_blank"
            className="flex items-center justify-center w-full px-4 py-1 text-base text-center text-white bg-black rounded-lg shadow-lg dark:bg-white dark:text-black"
          >
            <span className="w-5 h-5 mr-2">{ExternalLinkIcon}</span>
            <span>Github</span>
          </a>
        ) : (
          ""
        )}
        {post?.ios ? (
          <a
            href={post?.ios}
            target="_blank"
            className="flex items-center justify-center w-full px-4 py-1 text-base text-center text-white bg-black rounded-lg shadow-lg dark:bg-white dark:text-black"
          >
            <span className="w-5 h-5 mr-2">{AppleIcon}</span>
            <span>iOS App</span>
          </a>
        ) : (
          ""
        )}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post?.content }}
        className="inline-block mx-auto post-content"
      />
    </div>
  );
}
