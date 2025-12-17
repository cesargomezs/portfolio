import React from "react";
import { type LocalizerProps, i18n as t } from '../i18n/localizer';


export const About: React.FC<LocalizerProps>=({ locale }) => {

  return (
    <section className="about-section" id="about">

    <div className="bg-shape top-shape" />
      <div className="about-container">
       <div className="about-text">
          <h2 style={{textAlign:"center"}}>{t[locale].about.title}</h2>
          <span className="divider" />
            <p>
              {t[locale].about.paragraph1}
            </p>

              <button className="btn-primary">
                  {t[locale].about.downloadResume}
              </button>
          </div>
          <div  className="profile-wrappersized ">
              <div className="profile-wrapper">
                <img 
                  className="profile-image"
                  src="../../fotoprof2.png"
                  alt="Profile"
                />
              </div>
        </div>
      </div>
      <div className="bg-shape bottom-shape" />
      <div className="spacer" />
  </section>
  );
};

export default About;
