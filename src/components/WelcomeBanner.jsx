import React from 'react';
import { Container } from 'react-bootstrap';

const WelcomeBanner = () => {
  return (
 
      <div className="d-flex align-items-center text-center">
        <div className="flex-grow-1 border-bottom border-dark me-3"></div>

        <h5 className="m-0 fw-bold">WELCOME</h5>

        <div className="flex-grow-1 border-bottom border-dark ms-3"></div>
      </div>
  );
};

export default WelcomeBanner;
