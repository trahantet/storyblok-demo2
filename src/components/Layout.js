import Navigation from "./Navigation";
import Footer from "./Footer";
import Config from "./Config";

const Layout = ({ children, story, config, locale, locales, defaultLocale }) => (
console.log(locales),
  (
    <div>
      <Config blok={config.content} locales={locales} locale={locale} defaultLocale={defaultLocale}/>
       
      {children}
      {/* <Footer /> */}
    </div>
  )
);

export default Layout;
