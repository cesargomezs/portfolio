import React from 'react';
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const Experience: React.FC<LocalizerProps>=({ locale }) => {
  return (
       <section className="about-section"  id="experience">    
            <div className="bg-shape top-shape" />
                <div className="about-container">
                    <div className="about-text">
                        <h2 style={{textAlign:"center"}}>{t[locale].experiences.title}</h2>
                        <span className="divider" />
                        <p>{t[locale].experiences.paragraph1}</p>
                    </div>
                </div>
                <div className="bg-shape bottom-shape" />
                <div className="spacer" />
        </section>
  );
};


