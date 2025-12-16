import "@/styles/card/book.css";
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const Home: React.FC<LocalizerProps>=({ locale }) => {

  return (
    <section className="about-section" id="home">

    <div className="bg-shape top-shape" />
      <div className="about-container">
       <div className="about-text">
          <h2>{t[locale].home.title}</h2>
          <span className="divider" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
              <button className="btn-primary">
                  Download Resume
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
export default Home;
