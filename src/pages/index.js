import Head from "next/head";
import Layout from "../components/Layout";
import Navigation from "@/components/Navigation";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story, locales, locale, defaultLocale, config }) {
  story = useStoryblokState(story, {
    language: locale,
    locales: locales,
    defaultLocale: defaultLocale,
  });

  console.log(story)

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/MARCH 28 ICON Green Minimalist Simple (1).svg" />
      </Head>
      <Layout
        config={config}
        locales={locales}
        locale={locale}
        defaultLocale={defaultLocale}
        home={story.content} 
      >
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locales, locale, defaultLocale }) {
  let slug = "march-28";

  let sbParams = {
    version: "draft", // or 'published',
    language: locale,
    resolve_links: "url",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get("cdn/stories/config", sbParams);
  return {
    props: {
      locales,
      locale,
      defaultLocale,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}
