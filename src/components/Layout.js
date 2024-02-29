import Navigation from "./Navigation";
import Footer from "./Footer";
import Config from "./Config";

const Layout = ({ children, story, config, locale, locales, defaultLocale }) => (
// console.log(config),
// console.log(`layout ${locales}`),
  (
    <div>
      {config ? <Config blok={config.content} locales_temp={locales} locale={locale} defaultLocale={defaultLocale}/> : null}
       
      {children}
      {/* <Footer /> */}
    </div>
  )
);

export default Layout;
