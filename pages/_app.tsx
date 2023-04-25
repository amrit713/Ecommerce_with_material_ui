import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../src/theme/theme";
import { Router } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect } from "react";
import Providers from "../src/components/elements/Providers";
import { store } from "../store/store";
import { getMe } from "../store/action/authAction";

import { Toaster } from "react-hot-toast";
import Layout from "../src/layout/Layout";

// export function reportWebVitals(metric: any) {
//   // console.log(metric)
//   console.log(`${(metric.startTime - metric.value)/1000} sec`)
// }

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    store.dispatch(getMe());
  }, []);

  Router.events.on("routeChangeStart", (url: any) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url: any) => {
    setLoading(false);
  });

  return (
    <React.StrictMode>
      <Providers>
        <ThemeProvider theme={theme}>
          {loading && (
            <div className="w-full fixed top-0 z_index  ">
              <LinearProgress color="primary" />
            </div>
          )}
          <Toaster position="top-center" reverseOrder={false} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Providers>
    </React.StrictMode>
  );
}

export default MyApp;
