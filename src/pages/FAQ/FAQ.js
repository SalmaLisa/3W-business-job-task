import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    fetch("FAQData.json")
      .then((res) => res.json())
      .then((data) => setFaqData(data));
  }, []);
  return (
    <div style={{fontFamily:"'Varela', sans-serif"}} className="border-top border-bottom">
      <h2 className="title fw-bold fs-2 my-4 text-center">
      Frequently Asked Questions
      </h2>
      <Accordion defaultActiveKey="0" className=" mx-auto mb-5">
        {faqData.map((faq) => {
          return (
            <Accordion.Item
              key={faq?.id}
              eventKey={faq?.id}
              className="mb-2 rounded-0 border collapsed"
            >
              <Accordion.Header>
                {faq?.question}
              </Accordion.Header>
              <Accordion.Body>{faq?.answer}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQ;