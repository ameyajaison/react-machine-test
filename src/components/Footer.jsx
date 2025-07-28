import React from "react";
import { Container } from "react-bootstrap";
import {
  SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialYoutube ,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer style={{padding: "40px 0" }}>
      <Container className="text-center">
        {/* Social Icons */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "inline-flex", gap: "15px" }}>
            {[SlSocialGoogle, SlSocialFacebook, SlSocialLinkedin, SlSocialYoutube ].map((Icon, idx) => (
              <div
                key={idx}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid #000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                   cursor: 'pointer'
                }}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Email */}
        <p style={{ marginBottom: "5px" }}>Example@email.com</p>

        {/* Copyright */}
        <p style={{ fontSize: "14px", color: "#555" }}>
          Copyright © 2020 Name. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
