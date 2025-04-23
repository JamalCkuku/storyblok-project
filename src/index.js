// pages/[slug].js

import { useStoryblokState, getStoryblokApi } from "@storyblok/react";
import Page from "./components/Page";

export default function DynamicPage({ story }) {
  story = useStoryblokState(story); // enables live preview
  return <Page blok={story.content} />;
}

export async function getStaticProps({ params }) {
  const slug = params.slug ? params.slug : "home";
  const sbParams = {
    version: "draft", // gets draft version
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data.story,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/");

  const paths = Object.keys(data.links).map((linkKey) => {
    const slug = data.links[linkKey].slug;
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
