import "@/styles/card/book.css";
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const Home: React.FC<LocalizerProps>=({ locale }) => {

  return (
    <section className="about-section" id="home">

    <div className="bg-shape top-shape" />
      <div className="about-container">
       <div className="about-text">
          <h2 style={{textAlign:"center"}}>{t[locale].home.title}</h2>
          <span className="divider" />
            <p style={{fontStyle:"italic"}}>
              {t[locale].home.paragraph1}
            </p>
            <p>
              <strong style={{fontStyle:"italic"}}>{t[locale].home.author}</strong>
            </p>
          </div>
      </div>
      <div className="bg-shape bottom-shape" />
      <div className="spacer" />
  </section>
  );
};
export default Home;
