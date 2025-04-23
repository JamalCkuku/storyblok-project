// pages/_app.js

import '../styles/globals.css';
import '../lib/storyblok'; // this runs storyblokInit()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
