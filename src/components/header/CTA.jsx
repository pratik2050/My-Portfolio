import React from 'react';
import CV from '../../assets/resume_pratik.pdf';        //Resume pdf link to be added here

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
