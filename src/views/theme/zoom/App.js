// import React from 'react';
import React, { useEffect, useState } from "react";
import { ZoomMtg } from "@zoomus/websdk";
import { useParams } from "react-router-dom";
import "./App.css";
const crypto = require("crypto");

ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.9/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
ZoomMtg.i18n.load("en-US");
ZoomMtg.i18n.reload("en-US");

var signatureEndpoint = "";
var apiKey = "sw1o-LaLTtaMC0xjZ9ghdw";
var apiSecret = "NDRYGCnfiSXNSosr25YEPnKOkKU4rf8ksSiF";
var meetingNumber = localStorage.getItem("meetingid");
var role = 0;
var leaveUrl = "https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/session";
var userName = localStorage.getItem("nama");
var userEmail = localStorage.getItem("email") ?? "random1002310@gmail.com";
var passWord = localStorage.getItem("passcode") ?? "";
var registrantToken = "";

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen != true) {
      startMeeting(generateSignature(apiKey, apiSecret, meetingNumber, role));
    }
  }, [isOpen]);

  function generateSignature(apiKey, apiSecret, meetingNumber, role) {    
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString(
      "base64"
    );
    const hash = crypto
      .createHmac("sha256", apiSecret)
      .update(msg)
      .digest("base64");
    const signature = Buffer.from(
      `${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString("base64");

    return signature;
  }

  function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";
    ZoomMtg.init({
      disablePreview: true,
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);
        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
          success: (success) => {
            console.log(success);
            setIsOpen(true);
          },
          error: (error) => {
            console.log(error);
            setIsOpen(false);
          },
        });
      },
      error: (error) => {
        console.log(error);
        setIsOpen(false);
      },
    });
  }

  return "";
};

export default App;
