import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './RequestHistory.css'

const RequestHistory = () => {
  const handleActive = ({ isActive }) => {
    return {
      fontWeight: isActive ? "500" : "normal",
      backgroundColor: isActive ? "#0000ff" : "#F5F7FD",
      padding: "8px 10px",
      textDecoration: "none",
      color: isActive ? "white" : "black",
    };
  };
  return (
    <div>
      <div className="">
            <NavLink style={handleActive} to="/eth" className="rounded-1 d-block d-md-inline-block">
              ETH Transaction History
            </NavLink>
            <NavLink
              style={handleActive}
              className="ms-2 rounded-1 d-block d-md-inline-block mt-2 mt-md-0"
              to="/testLink"
            >
              TestLink Transaction History
            </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default RequestHistory;