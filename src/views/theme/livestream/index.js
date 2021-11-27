import React, { useEffect, useState } from "react";
import axios from "axios";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import "./style.css";

// const baseUrl = "http://localhost:3000/";
// const baseUrl = "https://acsasurabaya2021.com/wp-content/plugins/perki/build/";

var meetingNumber = localStorage.getItem("meetingid");

const Colors = () => {
  let history = useHistory();
  const [fullscreencap, setCap] = useState('Open Video Full Screen');

  document.addEventListener("fullscreenchange", changeHandler);
  document.addEventListener("webkitfullscreenchange", changeHandler);
  document.addEventListener("mozfullscreenchange", changeHandler);
  document.addEventListener("MSFullscreenChange", changeHandler, false);

  function changeHandler() {
    let container = document.getElementById("Container");
    container.className = isFullScreen() ? "fullscreen" : "";
  }

  function isFullScreen() {
    return (
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.mozfullScreen ||
      document.msFullscreenElement
    );
  }

  function onFullScreenBtnClick() {
    // if we are in fullscreen, then exit
    let container = document.getElementById("Container");
    if (isFullScreen()) {   
      setCap('Open Video Full Screen');   
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozExitFullScreen) {
        document.mozExitFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      // if we are in non-fullscreen mode, open it
    } else {
      setCap('Exit Fullscreen');
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    }
  }
  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">Live Stream Symposium </span>
          <button className="btn btn-danger float-right" onClick={() => history.goBack()}>Leave</button>
        </CCardHeader>
        <CCardBody style={{ height: "525px" }}>
          <CRow>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div id="Container" style={{ height: "461px" }}>
                <button
                  id="fullScreenBtn"
                  className="btn btn-info"
                  onClick={onFullScreenBtnClick}
                >
                  {fullscreencap}
                </button>
                <iframe
                  src={`https://video.ibm.com/embed/${meetingNumber}?autoplay=true`}
                  style={{ border: "0" }}
                  webkitallowfullscreen="true"
                  allowfullscreen
                  frameborder="no"
                  width="100%"
                  height="100%"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <iframe
                src={`https://video.ibm.com/socialstream/${meetingNumber}?videos=0&theme=g10&messageVerticalSpacing=default&mainLinkColor=0f62fe&moderatorNameColor=d12771`}
                style={{ border: "0" }}
                webkitallowfullscreen="true"
                allowfullscreen
                frameborder="no"
                width="100%"
                height="461px"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>            
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
