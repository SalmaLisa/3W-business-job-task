import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./RecaptchaForm.css";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaForm = () => {
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true)
  }
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 inputField" controlId="walletAddress">
          <Form.Label className="label fw-bold">Wallet Address</Form.Label>
          <Form.Control type="text" placeholder="Wallet Address..." />
        </Form.Group>

        <Form.Group className="mb-3 inputField " controlId="requestType">
          <Form.Label className="label fw-bold">Request Type</Form.Label>
          <div className="d-flex">
            <Form.Control
              className="me-3"
              type="text"
              defaultValue="20 Test Link"
              disabled
            />
            <Form.Control type="text" defaultValue="0.5 ETH" disabled />
          </div>
        </Form.Group>
        <ReCAPTCHA
          sitekey="6LeetnQjAAAAADx3BHg77BSJJ-8M1p3Q9lofcIPf"
          onChange={onChange}
        />
        <button type="submit" className="form-btn mt-3 text-white px-3 py-1 border-0" disabled={!verified}>
          Send Request
        </button>
      </Form>
    </div>
  );
};

export default RecaptchaForm;
