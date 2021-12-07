import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from "axios";
import { Modal, DatePicker, Input, Form, Radio, Select, Button } from "antd";
import Countdown from "react-countdown";
import { element } from "prop-types";

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, [data]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getOralZoom`)
      .then((res) => {
        // console.log(res);
        if (res.data.status == 1) {
          let dataRes = res.data.data;
          if (dataRes.zoom_room_id != "") {
            setData(dataRes);
          } else {
            setData([]);
            // alert("this Feature is not active");
          }
        } else {
          setData([]);
          // alert("this Feature is not active");
        }
      })
      .catch((err) => console.log(err));
  };

  function openZoom(meetingId, passcode = null) {
    if (passcode != null) {
      passcode = "?pwd=" + passcode;
    } else {
      passcode = "";
    }
    window.open(`https://us04web.zoom.us/j/${meetingId}${passcode}`);
  }

  const hideelement = () => {
    console.log("hide");
    var elem = document.getElementsByClassName("ytp-impression-link");
    console.log(elem);
    // elem.remove();

  }

  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">VIDEO</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
          <CCol sm={8}>
            {/* <p><iframe title="ACSA" src={"http://54.169.143.108:3050/?"+localStorage.getItem("nama")} allowfullscreen="allowfullscreen" width="100%" height="700px"></iframe></p> */}
            <iframe src="https://iframe.dacast.com/live/51aa6ea8-8a53-8f21-aea8-c692161ab9cb/44229ebf-592a-7980-daee-fc1db19d5e2f" width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>            <Button onClick={()=>hideelement()}>Hide</Button>
            </CCol>
            <CCol sm={4}>
            {/* <p><iframe title="ACSA" src={"http://54.169.143.108:3030/?"+localStorage.getItem("nama")} allowfullscreen="allowfullscreen" width="100%" height="700px"></iframe></p> */}
            <iframe src="https://deadsimplechat.com/_rfQF1Sr5" width="400px" height="600px"></iframe>
            </CCol>
            {/* <CCol sm={4}>
            <p><iframe title="ACSA" src={"http://54.169.143.108:3040/?"+localStorage.getItem("nama")} allowfullscreen="allowfullscreen" width="100%" height="700px"></iframe></p>
            </CCol> */}
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Index;
