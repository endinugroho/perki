import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from "axios";
import { Modal, DatePicker, Input, Form, Radio, Select, Button } from "antd";
import Countdown from "react-countdown";
import { element } from "prop-types";
import 'antd/dist/antd.css';

const Index = () => {
  const [data, setData] = useState(null);
  const [full, setFull] = useState("FULL");

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
        {full=="NONFULL" ?
        <div><div class="visibledesktop">
        <CRow>
          <CCol sm={8}>
          {/* <p><iframe title="ACSA" src={"http://54.169.143.108:3050/?"+localStorage.getItem("nama")} allowfullscreen="allowfullscreen" width="100%" height="700px"></iframe></p> */}
          <div><Button type="primary" onClick={()=>setFull("FULL")}>Full Screen</Button></div>
          <iframe src="https://acsasurabaya2021.com/video-symposium-page-1/" width="100%" height="500px" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
          </CCol>
          <CCol sm={4}>
          <p><iframe src="https://deadsimplechat.com/_rfQF1Sr5" width="400px" height="600px"></iframe></p>
          </CCol>
        </CRow>
        </div>
        <div class="visibledevice">
        <CRow>
          <CCol sm={8}>
          {/* <p><iframe title="ACSA" src={"http://54.169.143.108:3050/?"+localStorage.getItem("nama")} allowfullscreen="allowfullscreen" width="100%" height="700px"></iframe></p> */}
          <div><Button type="primary" onClick={()=>setFull("FULL")}>Full Screen</Button></div>
          <iframe src="https://acsasurabaya2021.com/video-symposium-page-1/" width="100%" height="300px" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
          </CCol>
          <CCol sm={4}>
          <p><iframe src="https://deadsimplechat.com/_rfQF1Sr5" width="100%" height="600px"></iframe></p>
          </CCol>
        </CRow>
        </div></div>
:
<div>
<div class="visibledesktop">
<CRow>
<CCol sm={12}>
{/* <p><iframe title="ACSA" src={"http://54.169.143.108:3050/?"+localStorage.getItem("nama")} allowfullscreen="allowfullscreen" width="100%" height="700px"></iframe></p> */}
<div><Button type="primary" onClick={()=>setFull("NONFULL")}>Normal Screen</Button></div>
<iframe src="https://acsasurabaya2021.com/video-symposium-page-1/" width="100%" height="700px" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
</CCol>
</CRow>
<CRow>
<CCol sm={12}>
<p><iframe src="https://deadsimplechat.com/_rfQF1Sr5" width="100%" height="600px"></iframe></p>
</CCol>
</CRow>
</div>
<div class="visibledevice">
<CRow>
<CCol sm={12}>
{/* <p><iframe title="ACSA" src={"http://54.169.143.108:3050/?"+localStorage.getItem("nama")} allowfullscreen="allowfullscreen" width="100%" height="700px"></iframe></p> */}
<div><Button type="primary" onClick={()=>setFull("NONFULL")}>Normal Screen</Button></div>
<iframe src="https://acsasurabaya2021.com/video-symposium-page-1/" width="100%" height="300px" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
</CCol>
</CRow>
<CRow>
<CCol sm={12}>
<p><iframe src="https://deadsimplechat.com/_rfQF1Sr5" width="100%" height="600px"></iframe></p>
</CCol>
</CRow>
</div></div>
        }
        </CCardBody>
      </CCard>
    </>
  );
};

export default Index;
