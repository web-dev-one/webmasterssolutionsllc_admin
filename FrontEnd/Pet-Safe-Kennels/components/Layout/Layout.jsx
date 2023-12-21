import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import useDocumentScrollThrottled from "../Hooks/useDocumentScrollThrottled";
import BookingMobile from "./BookingMobile";
import Booking from "./Booking";
export default function Layout({ children, props }) {
  const [footerFixed, setFooterFixed] = React.useState(true);
  const [showBooking, setShowBooking] = React.useState(false);
  const [showCal, setShowCal] = React.useState(false);

  const number = "520.730.7020"
  let cost = 2500
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    const footerHeight =
      document.documentElement.scrollHeight - document.body.clientHeight - 154;
    setFooterFixed(currentScrollTop < footerHeight);
  });
  return (
    <div className="overflow-y-hidden overflow-x-hidden relative">
      <Head>
        <title>Coyote Proof Kennels For Sale</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Coyote Proof Kennels shipped Nationwide, Free Shipping, Snake Proof Dog Kennels for sale, Dog Kennel Company Ships To All United States, Nationwide Kennel Shipping, Dog Kennel Manufacturing Company, Predator Proof Dog Kennels for sale, Delivered To Your Front Door, Pet Kennel Manufacturers,  Safest Dog Kennels For Sale, Shipped and Delivered,  Custom Made Snake Proof Kennels, Custom Pet Kennels Keep Coyotes Out, Quality Made Pet Kennels Shipped Nationwide."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=News+Cycle&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="32x32"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="16x16"
          href="/favicon.ico"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#706d6c" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#f0eae7" />
      </Head>
      <Header onClick={() => setShowBooking(true)} />
      <BookingMobile
        onClick={() => setShowBooking(true)}
        position={footerFixed}
        number={number}
      />
      {showBooking && (
        <Booking showCal={showCal} setShowCal={setShowCal} showBooking={showBooking} setShowBooking={setShowBooking} number={number} cost={cost}/>
      )}
      {children}
      <Footer />
    </div>
  );
}
