import Navigation from "./Navigation";
import Footer from "./Footer";
import Config from "./Config";

const Layout = ({ children, story, config, locale, locales, defaultLocale }) => (
console.log(config),
  (
    <div>
      {config ? <Config blok={config.content} locales={locales} locale={locale} defaultLocale={defaultLocale}/> : null}
       
      {children}
      {/* <Footer /> */}
    </div>
  )
);

export default Layout;
