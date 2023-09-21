import Head from "next/head";

/* Sections imports */
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import OptionButtons from "@/components/OptionButtons";

/* Font imports */
import { Playfair_Display, Source_Code_Pro } from "next/font/google";

/* Font declarations */
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});
const source_sans_pro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source_sans_pro",
});

/* Translations */
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camilo Millan</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/images/favicon.png"
        />
      </Head>

      <main
        className={`${playfair_display.variable} ${source_sans_pro.variable} overflow-hidden font-source_sans_pro`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Divider */}
        <div className="mx-auto h-px w-2/3 border-b border-clr-five/25 dark:border-clr-one/25" />

        {/* About Me */}
        <About />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Options */}
        <OptionButtons />
      </main>
    </>
  );
}

export async function getStaticProps(context: any) {
  /* extract the locale identifier from the URL */
  const { locale } = context;

  return {
    props: {
      /* pass the translation props to the page component */
      ...(await serverSideTranslations(locale)),
    },
  };
}
