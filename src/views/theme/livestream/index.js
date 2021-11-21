import React, { useEffect, useState} from "react";
import axios from "axios";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import 'style.css';

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
            <iframe
              src="http://localhost:3000/#/theme/zoom"
              title="LiveStream"
              style={{
                height: '68vh',
                width: '50vw',
                marginLeft: '100px',
                marginTop: '32px',
              }}
            ></iframe>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
