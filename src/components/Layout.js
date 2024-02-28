import Navigation from "./Navigation";
import Footer from "./Footer";
import Config from "./Config";

const Layout = ({ children, story }) => (
  console.log(story),
  (
    <div>
      <Config blok={story.content} />
      {children}
      {/* <Footer /> */}
    </div>
  )
);

export default Layout;
