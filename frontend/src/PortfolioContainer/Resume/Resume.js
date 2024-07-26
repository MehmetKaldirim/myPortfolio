import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import educationSvg from "../../assets/Resume/education.svg";
import interestsSvg from "../../assets/Resume/interests.svg";
import programmingSvg from "../../assets/Resume/programming-skills.svg";
import projectsSvg from "../../assets/Resume/projects.svg";
import workHistorySvg from "../../assets/Resume/work-history.svg";
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
        {props.link && (
          <div className="resume-link">
            <a href={props.link}>
              <i className="fa fa-link" />
              {"Go to project "}
            </a>
          </div>
        )}
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: educationSvg },
    { label: "Work History", logoSrc: workHistorySvg },
    { label: "Programming Skills", logoSrc: programmingSvg },
    { label: "Projects", logoSrc: projectsSvg },
    { label: "Interests", logoSrc: interestsSvg },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Java/Springboot", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    // {
    //   title: "Personal Portfolio Website",
    //   duration: { fromDate: "2023", toDate: "2024" },
    //   description:
    //     "A Personal Portfolio website to showcase all my details and projects at one place.",
    //   subHeading: "Technologies Used: React JS, Bootsrap",
    //   link: "https://mehmetkaldirim-1cdb28d0493d.herokuapp.com/",
    // },

    {
      title: "All My Projects",
      duration: { fromDate: "2022", toDate: "2024" },
      description: " Please click to link to see my all projects.",
      subHeading:
        "Technologies Used: : React, Redux, Vite, Tailwind CSS, Flowbite React, Expressjs, Nodejs",
      link: "https://my-all-projects-5d96e0a3d10b.herokuapp.com/",
      //link: "https://memory-remains-mern.web.app/",
    },

    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2023", toDate: "2024" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
      link: "https://mathshop-2438bf3edfe7.herokuapp.com/",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"CYDEO"}
        subHeading={"Java Developer Course"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Naval Academy, Turkey"}
        subHeading={"BACHELOR OF COMPUTER ENGINEER"}
        fromDate={"1996"}
        toDate={"2000"}
      />

      <ResumeHeading
        heading={"High School "}
        subHeading={"Navy High School"}
        fromDate={"1992"}
        toDate={"1996"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Freelancer"}
          subHeading={"FULL STACK DEVELOPER"}
          fromDate={"2023"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
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
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
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
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          link={projectsDetails.link}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Dancer"
        description="I am passionate about dance, especially salsa and bachata, which allow me to express myself creatively and stay physically active."
      />
      <ResumeHeading
        heading="Runner"
        description="As an avid runner, I enjoy the discipline and endurance that come with long-distance running, constantly pushing my limits."
      />
      <ResumeHeading
        heading="Go Player"
        description=" I am a dedicated Go player, relishing the strategic depth and mental challenge the game provides."
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
        <img
          className="bullet-logo"
          //src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          src={bullet.logoSrc}
          alt="B"
        />
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
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
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
