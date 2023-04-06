import 'bootswatch/dist/quartz/bootstrap.min.css'
import React, { useEffect } from 'react';
import '../css/style.css'
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp