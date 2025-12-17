import React from 'react';
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const Contact: React.FC<LocalizerProps>=({ locale }) => {
  return (
    <section className="about-section"  id="contact">    
    <div className="bg-shape top-shape" />
        <div className="about-container">
            <div className="about-text">
                <h2 style={{textAlign:"center"}}>{t[locale].contact.title}</h2>
                <span className="divider" />
                <p>{t[locale].contact.paragraph1}</p>
                <p>{t[locale].contact.sendMessage}</p>
            </div>
        </div>
        <div className="bg-shape bottom-shape" />
        <div className="spacer" />
</section>
  );
};

export default Contact;
