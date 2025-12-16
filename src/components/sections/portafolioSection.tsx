import React from 'react';
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const PortafolioSection: React.FC<LocalizerProps>=({ locale }) => {  
return (
    <section className="about-section"  id="portafolioSection">    
        <div className="bg-shape top-shape" />
            <div className="about-container">
                <div className="about-text">
                    <h2>{t[locale].portafolioSection.title}</h2>
                    <p>{t[locale].portafolioSection.paragraph1}</p>
                </div>
            </div>
            <div className="bg-shape bottom-shape" />
            <div className="spacer" />
    </section>
);
};

export default PortafolioSection;