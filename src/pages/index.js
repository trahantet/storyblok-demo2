import Head from "next/head";
import Layout from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";


export default function Home({ story, locales, locale, defaultLocale, preview  }) {
  
  story = useStoryblokState(story, {
    language: locale
  });
  return (
    <div >
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout locales={locales} locale={locale} defaultLocale={defaultLocale}>
        <StoryblokComponent blok={story.content} locale={locale}  />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locales, locale, defaultLocale }) {
  let slug = 'home';

  let sbParams = {
    version: 'draft', // or 'published',
    resolve_relations: ['popular-articles.articles'],
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  return {
    props: {
      locales,
      locale,
      defaultLocale,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}