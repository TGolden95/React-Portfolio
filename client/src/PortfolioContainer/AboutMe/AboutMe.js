import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Hello! My name is Triston Golden for those of you visiting this webpage. As you read along throughout this webpage I will continue to open up about myself and share with you some details that will help you get to know me better. With that being said, I welcome you to learn a little about me. I'm the oldest of five children, which needless to say I try my best to lead by example. I graduated from Shiloh High School in Gwinnett county. I did wrestling and football year round. I got my first real job at my local McDonald's. During my college days I loved to play Madden and NBA 2K as well as play recreational basketball at my local LA Fitness. At one point I was a top 1,500 Madden NFL player in the world on the playstation 4. I can't forget about NBA 2K though! I very much enjoyed creating my own myplayer build, as well as being yelled at by 3rd graders about how bad I was at the game.",
    highlights: {
      bullets: [
        "Full Stack web development",
        "Full Stack mobile development",
        "Database Management",
        "Building REST API's",
        "React JS",
      ],
      heading: "Here are some of my skills:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe}
              >
                {""}
                Hire Me{" "}
              </button>
              <a href="Golden-Resume.pdf" download="Golden Golden-Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
