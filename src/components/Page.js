// components/Page.js

import { storyblokEditable } from "@storyblok/react";

const Page = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      <h1>{blok.title}</h1>
      <p>{blok.content}</p>
    </main>
  );
};

export default Page;

