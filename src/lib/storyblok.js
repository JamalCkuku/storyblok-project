// lib/storyblok.js

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page"; // 

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN, // secure access token
  use: [apiPlugin],
  bridge: true,
  components: {
    page: Page, // register more components as needed
  },
});
