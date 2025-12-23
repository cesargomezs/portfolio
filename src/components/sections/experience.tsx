import React from 'react';
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const Experience: React.FC<LocalizerProps>=({ locale }) => {
  return (
       <section className="about-section"  id="experience">    
            <div className="bg-shape top-shape" />
                <div className="about-container">
                    <div className="about-text">
                        <h2 style={{textAlign:"center" ,padding:'5%'}}>{t[locale].experiences.title}</h2>
                        <span className="divider" />
                        <p>{t[locale].experiences.paragraph1}</p>
                        <p><strong>{t[locale].experiences.companiesRoles[0]}</strong></p>
                        <p>{t[locale].experiences.companiesName[0]} - {t[locale].experiences.companiesDurations[0]}</p>
     
                        <p><strong>{t[locale].experiences.companiesRoles[1]}</strong></p>
                        <p>{t[locale].experiences.companiesName[1]} - {t[locale].experiences.companiesDurations[1]}</p>
     
                        <p><strong>{t[locale].experiences.companiesRoles[2]}</strong></p>
                        <p>{t[locale].experiences.companiesName[2]} - {t[locale].experiences.companiesDurations[2]}</p>
     
                        <p><strong>{t[locale].experiences.companiesRoles[3]}</strong></p>
                        <p>{t[locale].experiences.companiesName[3]} - {t[locale].experiences.companiesDurations[3]}</p>
     
                        <p><strong>{t[locale].experiences.companiesRoles[4]}</strong></p>
                        <p>{t[locale].experiences.companiesName[4]} - {t[locale].experiences.companiesDurations[4]}</p>
     
                        <span className="divider" />

                        <p style={{fontStyle:"italic" ,padding:'2%'}}><strong>{t[locale].experiences.companiesTittle[0]}</strong></p>
                        <p>{t[locale].experiences.companiesDescriptions01}</p>
                        <p style={{fontStyle:"italic" ,padding:'2%'}}><strong>{t[locale].experiences.companiesTittle[1]}</strong></p>
                        <p>{t[locale].experiences.companiesDescriptions12}</p>
                        <p style={{fontStyle:"italic" ,padding:'2%'}}><strong>{t[locale].experiences.companiesTittle[2]}</strong></p>
                        <p>{t[locale].experiences.companiesDescriptions13}</p>
                        <p style={{fontStyle:"italic",padding:'2%' }}><strong>{t[locale].experiences.companiesTittle[3]}</strong></p>
                        <p>{t[locale].experiences.companiesDescriptions14}</p>
                        <p style={{fontStyle:"italic",padding:'2%' }}><strong>{t[locale].experiences.companiesTittle[4]}</strong></p>
                        <p>{t[locale].experiences.companiesDescriptions15}</p>
                    </div>
                </div>
                <div className="bg-shape bottom-shape" />
                <div className="spacer" />
        </section>
  );
};


