import React, { useEffect, useState } from "react";
import axios from "axios";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import "./style.css";
import ReactPlayer from "react-player/youtube";

const Colors = () => {
  let history = useHistory();
  const [frameId, setFrameId] = useState(localStorage.getItem("meetingid"));
  const [chatId, setChatId] = useState(localStorage.getItem("passcode"));
  const [roomTitle, setRoomTitle] = useState(localStorage.getItem("captionTitle"));
  const [fullscreencap, setCap] = useState("Open Video Full Screen");

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
      setCap("Open Video Full Screen");
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
      setCap("Exit Fullscreen");
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

          <small className="ml-3"><b><i>Ballroom {roomTitle}</i></b></small>

          <button
            className="btn btn-danger float-right"
            onClick={() => history.push("/theme/symposium")}
          >
            Leave
          </button>
        </CCardHeader>
        <CCardBody>
          <div className="container-fluid">
            <CRow>
              <div
                className="col-lg-8 col-md-10 col-sm-12"
                style={{ height: "700px" }}
              >
                <div id="Container" style={{ height: "100%" }}>
                  <button
                    id="fullScreenBtn"
                    className="btn btn-info"
                    onClick={onFullScreenBtnClick}
                    style={{
                      position: "absolute",
                    }}
                  >
                    {fullscreencap}
                  </button>
                  <iframe
                    // src={`${frameId}`}
                    // src={`https://player.castr.com/live_f8fa4cd0573111ecb04313bac1e552cf`}
                    src={`https://player.castr.com/${frameId}`}
                    width="100%"
                    height="100%"
                    frameborder="0"
                    scrolling="no"
                    allow="autoplay"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4 col-md-2 col-sm-12" style={{ height: "700px" }}>
                <iframe src={`${chatId}`} width="100%" className="shadow" height="100%" style={{ border: "none" }}></iframe>
              </div>
            </CRow>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
