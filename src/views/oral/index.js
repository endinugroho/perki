import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from "axios";
import { Modal, Button } from "antd";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";

const Index = () => {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState(false);
  const [galleryData, setGalleryData] = useState([]);
  const [img, setImg] = useState("");
  const [fileVideo, setFileVideo] = useState("");

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, [data]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getOralClip`)
      .then((res) => {
        console.log(res.data.status);
        if (res.data.status == 1) {
          let dataRes = res.data.data;
          setData(dataRes);
        } else {
          setData([]);
        }
      })
      .catch((err) => console.log(err));
  };

  const showGallery = (i) => {
    setGalleryData(data[i].detil);
    setModal(true);
  };

  const showImg = (src) => {
    setImg(src);
    setModalImg(true);
  };

  return (
    <>
      {/* Modal IMG */}
      <Modal
        title={`Video`}
        width={"100%"}
        visible={modalImg}
        onCancel={() => setModalImg(false)}
        destroyOnClose={true}
        footer={[
          <Button key="back" onClick={() => setModalImg(false)}>
            Close
          </Button>,
        ]}
      >
        <ReactPlayer
          className="react-player"
          url={`${process.env.REACT_APP_FILE}video/${img}`}
          width="100%"
          height="80vh"
          volume={1}
          playsInline
          playing={false}
          loop
          controls={true}
          autoPlay={false}
        />
      </Modal>

      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">Oral Presentation</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {data ? (
                <>
                  <h4 align="center">Oral Presentation Clip</h4>
                  <CRow>
                    {data.map((row, i) => {
                      return (
                        <div
                          key={i}
                          className="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                        >
                          <CCard>
                            <CCardBody>
                              <b>Nama :</b> {row.name} <br />
                              <b>Desc :</b> {row.desc} <br />
                              <div
                                style={{
                                  overflow: "hidden",
                                  height: "300px",
                                  position: "relative",
                                }}
                              >
                                <div
                                  title="Click for View"
                                  style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    background: "#463f3f3d",
                                    zIndex: "2",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    showImg(row.video);
                                  }}
                                ></div>
                                <ReactPlayer
                                  className="react-player"
                                  url={`${process.env.REACT_APP_FILE}video/${row.video}`}
                                  width="100%"
                                  height="100%"
                                  volume={1}
                                  playsInline
                                  playing={false}
                                  loop
                                  controls={true}
                                  autoPlay={false}
                                />
                              </div>
                            </CCardBody>
                          </CCard>
                        </div>
                      );
                    })}
                  </CRow>
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
