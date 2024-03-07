import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Config = ({ locales, locale, defaultLocale, blok }) => {
  // console.log(blok)
  const router = useRouter();
  const changeLocale = (loc) => {
    router.push(router.asPath, router.asPath, { locale: loc });
  };
  const [openMenu, setOpenMenu] = useState(false);
// console.log(blok.header_menu)
  return (
    <div
      className="relative bg-white border-b-2 border-gray-100 font-inter -mb-4"
      {...storyblokEditable(blok)}
    >
      {blok.Banner.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {/* actual nav */}
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex flex-col  sm:flex-row sm:justify-around items-center sm:py-6 sm:justify-start sm:space-x-10">
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center text-2xl sm:justify-start lg:w-0 lg:flex-1 sm:w-[30vw] sm:text-4xl">
            <Link href="/">
              <span className="font-yeseva">{blok.Header}</span>
            </Link>
          </div>
          

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10 ">
            {blok.header_menu.map((route) => (
              // console.log(route),
              <Link
                key={route._uid}
                //  href="https://airtable.com/appovsAD7ZM2tQUFX/shrtFmpmtxoRUEcBU"
                href={route.link.url ?  route.link.url : route.link.cached_url === "march-28"| route.link.cached_url === "/espanol/march-28" ?  `./#${route.link.anchor}` : route.link.cached_url }
                target={route.link.target}
                className="text-base font-medium text-gray-500 hover:text-gray-900 "
              >
                {route.name}
              </Link>
            ))}

            {locales ? locales.map((loc) => (
              <span
                key={loc}
                onClick={() => changeLocale(loc)}
                className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer ${
                  locale === loc ? "bg-sage text-header" : ""
                }`}
              >
                {loc === "espanol" ? "ESPAÑOL" : "ENGLISH"} 
              </span>
            )) : ""}
            {/* <div className="text-sage">EN|ES|FR</div> */}
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, show/hide based on mobile menu state.
      --> */}
      {openMenu && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end gap-1">
                
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center mt-6">
              {blok.header_menu.map((route) => (
              
              <Link
                key={route._uid}
                //  href="https://airtable.com/appovsAD7ZM2tQUFX/shrtFmpmtxoRUEcBU"
                href={route.link.url ?  route.link.url : route.link.cached_url === "home" ?  `./#${route.link.anchor}` : route.link.cached_url }
                target={route.link.target}
                className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                {route.name}
              </Link>
            ))}

            {locales ? locales.map((loc) => (
              <span
                key={loc}
                onClick={() => changeLocale(loc)}
                className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer ${
                  locale === loc ? "bg-sage text-header" : ""
                }`}
              >
                {loc}
              </span>
            )) : ""}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Config;
