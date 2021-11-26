import React, { useEffect, useState} from "react";
import axios from "axios";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import './style.css';

const baseUrl = "https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/session";
// document.getElementsByTagName('iframe')[0].contentWindow.getElementsByClassName('ytp-watch-later-button')[0].style.display = 'none';
// const ytId = localStorage.getItem('meetingid');
// const baseUrl = "http://localhost:3000/";

const Colors = () => {  
  let history = useHistory();  
  
  const leavePage = () => {
      if(window.confirm("Are You Sure!")){
        window.location.href = baseUrl;
      }
  }

  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">Live Stream Symposium </span>
          <button className="btn btn-danger float-right" onClick={leavePage}>Leave</button>
        </CCardHeader>
        <CCardBody style={{ height: "500px" }}>
          <CRow>            
              <img src="./00_LIVE STREAM/STREAM_KANAN.png" className="col-lg-3" style={{height: '468px'}}/>            
              <iframe 
                className="col-lg-6 col-md-12 col-sm-12"
                style={{
                  height: '455px',
                  width: '782px',
                  padding: '0',
                  // marginTop: '-4px',
                  // position: 'relative',
                  // transform: "translate(-50%, 0)",
                  // left: "50%",
                }}
                src={`https://www.youtube-nocookie.com/embed/2Q58cPgiKuA?controls=1&showinfo=0&autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=1&hd=1`}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"                 
            ></iframe>                            
              <iframe 
                className="col-lg-3 col-md-12 col-sm-12"
                style={{
                  height: '455px',
                  width: '782px',
                  padding: '0',
                  // marginTop: '-4px',
                  // position: 'relative',
                  // transform: "translate(-50%, 0)",
                  // left: "50%",
                }}
                src={`https://www.youtube.com/live_chat?v=2Q58cPgiKuA&embed_domain=localhost`} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>                            
              {/* <img src="./00_LIVE STREAM/STREAM_KIRI.png" className="col-lg-3" style={{height: '468px'}}/>             */}
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
