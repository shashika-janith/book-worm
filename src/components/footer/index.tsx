import React from "react";

import Feature from "./feature";

import "./index.scss";

const Footer = () => {

  return (
    <div className="container-fluid app-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <Feature icon="bi bi-truck" label="Free Delivery" info="Orders over $100" />
              <Feature icon="bi bi-credit-card-2-back" label="Secure Payment" info="100% secure payment" />
              <Feature icon="bi bi-check-circle" label="Money Back Guarantee" info="Within 30 days" />
              <Feature icon="bi bi-chat" label="24/7 Support" info="Within 1 business day" />
            </div>
          </div>

          <div className="separator my-4" />

          <div className="col-auto">
            <div className="footer-section">
              <p className="section-title mb-4">Contact Us</p>
              <p className="info-item mb-3">1418 River Drive</p>
              <p className="info-item">hello@bookworm.lk</p>
              <p className="info-item">(+94) 71-7580287</p>
            </div>
          </div>

          <div className="separator my-4" />

          <div className="col-12">
            <p className="text-muted py-2 copyright">&copy;2021 Book Worm. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Footer;