import Navigation from "./Navigation";
import Footer from "./Footer";
import Config from "./Config";

const Layout = ({ children, config, locale, locales, defaultLocale, home }) => (
  console.log(home),
  (
    <div>
      <Config blok={config.content} locales={locales} locale={locale} defaultLocale={defaultLocale}/>
       
      {children}
      <Footer blok={home.content}/>
    </div>
  )
);

export default Layout;
