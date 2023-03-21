import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "../store/store";
import { Provider } from "react-redux";

import theme from "../src/theme/theme";
import { Router } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  Router.events.on("routeChangeStart", (url: any) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url: any) => {
    setLoading(false);
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {loading && (
          <div className="w-full fixed top-0 z_index  ">
            <LinearProgress color="primary" />
          </div>
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
