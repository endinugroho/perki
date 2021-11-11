// import React from 'react';
import React, { useEffect, useState } from 'react'
import { ZoomMtg } from '@zoomus/websdk';
import { useParams } from "react-router-dom";
import './App.css';
const crypto = require('crypto'); // crypto comes with Node.js
// declare ZoomMtg;
ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.9/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

// setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
// var meetingNumber = "79190715224";
// var meetingNumber = "83601178402";
// var meetingNumber = localStorage.getItem("meetingid");
// var leaveUrl = 'http://localhost:3000/#/theme/session';
// var userName = localStorage.getItem("nama");
// https://us02web.zoom.us/j/87189194063?pwd=V0I5c1pPNDU5RWVyTUxZRDkvQkhyUT09
var signatureEndpoint = ''
var apiKey = 'sw1o-LaLTtaMC0xjZ9ghdw'
var apiSecret  = 'NDRYGCnfiSXNSosr25YEPnKOkKU4rf8ksSiF';
var meetingNumber = "87692281345";
var role = 0;
var leaveUrl = 'https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/session';
var userName = localStorage.getItem("nama");
var userEmail = 'random1002310@gmail.com';
var passWord = '263137';
var registrantToken = ''
// var passWord = 'RGNtNTYzbEVjNG9VZWFWSUdvQjNhZz09';
// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/meetings/join#join-registered
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/webinars/join#join-registered-webinar

const App = props => {
// const { id } = useParams();
// const {id} = props
// const { title, title2 } = props
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    // console.log("id=",props.title);
    // console.log("id2=",props);

    // setTimeout(function() { //Start the timer
    //   getSignature();
    // }.bind(this), 100);
    if(isOpen != true){
      // startMeeting(localStorage.getItem('signature'));
      startMeeting(generateSignature(apiKey, apiSecret, meetingNumber, role));
    }
  }, [isOpen]);

  function generateSignature(apiKey, apiSecret, meetingNumber, role) {

    // Prevent time sync issue between client signature generation and zoom
    const timestamp = new Date().getTime() - 30000
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
    const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
    const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

    return signature
  }

  function getSignature() {
    // e.preventDefault();
    startMeeting(localStorage.getItem('signature'));
    // fetch(signatureEndpoint, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     meetingNumber: meetingNumber,
    //     role: role
    //   })
    // }).then(res => res.json())
    // .then(response => {
    //   startMeeting(response.signature)
    // }).catch(error => {
    //   console.error(error)
    // })
  }

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block'
    ZoomMtg.init({
      disablePreview:true,
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
          success: (success) => {
            console.log(success)
            setIsOpen(true)
          },
          error: (error) => {
            console.log(error)
            setIsOpen(false)
          }
        })

      },
      error: (error) => {
        console.log(error)
        setIsOpen(false)
      }
    })
  }

  return ('');
}

export default App;
