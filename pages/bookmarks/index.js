import { NextSeo } from "next-seo";
import clsx from "clsx";

import { ContentWrapper } from "ui";
import Link from "next/link";
import {
  IdentificationCard,
  Note,
  BracketsCurly,
  Compass,
} from "phosphor-react";

export default function Home({}) {
  const BOOKMARKS = [
    {
      title: "Free For Dev",
      description:
        "A list of software and other offerings with free developer tiers",
      url: "https://free-for.dev/",
    },
    {
      title: "Coolors",
      description: "My goto color palette generator",
      url: "https://coolors.co/",
      icon: "https://coolors.co/assets/img/logo.svg",
    },
    {
      title: "SVG.io",
      description: "Text prompt to SVG",
      url: "https://svg.io/",
      icon: "https://svg.io/images/logo.svg",
    },
    {
      title: "Aceternity",
      description: "Fancy UI components library",
      url: "https://ui.aceternity.com/",
      icon: "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75",
    },
  ];
  return (
    <>
      <NextSeo
        title="Bookmarks – Hasan Yurdakul"
        description="A list of all my bookmarks."
        openGraph={{
          site_name: "Bookmarks – Hasan Yurdakul",
          title: "Bookmarks – Hasan Yurdakul",
          description: "A list of all my bookmarks.",
        }}
        twitter={{
          handle: "@hhasanyurdakul",
          site: "@hhasanyurdakul",
          cardType: "summary_large_image",
        }}
      />
      <ContentWrapper width="620px">
        <div className="w-full">
          <div>
            <h2 className="font-medium text-black text-2xl mb-4 mt-4">
              Bookmarks
            </h2>
            <div className="last:!border-b-0">
              {BOOKMARKS?.map((item) => (
                <div key={item.title}>
                  <Link href={item.url} className="w-full ">
                    <article
                      className={clsx(
                        "flex items-center border-dashed font-medium w-full py-3 md:py-[12px] dark:text-white border-b border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 flex-row",
                        item.url ? "text-black" : "text-gray-800 "
                      )}
                    >
                      {item?.icon ? (
                        <img
                          src={item?.icon}
                          alt={item.title}
                          className="w-6 h-6 rounded-lg bg-gray-400/10 shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:border-gray-800"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-6 h-6 text-lg font-bold text-white bg-black border border-gray-100 rounded-lg dark:border-gray-800">
                          {item?.title?.slice(0, 1)}
                        </div>
                      )}
                      <div className=" flex items-center gap-2  ml-3 ">
                        <h3 className="text-lg  dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-500  text-xs  line-clamp-2  dark:text-gray-400">
                          {item?.description}
                        </p>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
