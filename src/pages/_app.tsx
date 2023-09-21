import type { AppProps } from "next/app";
import "@/styles/globals.css";

/* Next themes imports */
import { ThemeProvider } from "next-themes";

/* Tranlations provider */
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
