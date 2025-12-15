import React from 'react';
import { type LocalizerProps, i18n as t } from '../i18n/localizer';

export const Experience: React.FC<LocalizerProps>=({ locale }) => {
  return (
    
    <section id="experience">
      <h2>About Me</h2>
      <p className="psection">
      {t[locale].experience.title}
      At our clothing warehouse, we specialize in the storage, handling, and distribution of high-quality apparel for both babies and adults. With a strong focus on organization, efficiency, and care, we ensure that every item — from baby onesies to adult fashion — is properly managed and delivered in perfect condition.

Our facility is equipped with advanced inventory systems, climate-controlled spaces, and a dedicated team committed to maintaining the highest standards in logistics and customer service. Whether we're supplying retail stores, fulfilling online orders, or supporting boutique brands, our goal is to make clothing distribution seamless, fast, and reliable.

We take pride in supporting businesses that bring comfort and style to people of all ages — starting from the tiniest newborn to the modern adult.
      </p>
  
    </section>
  );
};


