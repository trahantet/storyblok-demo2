import Navigation from "./Navigation";
import Footer from "./Footer";
import Config from "./Config";


function getAway() {
    window.open("http://weather.com", "_newtab"); //Open new tab and switch to it.
    window.location.replace("http://google.com"); //Change current tab (doesn't work on codepen
    console.log("clicked")
  }

const Layout = ({ children, config, locale, locales, defaultLocale, footer }) => (
  
  
  

  
  // console.log(home.content),

    <div>
      <Config blok={config.content} locales={locales} locale={locale} defaultLocale={defaultLocale}/>
       
      {children}
      <button className="exit fixed -right-[2.1%] top-[50%] rotate-90 bg-lav p-[1%] uppercase flex align-center" onClick={getAway}>Quick Exit</button>
      <Footer blok={footer.content}/>
      <style jsx>{`
        .exit {
         position:fixed
        }
        @media (max-width: 768px) {
          .exit {
            
            display: none;
            
          }
        }
      `}</style>
    </div>

);

export default Layout;
