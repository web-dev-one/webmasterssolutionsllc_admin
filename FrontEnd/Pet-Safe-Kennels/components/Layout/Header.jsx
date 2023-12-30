import React from "react";
import Phone from "./Phone";
import useDocumentScrollThrottled from "../Hooks/useDocumentScrollThrottled";
import { useRouter } from "next/router";
import Link from "next/link";
import smoothscroll from "smoothscroll-polyfill";
export default function Header(props) {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // Resize navbar on scroll //
  const [showMiniNav, setShowMiniNav] = React.useState(false);
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setShowMiniNav(currentScrollTop > 100);
  });
  const header = showMiniNav ? "nav-small" : "nav-full";
  const logo = showMiniNav ? "w-0" : "logo";
  const textLogo = showMiniNav ? "font-logo" : "hidden";
  const dropdown = showMiniNav ? "" : "";
  return (
    <div className="fixed z-30 top-0 w-screen">
      <Phone />
      <nav
        className={`relative flex flex-wrap items-center justify-between ${header} px-2 navbar-expand-lg navbar-bg`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={`${dropdown} w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`}
          >
           
              <picture>
                <source type="image/webp" srcSet="black-gold.webp" />
                <source type="image/jpg" srcSet="black-gold.png" />
                <img
                  src="/logo.png"
                  alt="Logo"
                  className={`${logo} hover:opacity-75 logo-transition logo_ico`}
                />
              </picture>
              <span
                className={`${textLogo} logo-transition font-logo uppercase sm:text-4xl text-2xl xl:leading-4 lg:leading-4 md:leading-normal leading-relaxed inline-block mr-4 py-3 whitespace-no-wrap text-black`}
              >
                Pet Safe Kennels
              </span>
            
            <button
              className={`text-white cursor-pointer text-xl leading-none px-3 pt-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span style={{ color: "#C4C4C4" }} className="text-5xl">
                &#9776;
              </span>
            </button>
          </div>
          <div
            className={
              `justify-center lg:flex flex-grow items-center` +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item font-extrabold text-red-400 mx-1">
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "services" },
                  }}
                >
                  
                    Services
                  
                </Link>

                <hr />
              </li>

              <li className="nav-item font-extrabold text-red-400 mx-1">
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "team" },
                  }}
                >
                    Team
                  
                </Link>

                <hr />
              </li>

              <li className="nav-item font-extrabold text-red-400 mx-1">
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "products" },
                  }}
                >
                    Products
                </Link>

                <hr />
              </li>

              <li className="nav-item font-extrabold text-red-400 mx-1">
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "contact" },
                  }}
                >
                    Contact 
                </Link>
              </li>
              <li className="nav-item font-bold text-red-400 bookingItem" onClick={() => props.onClick(true)}>
                  BookConsultation
              </li>
              <li className="nav-item font-extrabold text-red-400 mx-1">
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/shoppingcart"
                  }}
                >
                  
                  MyCart
                  
                </Link>

                <hr />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .bookingItem{
          cursor: pointer;
        }
        .booking {
          background-color: #f0eae7;
          font-weight: 600;
        }
        .navbar-bg {
          background-color: #706d6c;
        }
        .font-logo {
          font-family: "News Cycle", sans-serif;
        }
        .logo {
          width: 238px;
          height: 136px;
        }
        .logo-transition {
          transition: all 0.7s cubic-bezier(0.01, 0.81, 1, 1.26);
        }
        .nav-full {
          height: 137px;
          transition: all 0.5s;
        }
        .nav-small {
          height: 86px;
          transition: all 0.5s;
        }
        #example-navbar-danger {
          background-color: #716c6c;
        }
        hr {
          display: none;
        }
        @media screen and (max-width: 1023px) {
          .bookingItem {
            display: none;
          }
          #example-navbar-danger {
            padding: 30px 0;
            position: absolute;
            width: 70%;
            top: 100%;
            left: 50%;
            transform: translate(-50%, 0%);
            right: 50%;
          }
          li a {
            padding-left: 4.75rem;
          }
          hr {
            width: 250px;
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
