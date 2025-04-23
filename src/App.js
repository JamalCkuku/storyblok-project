// pages/_app.js

import { useStoryblokState, storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/Page";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  bridge: true,
  components: {
    page: Page
  }
});

function App() {
  const story = useStoryblokState({
    story: {
      name: 'Home',
      content: { component: 'page' }
    },
    slug: "home",
  });

  return <Page blok={story?.content} />;
}
