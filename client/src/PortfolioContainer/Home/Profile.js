import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/triston-golden-95111ab7/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/TGolden95">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Welcome, My name is{" "}
              <span className="highlighted-text">Triston</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Fullstack Web Developer 💻",
                    1000,
                    "HTML, CSS, Javascript 🖼",
                    1000,
                    "GA TECH Coding Bootcamp Graduate 🎓",
                    1000,
                    "MERN Stack Developer 📚",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passion for connecting front and back end operations. 🤝
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Employable!{" "}
            </button>
            <a href="Golden-Resume.pdf" download="Golden Golden-Resume.pdf">
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
