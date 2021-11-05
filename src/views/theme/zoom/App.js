// import React from 'react';
import React, { useEffect } from 'react'
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


const App = props => {
// const { id } = useParams();
// const {id} = props
// const { title, title2 } = props
  useEffect(() => {
    console.log("id=",props.title);
    // console.log("id2=",props);

    // setTimeout(function() { //Start the timer
    //   getSignature();
    // }.bind(this), 100);

  }, []);

  // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
  var signatureEndpoint = ''
  var apiKey = 'sw1o-LaLTtaMC0xjZ9ghdw'
  var apiSecret  = 'NDRYGCnfiSXNSosr25YEPnKOkKU4rf8ksSiF';
  var meetingNumber = "81474216355";//localStorage.getItem("meetingid");
  var role = 0;
  var leaveUrl = 'https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/dashboard';
  var userName = localStorage.getItem("nama");
  var userEmail = 'endinugroho@gmail.com'
  var passWord = '123456'
  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/meetings/join#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/webinars/join#join-registered-webinar
  var registrantToken = ''


  function generateSignature(apiKey, apiSecret, meetingNumber, role) {

    // Prevent time sync issue between client signature generation and zoom
    const timestamp = new Date().getTime() - 30000
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
    const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
    const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

    return signature
  }
    function getSignature(e) {
    e.preventDefault();

    startMeeting(generateSignature(apiKey,apiSecret,meetingNumber,role));

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
console.log(meetingNumber);
    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          // userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting Acsa Surabaya 2021</h1>
        <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/register.png" width="300" style={{float:"right"}} />

        <button onClick={getSignature}>Join Meeting</button>
      </main>
    </div>
  );
}

export default App;
