import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import DogKennel from '../public/galvanized-dog-run-inside-Large.jpg';
import CuteDogKennel from '../public/cute_dog_in_kennel-Large.jpg'
import CustomRoof from '../public/custom_roof_phoenix_dog_kennel.jpg';
import Fly from '../public/Flying-Dog-Kennel-thin.jpg';
import ScottsdaleKennel from '../public/WrapAroundKennel-thin.jpg';
import TucsonKennel from '../public/Tucson-Cox-DogRun-Large-square.jpg';
import CopperKennel from '../public/copper_kennel.jpg';

const images = [ TucsonKennel, DogKennel, ScottsdaleKennel, CustomRoof, CuteDogKennel, CopperKennel, Fly];

export default function WelcomeCarousel() {
  const createCarouselItemImage = images.map( index => (<div key={index} style={{ width: "max-content", height: "400px" }}>
      <ExportedImage
        src={index}
        width={450}
        height={580}
        alt="Carousel welcome image"
        quality={75}
        loading={"eager"}
      />
    </div>)
  );

  const baseChildren = <div>{createCarouselItemImage}</div>;

  // handle media query
  const [isMobile, setIsMobile] = React.useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
  }
  React.useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 600px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  const mobileSize = () => {
    if (isMobile == true) {
      return 80;
    } else {
      return 40;
    }
  };
  return (
    <div className="mx-auto	mb-6 mt-48">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        autoPlay={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={mobileSize()}
        interval={14000}
      >
        {baseChildren.props.children}
      </Carousel>
      <style jsx>{`
        div {
          max-width: 1350px;
        }
        @media screen and (max-width: 1400px) {
          div {
            max-width: 90%;
          }
        }
        @media screen and (max-width: 1024px) {
          div {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
