import React from "react";
import "./home.css";
import Uvis from "../Assets/Uvis.jpg";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <section className="about-me">
          <div className="about-me--header">
            <h1>About Me</h1>
            <div className="languages">
              <button>Español</button>
              <button>English</button>
            </div>
          </div>
          <div className="about-me--content">
            <img src={Uvis} alt="About Me" />
            <div className="about-me--info">
              <h2>Hi, I'm Uvis</h2>
              <p>
                I am a professional cleaner with over 20 years of experience in
                the industry. I specialize in residential and commercial
                cleaning, providing top-notch services to my clients. My goal is
                to ensure that every space I clean is spotless and welcoming.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
