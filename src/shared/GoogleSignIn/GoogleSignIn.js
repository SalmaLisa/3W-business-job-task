import React, { useEffect, useState } from "react";

const GoogleSignIn = () => {
  const handleCallbackResponse = (response) => {
    console.log(response.credential);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "254607072388-g3hi0v45kc4mqql28bk3jannt3k8ignj.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("loginBtn"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  
  return (
    <div className="d-flex justify-content-center">
      <div id="loginBtn"></div>
    </div>
  );
};

export default GoogleSignIn;
