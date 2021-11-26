import React, { useEffect, useState } from "react";
import { ZoomMtg } from "@zoomus/websdk";
import { useParams } from "react-router-dom";

const crypto = require("crypto");

localStorage.setItem("fromZoom", true);

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
    let type = localStorage.getItem("type")
    if(type === 'sympo') {
      require('./sympo.css');
    } else {
      require('./App.css');
    }
  }, [isOpen]);

  function leavePage(){
    let type = localStorage.getItem("type")    
    if(type === 'sympo') {
      window.parent.location.href = leaveUrl;            
    } else {
      window.location.href = leaveUrl;
      window.location.reload();
    }    
  }

  
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
    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.9/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    ZoomMtg.i18n.load("en-US");
    ZoomMtg.i18n.reload("en-US");

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

  function leave() {
    if(window.confirm("Are You Sure?")){
      ZoomMtg.leaveMeeting({        
        success: function (response) {
          console.log(response);          
          leavePage()
        },
        error: function (err) {
          console.log(err);
          leavePage()
        },
      });      
      leavePage()      
    }
  }  

  return (  
    <button onClick={leave} className="btn btn-danger" style={{ 
      position: "absolute",
      zIndex: '9999',
      bottom: "10px",
      right: "20px",
     }}>
        Leave
    </button>
  );
};

export default App;