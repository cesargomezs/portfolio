import React from 'react';
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const Contact: React.FC<LocalizerProps>=({ locale }) => {
  return (
    <section className="about-section"  id="contact">    
    <div className="bg-shape top-shape" />
        <div className="about-container">
            <div className="about-text">
                <h2 style={{textAlign:"center", padding:'5%'}}>{t[locale].contact.title}</h2>
                <span className="divider" />
                <p>{t[locale].contact.paragraph1}</p>

                <div style={{alignItems:'center',textAlign:'center', padding:'2%'}}>
                  {/*
                  <button className="btn-primary" style={{padding:"2%",margin:"10px" }}>
                    {t[locale].contact.sendMessage}
                  </button>*/}
                <p><a href={`mailto:${t[locale].contact.email}`} className="custom-link" target='_blank'>{t[locale].contact.email}: cesargomez853@gmail.com </a></p>
                <h3>📲 {t[locale].contact.saveqr}</h3>
                <p className="qr-subtitle">
                  {t[locale].contact.scanqr}
                </p>
                <p style={{padding:'4%'}}> 
                <img src="qr.png" alt="QR vCard" className="qr-img" />
                </p>
                
                <span className="qr-note">
                  {t[locale].contact.compatible}
                </span>
                </div>
            </div>
        </div>
        <div className="bg-shape bottom-shape" />
        <div className="spacer" />
</section>
  );
};

export default Contact;
