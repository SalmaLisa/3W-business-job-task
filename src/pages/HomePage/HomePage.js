import React, { useContext } from "react";
import RecaptchaForm from "../../components/RecaptchaForm/RecaptchaForm";
import "./HomePage.css";
import { AiFillWarning } from "react-icons/ai";
import { OptionContext } from "../../layouts/Main";
import RequestHistory from "../../components/RequestHistory/RequestHistory";

const HomePage = () => {
  const { options } = useContext(OptionContext);
  return (
    <div style={{fontFamily:"'Varela', sans-serif"}} className="body pb-4">
      <div className="notice">
        <p className="text-white text-center py-4">Notice here</p>
      </div>
      <div className="py-md-5 py-3 mx-4">
        <h2 id="title" className="fs-1">Request testnet LINK</h2>
        <p className=" my-4 text-secondary">
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can <br className="d-none d-md-block" /> create and test your own oracle and Chainlinked
          smart contract
        </p>
      </div>
      <div className="bg-white mx-4 p-4">
        <div className="warning d-flex align-items-center p-2 mb-3">
          <AiFillWarning className="icon fs-5 me-2"></AiFillWarning>
          <small>
            Your wallet is connected to{" "}
            <span className="fw-bold">{options}</span>, so you are requesting{" "}
            <span className="fw-bold">{options}</span> Link/ETH.
          </small>
        </div>
        <RecaptchaForm></RecaptchaForm>
        <div className="mt-5">
          <RequestHistory></RequestHistory>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
