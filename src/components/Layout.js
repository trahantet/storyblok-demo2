import Navigation from "./Navigation";
import Footer from "./Footer";
import Config from "./Config";

const Layout = ({ children, config, locale, locales, defaultLocale }) => (
  // console.log(story),
  (
    <div>
      <Config blok={config.content} locales={locales} locale={locale} defaultLocale={defaultLocale}/>
       
      {children}
      {/* <Footer /> */}
    </div>
  )
);

export default Layout;
