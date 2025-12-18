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

                <div style={{alignItems:'center',textAlign:'center'}}>

                  <button className="btn-primary" style={{padding:"10px",margin:"10px"}}>
                    {t[locale].contact.sendMessage}
                  </button>
                  
                  <p><a href={`mailto:${t[locale].contact.email}`}>{t[locale].contact.email}: cesargomez853@gmail.com </a></p>
                  <p>{t[locale].contact.phone}: +19512586016 </p>
                  <p> 
                    <img src="qr.png" alt="vCard QR Code" style={{width:"150px", height:"150px"}}/>
                  </p>
                </div>
            </div>
        </div>
        <div className="bg-shape bottom-shape" />
        <div className="spacer" />
</section>
  );
};

export default Contact;
