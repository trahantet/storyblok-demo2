import Head from "next/head";
import Layout from "../components/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
export default function Page({
  story,
  locales,
  locale,
  defaultLocale,
  config,
  footer,
}) {
  story = useStoryblokState(story, {
    language: locale,
    locales: locales,
    defaultLocale: defaultLocale,
  });

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link
          rel="icon"
          href="/MARCH 28 ICON Green Minimalist Simple (1).svg"
        />
      </Head>
      <Layout
        config={config}
        footer={footer}
        locales={locales}
        locale={locale}
        defaultLocale={defaultLocale}
        blok={story ? story.content : null}
      >
        <StoryblokComponent
          blok={story ? story.content : null}
          locale={locale}
        />
      </Layout>
    </div>
  );
}
export async function getStaticProps({
  params,
  locales,
  locale,
  defaultLocale,
}) {
  let slug = params.slug ? params.slug.join("/") : "march-28";
  let sbParams = {
    version: "draft", // or 'published'
    language: locale,
    resolve_links: "url",
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: footer } = await storyblokApi.get(`cdn/stories/footer`, sbParams);
  let { data: config } = await storyblokApi.get("cdn/stories/config", sbParams);
  return {
    props: {
      locales,
      locale,
      defaultLocale,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
      footer: footer ? footer.story : false,
    },
    revalidate: 3600,
  };
}
export async function getStaticPaths({ locales }) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (
      data.links[linkKey].is_folder ||
      data.links[linkKey].slug === "march-28"
    ) {
      return;
    }
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    for (const locale of locales) {
      paths.push({ params: { slug: splittedSlug }, locale });
    }
  });
  return {
    paths: paths,
    fallback: false,
  };
}
