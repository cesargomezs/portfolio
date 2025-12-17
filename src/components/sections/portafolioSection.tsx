import React from 'react';
import { type LocalizerProps, i18n as t } from '../i18n/localizer';
import "@/styles/carousel/carousel.css";
import Carousel3D from '@/styles/carousel/carousel3d';


const images = [
    "viviendoenusa.jpg",
    "culture.jpg",
    "balance-scale.png",
    "cesarqr.jpeg",
    
  ];

export const PortafolioSection: React.FC<LocalizerProps>=({ locale }) => {  
return (
    <section className="about-section"  id="portafolioSection">    
        <div className="bg-shape top-shape" />
            <div className="about-container">
                <div className="about-text">
                    <h2 style={{textAlign:"center"}}>{t[locale].portafolioSection.title}</h2>
                    <span className="divider" />
                    <p>{t[locale].portafolioSection.paragraph1}</p>
                    <p><li>{t[locale].portafolioSection.projectsdescriptions[0]}</li></p>
                    <p><li>{t[locale].portafolioSection.projectsdescriptions[1]}</li></p>
                    <p><li>{t[locale].portafolioSection.projectsdescriptions[2]}</li></p>
                    <p><li>{t[locale].portafolioSection.projectsdescriptions[3]}</li></p>
                    <div className="carousel-wrappersized">
                        <Carousel3D images={images} locale={locale}/>
                    </div>
                </div>
            </div>
            <div className="bg-shape bottom-shape" />
            <div className="spacer" />
    </section>
);
};

export default PortafolioSection;