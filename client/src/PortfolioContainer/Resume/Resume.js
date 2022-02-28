import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript" },
    { skill: "React JS" },
    { skill: "Express JS" },
    { skill: "Node JS" },
    { skill: "Mongo Db" },
    { skill: "HTML" },
    { skill: "CSS" },
  ];

  const projectsDetails = [
    {
      title: "Password Generator",
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      sourceCode: "https://github.com/TGolden95/Password-Generator",
      livePreview: "https://tgolden95.github.io/Password-Generator/",
    },
    {
      title: "Day Planner ",
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      sourceCode: "https://github.com/TGolden95/Weekly-Organizer",
      livePreview: "https://tgolden95.github.io/Weekly-Organizer/",
    },
    {
      title: "Project 2 ",
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      sourceCode: "https://github.com/TGolden95/Full_Stack_Store",
      livePreview: "https://cookies-for-coders-mary.herokuapp.com/",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Kennesaw State University"}
        subHeading={"BACHELOR OF SCIENCE IN EXERCISE SCIENCE"}
        fromDate={"AUGUST, 2013 "}
        toDate={" MAY, 2019"}
      />

      <ResumeHeading
        heading={"GA TECH CODING BOOTCAMP"}
        subHeading={"FULL STACK WEB DEVELOPMENT"}
        fromDate={"DECEMBER 2021 "}
        toDate={" MARCH 2022"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"SHILOH HIGH SCHOOL"}
        fromDate={"2009"}
        toDate={"2013"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"ATT"}
          subHeading={"RETAIL STORE MANAGER"}
          fromDate={"2018"}
          toDate={"Present"}
        />

        <div className="experience-description">
          <span className="resume-description-text"></span>
          <br />
          <span className="resume-description-text">
            As I mentioned earlier, my first job was at McDonald's. When I moved
            to college I was able to essentially transfer to a closer McDonald's
            in the city of Kennesaw. During my time at Kennesaw State I was a
            full time student, and also I worked for a local Homegoods and work
            study position. I pretty much worked these two jobs throughout my
            entire tenure at Kennesaw State. During my second to last semester
            of college I was hired at AT&T, where I worked for a little over 3
            years. I am currently enrolled in a coding bootcamp at Georgia Tech
            with an end date of March 9th, 2022. I hope to take the skills I've
            aquired during my bootcamp and find a job in a related field.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          sourceCode={projectsDetails.sourceCode}
          livePreview={projectsDetails.livePreview}
        ></ResumeHeading>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Madden"
        description="During my college days I loved to play Madden and NBA 2K as well as play recreational basketball at my local LA Fitness. At one point I was a top 1,500 Madden NFL player in the world on the playstation 4."
      />
      <ResumeHeading
        heading="NBA 2k"
        description="I can't forget about NBA 2K though! I very much enjoyed creating my own myplayer build, as well as being yelled at by 3rd graders about how bad I was at the game."
      />
      <ResumeHeading
        heading="Pick up Basketball"
        description="I enjoy playing pick up basketball at my local LA Fitness. The cardio I get from basketball is much more satisfying than running on a treadmill."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <div className="bullet-logo"></div>

        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"A little bit about me..."}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
