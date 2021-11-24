import React, { useEffect, useState} from "react";
import axios from "axios";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import './style.css';

// const baseUrl = "http://localhost:3000/";
const baseUrl = "https://acsasurabaya2021.com/wp-content/plugins/perki/build/";

const Colors = () => {  
  let history = useHistory();  
  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">Live Stream Symposium </span>
        </CCardHeader>
        <CCardBody style={{ height: "500px" }}>
          <CRow>            
              <img src="./00_LIVE STREAM/STREAM_KANAN.png" className="col-lg-3" style={{height: '468px'}}/>            
              <iframe
                src={baseUrl+"#/theme/zoom"}
                title="LiveStream"
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
              ></iframe>            
              <img src="./00_LIVE STREAM/STREAM_KIRI.png" className="col-lg-3" style={{height: '468px'}}/>            
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
