import React, { useContext, useState } from "react";
import "./Nav.css";
import { BsChevronDown } from "react-icons/bs";
import p1 from "../../assets/arbitrum.svg";
import p2 from "../../assets/avalanche.svg";
import p3 from "../../assets/bnb.svg";
import p4 from "../../assets/fantom.svg";
import p5 from "../../assets/harmony.svg";
import p6 from "../../assets/poa.svg";
import p7 from "../../assets/polygon.svg";
import { GoFileDirectory } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { OptionContext } from "../../layouts/Main";
import WalletModal from "../../components/WalletModal/WalletModal";

const Nav = () => {
  const {options,setOptions} = useContext(OptionContext)
  const [displayOptions, setDisplayOptions] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const handleModalShow = () => setModalShow(true);

  const handleOptions = (e) => {
    // console.log(e.target.innerHTML)
    setOptions(e.target.innerText);
  };

  const handleDisplayOptions = (e) => {
    setToggleProfile(false);
    setDisplayOptions(!displayOptions);
  };
  const handleToggleProfile = (e) => {
    setDisplayOptions(false);
    setToggleProfile(!toggleProfile);
  };
  return (
    <>
      <nav style={{fontFamily:"'Varela', sans-serif"}} className="px-4 py-3 d-flex justify-content-between position-relative">
        <div>
          <Link to='/' className="text-decoration-none"><h4 className="fw-bold">Faucets</h4></Link>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <div
              onClick={handleDisplayOptions}
              className="nav-select-options d-flex align-items-center border py-2 px-3  cursor-pointer "
              role="button"
            >
              <img
                className=""
                src="https://faucets.netlify.app/static/media/ethereum.42dac5dc.svg"
                alt=""
              />
              <span className="mx-2 d-none d-md-block text-secondary">
                {options}
              </span>
              <BsChevronDown className="mt-1"></BsChevronDown>
            </div>
          </div>
          <button onClick={handleModalShow} className="wallet-btn d-flex align-items-center px-3 py-2 fw-bold mx-2">
            <GoFileDirectory className=""></GoFileDirectory>
            <span className="ms-2  d-none d-md-block">Connect to Wallet</span>
          </button>
          <div onClick={handleToggleProfile} role="button">
            <span className="profile-bg rounded-pill">
              <BiUserCircle className="fs-2 text-secondary "></BiUserCircle>
            </span>
          </div>
        </div>
      </nav>
      <div className="options position-absolute bg-white ">
        {displayOptions && (
          <ul className="py-2 px-0">
            <li
              onClick={handleOptions}
              className="nav-select-options d-flex align-items-center py-2 px-3"
            >
              <img className="" src={p1} alt="" />
              <span className="mx-2 text-secondary">Arbitrum Rinkeby</span>
            </li>
            <li
              onClick={handleOptions}
              className="nav-select-options d-flex align-items-center py-2 px-3"
            >
              <img className="" src={p2} alt="" />
              <span className="mx-2 text-secondary">Avalanche Fuji</span>
            </li>
            <li
              onClick={handleOptions}
              className="nav-select-options d-flex align-items-center py-2 px-3"
            >
              <img className="" src={p3} alt="" />
              <span className="mx-2 text-secondary">BNB Chain Testnet</span>
            </li>
            <li
              onClick={handleOptions}
              className="nav-select-options d-flex align-items-center py-2 px-3"
            >
              <img
                className=""
                src="https://faucets.netlify.app/static/media/ethereum.42dac5dc.svg"
                alt=""
              />
              <span className="mx-2 text-secondary">Ethereum Rinkeby</span>
            </li>
            <li
              onClick={handleOptions}
              className="nav-select-options d-flex align-items-center py-2 px-3"
            >
              <img className="" src={p4} alt="" />
              <span className="mx-2 text-secondary">Fantom Testnet</span>
            </li>
            <li
              onClick={handleOptions}
              className="nav-select-options d-flex align-items-center py-2 px-3"
            >
              <img className="" src={p5} alt="" />
              <span className="mx-2 text-secondary">Harmony Testnet</span>
            </li>
            <li
              onClick={handleOptions}
              className="nav-select-options d-flex align-items-center py-2 px-3"
            >
              <img className="" src={p6} alt="" />
              <span className="mx-2 text-secondary">POA Network Sokol</span>
            </li>
            <li
              onClick={handleOptions}
              className="nav-select-options d-flex align-items-center py-2 px-3"
            >
              <img className="" src={p7} alt="" />
              <span className="mx-2 text-secondary">Polygon Mumbai</span>
            </li>
          </ul>
        )}
      </div>
      <div className="profile-options position-absolute bg-white">
        {toggleProfile && (
          <ul className="p-3">
            <Link to="/login" className="text-decoration-none">
              <li className="text-secondary">Log In</li>
            </Link>
            <Link to="/signUp"  className="text-decoration-none">
              <li className="text-secondary my-1">Sign Up</li>
            </Link>
            <Link to='/faq' className="text-decoration-none">
              <l className="text-secondary">FAQ</l>
            </Link>
          </ul>
        )}
      </div>

      {/* modal */}
      <WalletModal modalShow={modalShow} setModalShow={setModalShow}></WalletModal>
    </>
  );
};

export default Nav;
