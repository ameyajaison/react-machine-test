
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import {
  SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

import styles from "../css/Login.module.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters with 1 capital letter, 1 number, and 1 symbol."
      );
      setShowError(true);
      return;
    }
    setError("");
    setShowError(false);

    navigate("/home");
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center">
      <Row className="w-100">
        {/* Left: Form Section */}
        <Col
          md={8}
          className="px-5 d-flex flex-column justify-content-center text-start"
        >
          <div className="mx-auto" style={{ width: "280px" }}>
            <h2 className={`mb-2 ${styles.signInText}`}>Sign In</h2>

            <p className={`mb-4 ${styles.newUserText}`}>
              New user?{" "}
              <a href="/signup" className={styles.createAccountLink}>
                Create an account
              </a>
            </p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.customInput}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.customInput}
                />
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="Keep me signed in"
                className={`mb-3 ${styles.customCheckbox}`}
              />

              {showError && (
                <Alert
                  variant="danger"
                  dismissible
                  onClose={() => setShowError(false)}
                  className={styles.errorAlert}
                >
                  {error}
                </Alert>
              )}

              <Button
                variant="dark"
                type="submit"
                className={`${styles.signInButton} mb-3`}
              >
                Sign In
              </Button>
            </Form>

            {/* Divider and Social Icons */}
            <div className="d-flex flex-column align-items-center">
              <div className={styles.divider}>
                <div className={styles.dividerLine}></div>
                <span className={styles.dividerText}>Or Sign In With</span>
                <div className={styles.dividerLine}></div>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <SocialIcon icon={<SlSocialGoogle />} />
                <SocialIcon icon={<SlSocialFacebook />} />
                <SocialIcon icon={<SlSocialLinkedin />} />
                <SocialIcon icon={<SlSocialTwitter />} />
              </div>
            </div>
          </div>
        </Col>

        <Col
          md={4}
          className="d-none d-md-flex align-items-center justify-content-centert"
        >
          <img
            src="/login.jpg"
            alt="Login illustration"
            className="img-fluid"
            style={{ maxHeight: "500px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

const SocialIcon = ({ icon }) => (
  <div className={styles.socialIcon}>{icon}</div>
);

export default Login;
