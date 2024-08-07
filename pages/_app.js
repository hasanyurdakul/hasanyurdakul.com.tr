import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import "styles/app.scss";
import "styles/blog.scss";
import MainLayout from "layouts/main";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useRouter } from "next/router";
import { AuroraBackground } from "components/auroraBackground";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://hasanyurdakul.com.tr` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(
        "Message received from the child: " + event?.data,
        event?.data?.message,
        event?.data?.blob
      ); // Message received from child
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <>
        <AuroraBackground className="overflow-hidden bg-fixed  ">
          <DefaultSeo
            title="Hi, I'm Hasan Yurdakul!"
            description="I'm a engineer. I build SaaS apps."
            canonical={canonicalUrl}
            openGraph={{
              site_name: "Hi, I'm Hasan Yurdakul!",
              title: "Hi, I'm Hasan Yurdakul!",
              description:
                "I'm a engineer. I build SaaS apps.",
              images: [
                {
                  url: "https://hasanyurdakul.com.tr/images/site/meta.jpg",
                  width: 800,
                  height: 600,
                  alt: "Hasan Yurdakul",
                },
              ],
            }}
            twitter={{
              handle: "@hhasanyurdakul",
              site: "@hhasanyurdakul",
              cardType: "summary_large_image",
            }}
            additionalLinkTags={[
              {
                rel: "apple-touch-icon",
                href: "/touch-icons/main-icon.png",
              },
            ]}
          />

         
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AuroraBackground>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
