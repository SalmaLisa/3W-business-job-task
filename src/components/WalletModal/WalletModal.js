import React from "react";
import Modal from "react-bootstrap/Modal";
import "./WalletModal.css";
import mask from '../../assets/MetaMask.svg'
import wallet from '../../assets/WalletConnect.svg'

const WalletModal = ({ modalShow, setModalShow }) => {
  const handleClose = () => setModalShow(false);
  return (
    <div>
      <Modal show={modalShow} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold">
            Connect your wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column flex-md-row justify-content-center">
          <div className="wallet">
            <a href="/">
              <img
                src={mask}
                alt=""
              />
            </a>
            <p style={{color:"#9B1FE9"}} className="fw-bold text-center fs-5">MetaMask</p>
          </div>
          <div className="wallet">
            <a href="/">
              <img
                src={wallet}
                alt=""
              />
            </a>
            <p style={{color:"#9B1FE9"}} className="fw-bold text-center fs-5">WalletConnect</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WalletModal;