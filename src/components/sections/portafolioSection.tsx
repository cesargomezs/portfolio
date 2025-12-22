import React from 'react';
import { type LocalizerProps, i18n as t } from '../i18n/localizer';
import "@/styles/carousel/carousel.css";
import Carousel3D from '@/styles/carousel/carousel3d';


const images = [
    "viviendoenusa.webp",
    "culture.webp",
    "balance-scale.webp",
    "qr.webp",
    
  ];



export const PortafolioSection: React.FC<LocalizerProps>=({ locale }) => {  
return (
    <section className="about-section"  id="portafolioSection">    
        <div className="bg-shape top-shape" />
            <div className="about-container">
                <div className="about-text">
                    <h2 style={{textAlign:"center" ,padding:'5%'}}>{t[locale].portafolioSection.title}</h2>
                    <span className="divider" />
                    <p>{t[locale].portafolioSection.paragraph1}</p>
                    <p style={{fontStyle:"italic" ,padding:'2%'}}><strong>{t[locale].portafolioSection.project1}</strong></p>
                    <p><li>{t[locale].portafolioSection.projectsdescriptions[0]}</li></p>
                    <p><a href="https://www.viviendoenusa.app/" className="custom-link" target='_blank'>{t[locale].portafolioSection.hrefs}</a></p>
                    <p style={{fontStyle:"italic" ,padding:'2%'}}><strong>{t[locale].portafolioSection.project2}</strong></p>
                    <p><li>{t[locale].portafolioSection.projectsdescriptions[1]}</li></p>
                    <p><a href="https://cesargomezs.github.io/V2test/" className="custom-link" target='_blank'>{t[locale].portafolioSection.hrefs}</a></p>
                    <p style={{fontStyle:"italic" ,padding:'2%'}}><strong>{t[locale].portafolioSection.project3}</strong></p>
                    <p><li>{t[locale].portafolioSection.projectsdescriptions[2]}</li></p>
                    <p><a href="https://cesargomezs.github.io/SampleLawyers/" className="custom-link" target='_blank'>{t[locale].portafolioSection.hrefs}</a></p>
                    <p style={{fontStyle:"italic" ,padding:'2%'}}><strong>{t[locale].portafolioSection.project4}</strong></p>
                    <p><li>{t[locale].portafolioSection.projectsdescriptions[3]}</li></p>
                    <p><a href="https://cesargomezs.github.io/ProyectVcard/" className="custom-link" target='_blank'>{t[locale].portafolioSection.hrefs}</a></p>
                    
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