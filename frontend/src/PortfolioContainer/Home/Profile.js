import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "Enthusiastic Dev😎",
      "Full Stack Developer 💻",
      "Mern Stack Developer 📱",
      "Cross Platform Developer 🔴",
      "React/React Native Developer 🌐",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/instructor_ehizeex/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/Ehiedu_baba">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">Mehmet Kaldirim</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1 style={{ color: "red" }}>
                I' am a{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "green",
                    marginLeft: "5px",
                  }}
                >
                  {typeEffect}
                </span>
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              //onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
