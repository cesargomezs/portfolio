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
                        <br/>
                        <p><strong>{t[locale].experiences.companiesRoles[0]}</strong></p>
                        <p>{t[locale].experiences.companiesName[0]} - {t[locale].experiences.companiesDurations[0]}</p>
                        <p style={{fontStyle:"italic"}}><strong>{t[locale].experiences.companiesTittle[0]}</strong></p>
                        <p>{t[locale].experiences.companiesSubtitle[0]} : {t[locale].experiences.companiesDescriptions[0]}</p>

                        <p style={{fontStyle:"italic"}}><strong>{t[locale].experiences.companiesTittle[1]}</strong></p>
                        <p>{t[locale].experiences.companiesSubtitle[1]} : {t[locale].experiences.companiesDescriptions[1]}</p>

                        <p style={{fontStyle:"italic"}}><strong>{t[locale].experiences.companiesTittle[2]}</strong></p>
                        <p>{t[locale].experiences.companiesSubtitle[2]} : {t[locale].experiences.companiesDescriptions[2]}</p>

                        <p style={{fontStyle:"italic"}}><strong>{t[locale].experiences.companiesTittle[3]}</strong></p>
                        <p>{t[locale].experiences.companiesSubtitle[3]} : {t[locale].experiences.companiesDescriptions[3]}</p>
                    </div>
                </div>
                <div className="bg-shape bottom-shape" />
                <div className="spacer" />
        </section>
  );
};


