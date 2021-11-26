import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from "axios";
import ReactPlayer from "react-player";

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, [data]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getLAA`)
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px", overflow: "hidden" }}>
          <span className="badge badge-info">Lifetime Achievement Award</span>
          {data && (
            <div
              style={{
                display: "inline-block",
                fontSize: "15px",
                width: "30%",
                position: "absolute",
                left: "35%",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <p>
                {" "}
                <span style={{ fontSize: "20px", fontWeight: "800" }}>
                  {data.nama}
                </span>{" "}
                <br /> {data.desc}
              </p>
            </div>
          )}
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              {data ? (
                <>
                  <ReactPlayer
                    className="react-player"
                    url={`${process.env.REACT_APP_FILE}video/${data.video}`}
                    width="100%"
                    height="100%"
                    volume="0.2"
                    playsInline
                    playing={false}
                    loop
                    controls={true}
                    autoPlay={false}
                  />
                </>
              ) : (
                <h4>Please wait</h4>
              )}
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Index;
