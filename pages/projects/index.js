import { NextSeo } from "next-seo";
import { WorkList } from "components";
import { getAllProjects } from "pages/api/projects";
import { ContentWrapper } from "ui";

export default function Home({ allProjects }) {
  return (
    <>
      <NextSeo
        title="Projects – Hasan Yurdakul"
        description="A list of all my side-projects, mostly written in React.js, React Native, Next.js and TailwindCSS."
        openGraph={{
          site_name: "Projects – Hasan Yurdakul",
          title: "Projects – Hasan Yurdakul",
          description:
            "A list of all my side-projects, mostly written in React.js, React Native, Next.js and TailwindCSS.",
        }}
        twitter={{
          handle: "@hhasanyurdakul",
          site: "@hhasanyurdakul",
          cardType: "summary_large_image",
        }}
      />
      <ContentWrapper width="620px">
        <WorkList allPosts={allProjects} />
      </ContentWrapper>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
    "tagline",
  ]);

  return {
    props: { allProjects },
  };
}
