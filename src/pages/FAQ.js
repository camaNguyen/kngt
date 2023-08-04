import React from "react";
import Xomnhalalogonew from "../assets/about.png";
import "../styles/FAQ.css";

function FAQ() {
  return (
    <div className="faq">
      <div
        className="faqTop"
        style={{ backgroundImage: `url(${Xomnhalalogonew})` }}
      ></div>
      <div className="faqBottom">
        <h> FREQUENTLY ASKED QUESTIONS</h>
        <h2>Everything you need to know</h2>

        <br></br>

        <p>
          DO YOU SELL GIFT CARDS?
          <h1>
            Enter your answer here. Be thoughtful, write clearly and concisely,
            and consider adding written as well as visual examples. Go over what
            you’ve written to make sure that if it was the first time you were
            visiting the site, you’d understand the answer.
          </h1>
        </p>

        <br></br>

        <p>
          CAN I HAVE MY ORDER GIFT WRAPPED?
          <h1>
            Enter your answer here. Be thoughtful, write clearly and concisely,
            and consider adding written as well as visual examples. Go over what
            you’ve written to make sure that if it was the first time you were
            visiting the site, you’d understand the answer.
          </h1>
        </p>

        <p>
          DO YOU OFFER SAME-DAY DELIVERY?
          <h1>
            Enter your answer here. Be thoughtful, write clearly and concisely,
            and consider adding written as well as visual examples. Go over what
            you’ve written to make sure that if it was the first time you were
            visiting the site, you’d understand the answer.
          </h1>
        </p>
      </div>
    </div>
  );
}

export default FAQ;
