import React, { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle";
import TeamMember from "./TeamMember";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import members from "./members.js";
export default function Team() {
  // carousel controls
  const [currentSlide, setCurrentSlide] = useState(1);

  const next = () => {
    if (currentSlide === 7 && isMobile == false) {
      setCurrentSlide(1);
    } else if (currentSlide === 7 && isMobile == true) {
      setCurrentSlide(0);
    } else {
      isMobile
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(currentSlide + 3);
    }
  };
  const prev = () => {
    if (currentSlide === 1 && isMobile == false) {
      setCurrentSlide(7);
    } else if (currentSlide === 0 && isMobile == true) {
      setCurrentSlide(7);
    } else {
      isMobile
        ? setCurrentSlide(currentSlide - 1)
        : setCurrentSlide(currentSlide - 3);
    }
  };
  // members
  const mapMembers = members.map((member) => (
    <TeamMember
      key={member.id}
      name={member.name}
      title={member.title}
      description={member.description}
      photo={member.photo}
      link={member.link}
    />
  ));
  // responsive carousel
  const [isMobile, setIsMobile] = useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
    mq.matches ? setCurrentSlide(0) : setCurrentSlide(1);
  }
  useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 960px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  const mobileSize = () => (isMobile ? false : true);
  const mobileWidth = () => (isMobile ? "250px" : "823px");
  return (
    <div className="container mx-auto">
      <SectionTitle title={"Meet our team"} />
      <div className="flex flex-wrap flex-row justify-center relative team mx-auto">
        <div className="w-11/12 header-color sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-80 mb-6">
          <p className="mt-4">
          Absolute Best Quality Pet Kennels Available Anywhere!
Custom Built To Your Specifications & Instructions!

Pet Safe Kennels For Sale

Predator Proof Kennels Offer Peace Of Mind!
Pet Safe Kennels Keep Coyotes Out!
We Can Help!   No Matter Where You Live. A rescued pet should not be threatened by aggressive animals, wild or domestic. Nationwide Pet Lovers are increasingly at risk of losing our furry family members to Coyotes, Bobcats, Wolves, Hawks, Mountain Lions, Aggressive Dogs, & Snakes that may jeapordize your dogs, cats, and birds safety.
          </p>
        </div>

        <div className="flex mr-auto ml-auto">
          <div className="inline-block my-auto min-w-content">
            <picture>
              <source type="image/webp" srcSet="left.webp" />
              <source type="image/png" srcSet="left.png" />
              <img
                onClick={prev}
                className="w-5 cursor-pointer mr-2 inline-block"
                src="left.png"
                alt="Previous team member"
              ></img>
            </picture>
          </div>
          <div className="inline-block">
            <Carousel
              showThumbs={false}
              showArrows={false}
              infiniteLoop={false}
              showIndicators={false}
              autoPlay={false}
              showStatus={false}
              swipeable={true}
              centerMode={mobileSize()}
              centerSlidePercentage={33}
              width={mobileWidth()}
              selectedItem={currentSlide}
            >
              {mapMembers}
            </Carousel>
          </div>

          <div className="inline-block my-auto min-w-content">
            <picture>
              <source type="image/webp" srcSet="right.webp" />
              <source type="image/png" srcSet="right.png" />
              <img
                onClick={next}
                className="w-5 cursor-pointer ml-2 inline-block"
                src="right.png"
                alt="Next team member"
              ></img>
            </picture>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 1400px) {
          .team {
            max-width: 90%;
          }
        }
        @media screen and (max-width: 400px) {
          .team {
            max-width: 100%;
          }
        }
        .min-w-content {
          min-width: fit-content;
        }
      `}</style>
    </div>
  );
}
