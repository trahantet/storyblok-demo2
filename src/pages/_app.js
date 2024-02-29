import "@/styles/globals.css";
import { storyblokInit, apiPlugin, RichTextSchema } from "@storyblok/react";

import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Config from "@/components/Config";
import HeaderMenu from "@/components/HeaderMenu";
import MenuLink from "@/components/MenuLink";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Announcement from "@/components/Annoucenment";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Section from "@/components/Section";
import Form from "@/components/Form";
import FormInputs from "@/components/FormInputs";
import Email from "@/components/validators/Email";
import Required from "@/components/validators/Required";
import MaxLength from "@/components/validators/MaxLength";
import MinLength from "@/components/validators/MinLength";
import Numeric from "@/components/validators/Numeric";
import FtBanner from "@/components/FTBanner";
import Button from "@/components/Button";
import LineBreak from "@/components/LineBreak";
import Dynamic from "@/components/Dynamic";
import Collect from "@/components/Collection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import {
  Inter,
  Work_Sans,
  Yeseva_One,
  Montserrat,
  Quicksand,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const yeseva_one = Yeseva_One({
  subsets: ["latin"],
  variable: "--font-yeseva-one",
  weight: ["400"],
  display: "swap",
});

const sailors = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

// const mySchema = cloneDeep(RichTextSchema);

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  layout: Layout,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  hero: Hero,
  ticker: Ticker,
  announcement: Announcement,
  header: Header,
  banner: Banner,
  section: Section,
  Form: Form,
  "form inputs": FormInputs,
  Email: Email,
  Required: Required,
  "Maximum Length": MaxLength,
  "Minimum Length": MinLength,
  Numeric: Numeric,
  feature_banner: FtBanner,
  button: Button,
  line_break: LineBreak,
  dynamic: Dynamic,
  Collection: Collect,
  Footer: Footer,
  Navigation: Navigation,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  components,
  // richText: {
  //   schema: mySchema,
  //   resolver: (component, blok) => {
  //     switch (component) {
  //       case "my-custom-component":
  //         return `<div class="my-component-class">${blok.text}</div>`;
  //       default:
  //         return "Resolver not defined";
  //     }
  //   },
  // },
});

function MyApp({ Component, pageProps }) {
  console.log(pageProps.locales)
  return (
    <main
      className={`${yeseva_one.variable} ${inter.variable} ${sailors.variable}  ${quicksand.variable}`}
    >
      <Layout config={pageProps.config} locales={pageProps.locales} locale={pageProps.locale} defaultLocale={pageProps.defaultLocale}>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
