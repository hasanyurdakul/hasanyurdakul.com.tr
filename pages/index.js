import clsx from "clsx";
import Link from "next/link";
import { ArrowSquareOut, InstagramLogo } from "phosphor-react";
import { Badges, BlogList } from "components";
import { getAllPosts } from "pages/api/blog";
import { getAllProjects } from "pages/api/projects";
import { ContentWrapper, Button } from "ui";
import { ArrowCircleRight } from "phosphor-react";
import Image from "next/image";

export default function Home({ allPosts, allProjects, post }) {
  return (
    <div className="grid md:grid-cols-1 mt-0 md:mt-8">
      <ContentWrapper
        width="620px"
        className="divide-y divide-gray-200 dark:divide-gray-800  space-y-6"
      >
        <div className="">
          <div className="flex  items-end   justify-between ">
            <h2 className="  text-3xl">
              <span className="opacity-70">Hi 👋, I'm </span>
              <span className="font-bold text-black   dark:text-white">
                Hasan Yurdakul!
              </span>
            </h2>
            <Image
              width="100"
              height="10"
              src="/images/site/avatar.jpg"
              className="rounded-xl md:w-[150px]"
              alt="avatar"
            ></Image>
          </div>
          <div className="flex gap-2 mt-3 mb-5 items-center">
            <ul className="!mb-0 list-disc pl-4 dark:text-gray-300/80 space-y-1 md:space-y-[6px]">
              <li>Software developer based in Istanbul, Turkey</li>
              <li>Building .Net Services and web applications.</li>
              <li>
                Taking software development training provided by{" "}
                <Link
                  className="border-b border-gray-300 hover:border-gray-400 dark:text-gray-200"
                  href="https://www.wissenakademie.com/"
                  target="_blank"
                >
                  Wissen Akademie
                </Link>
                .
              </li>

              <li>
                Kinda active on Twitter{" "}
                <Link
                  className="border-b border-gray-300 hover:border-gray-400 dark:text-gray-200"
                  href="https://twitter.com/hhasanyurdakul"
                  target="_blank"
                >
                  @hhasanyurdakul
                </Link>
              </li>
            </ul>
          </div>
          <Badges />
        </div>

        <div className="pt-6 pb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-medium text-black dark:text-white ">
              Projects
            </h2>
            <Button
              variant="secondary"
              className="text-sm"
              href="/projects"
              as="a"
            >
              View all projects →
            </Button>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {allProjects?.map((project) => (
              <div className="min-w-[120px] flex-col px-4 py-2 border  border-gray-200 bg-gray-100/20 dark:border-gray-700/70 rounded-lg hover:bg-gray-100/20 dark:bg-gray-800/20 dark:hover:bg-gray-800/70 dark:hover:border-gray-700 dark:shadow-[0_0_8px_rgba(0,0,0,0.8)] shadow-[0_0_8px_rgba(0,0,0,0.06)] flex relative ">
                {project?.ios ? (
                  <Link
                    href={project?.ios}
                    target="_blank"
                    title={project?.title}
                  >
                    <div className="absolute top-[10%] right-[10%] z-10 opacity-50 hover:opacity-100 hover:scale-[1.1] duration-100">
                      <ArrowSquareOut className="text-base" />
                    </div>
                  </Link>
                ) : project?.web ? (
                  <Link
                    href={project?.web}
                    target="_blank"
                    title={project?.title}
                  >
                    <div className="absolute top-[10%] right-[10%] z-10 opacity-50 hover:opacity-100 hover:scale-[1.1] duration-100">
                      <ArrowSquareOut className="text-base" />
                    </div>
                  </Link>
                ) : (
                  ""
                )}
                <Link
                  href={`/projects/${project?.slug}` || "/"}
                  key={project?.title}
                >
                  <div className="py-3 relative">
                    {project?.icon ? (
                      <img
                        className="w-[40px] rounded-full drop-shadow-xl"
                        src={project?.icon}
                        alt={project?.title}
                      />
                    ) : (
                      <>
                        <div className="flex items-center justify-center w-[42px] h-[42px] text-lg font-medium text-white bg-black border border-gray-100 rounded-full dark:border-gray-800 drop-shadow-xl">
                          {project?.title?.slice(0, 1)}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="flex items-center gap-[6px] mt-1">
                      <h3 className="font-medium line-clamp-1 text-base">
                        {project?.title}
                      </h3>
                      {project?.active ? (
                        <div
                          className="w-[8px] h-[8px] rounded-full bg-green-500"
                          title="Active"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    {project?.tagline ? (
                      <p className="text-sm line-clamp-2 opacity-80">
                        {project?.tagline}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 pb-2">
          <div className="flex items-center gap-3 pb-3">
            <h2 className=" text-xl font-medium text-black dark:text-white">
              Blog
            </h2>
            <Button variant="secondary" className="text-sm" href="/blog" as="a">
              View all blog posts →
            </Button>
          </div>
          <BlogList data={allPosts?.slice(0, 12)} activeSlug={post?.slug} />
        </div>
      </ContentWrapper>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "external",
  ]);

  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
    "active",
    "tagline",
    "web",
    "ios",
  ]);

  return {
    props: {
      allPosts,
      allProjects: allProjects
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .sort((left, right) =>
          left.hasOwnProperty("active")
            ? -1
            : right.hasOwnProperty("active")
            ? 1
            : 0
        ),
    },
  };
}
