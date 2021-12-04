import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from "axios";
import Countdown from "react-countdown";

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

  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">FAQ</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
            <ul className="list-group">
              <li className="list-group-item mb-2" style={{ fontSize: "20px" }}>
                <b>1.	Will participants be provided an access link to enter the symposia and/or workshop?</b>
                <br/>  
                <i>*Upon registration, we will send an email to pre-registered email address of all participants with access links to symposia and workshop attached.*</i>
              </li>
              <li className="list-group-item mb-2" style={{ fontSize: "20px" }}>
                <b>2.	Will there be other applications which could be used to access virtual events (symposia and workshops)?</b>
                <br/>  
                <i>*No, all virtual events can only be accessed through our website.*</i>
              </li>
              <li className="list-group-item mb-2" style={{ fontSize: "20px" }}>
                <b>3.	Where upon online registration can we find the access link to join symposia and/or workshops?</b>
                <br/>  
                <i>*All participants will be provided with an access link through pre-registered email address.*</i>
              </li>
              <li className="list-group-item mb-2" style={{ fontSize: "20px" }}>
                <b>4.	Is it possible for participants to access all symposia in every virtual rooms?</b>
                <br/>  
                <i>*All participants will be able to access any symposia they wish to watch in any virtual rooms.*</i>
              </li>
              <li className="list-group-item mb-2" style={{ fontSize: "20px" }}>
                <b>5.	Will oral presentation sessions be accessible to all participants?</b>
                <br/>  
                <i>*Yes, oral presentation sessions will be accessible to all participants during live sessions. (Link on website with limited capacity).*</i>
              </li>
              <li className="list-group-item mb-2" style={{ fontSize: "20px" }}>
                <b>6.	For how long will symposia material be accessible to participants?</b>
                <br/>  
                <i>*All symposia material will be accessible as videos on demand starting from one week after event to one month after event.*</i>
              </li>
              <li className="list-group-item mb-2" style={{ fontSize: "20px" }}>
                <b>7.	When will certificates be available for participants?</b>
                <br/>  
                <i>*Every participants will be able to download the certificate from the registered account one week at the latest after event.*</i>
              </li>
            </ul>
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Index;
