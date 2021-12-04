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
          <span className="badge badge-info">Oral Presentation</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              {data ? (
                <>
                  {data.name != undefined ? (
                    <>
                      <h4>{data.name}</h4>
                      <p>{data.desc}</p>
                      <Countdown date={new Date('12/05/2021 09:00:00')} />
                      <br/>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          openZoom(data.zoom_room_id, data.passcode)
                        }
                      >
                        Join Now
                      </button>
                      <br/>
                    </>
                  ) : null}
                </>
              ) : (
                <h4>Please wait</h4>
              )}
              {data && <>{data.length == 0 ? <h4>No Data</h4> : null}</>}
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Index;
