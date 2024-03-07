import Navigation from "./Navigation";
import Footer from "./Footer";
import Config from "./Config";

const Layout = ({ children, config, locale, locales, defaultLocale, footer }) => (
  // console.log(home.content),
  (
    <div>
      <Config blok={config.content} locales={locales} locale={locale} defaultLocale={defaultLocale}/>
       
      {children}
      <Footer blok={footer.content}/>
    </div>
  )
);

export default Layout;
