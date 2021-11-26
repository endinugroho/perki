import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from "axios";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

const Index = () => {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState(false);
  const [galleryData, setGalleryData] = useState([]);
  const [img, setImg] = useState("");

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, [data]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getPoster`)
      .then((res) => {        
        console.log(res.data.status)
        if(res.data.status == 1){
          let dataRes = res.data.data;
          setData(dataRes);
        }else{
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
      {/* Modal Galley */}
      <Modal
        title={`Gallery e-Poster`}
        width={"80%"}
        visible={modal}
        onCancel={() => setModal(false)}
        footer={[
          <Button key="back" onClick={() => setModal(false)}>
            Close
          </Button>,
        ]}
      >
        <div className="row">
          {galleryData.map((row, i) => {
            return (
              <div
                key={i}
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12 shadow p-3 rounded"
              >
                <b>Desc</b> : {row.desc}
                <br />
                {row.img != undefined ? (
                  <img
                    style={{ width: "100%", marginTop: "21px" }}
                    title="click for big size"
                    src={`${process.env.REACT_APP_FILE}poster/${row.img}`}
                    onClick={() =>
                      showImg(`${process.env.REACT_APP_FILE}poster/${row.img}`)
                    }
                  />
                ) : null}{" "}
              </div>
            );
          })}
        </div>
      </Modal>

      {/* Modal IMG */}
      <Modal
        title={`Gallery e-Poster`}
        width={"100%"}
        visible={modalImg}
        onCancel={() => setModalImg(false)}
        footer={[
          <Button key="back" onClick={() => setModalImg(false)}>
            Close
          </Button>,
        ]}
      >
        <img style={{ width: "100%" }} src={img} width="100%" />
      </Modal>

      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">e-Poster</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {data ? (
                <>
                  <CRow>
                    {data.map((row, i) => {
                      return (
                        <div
                          key={i}
                          className="col-lg-4 col-md-3 col-sm-12 col-xs-12"
                        >
                          <CCard>
                            <CCardBody>
                              <b>Affiliation</b> : {row.instansi} <br />
                              <b>Desc</b> : {row.desc}{" "}
                              <span
                                className="badge badge-primary"
                                style={{
                                  float: "right",
                                  padding: "7px",
                                  cursor: "pointer",
                                }}
                                onClick={() => showGallery(i)}
                              >
                                View More Poster
                              </span>{" "}
                              <br />
                              {row.detil[0] != undefined ? (
                                <img
                                  style={{ width: "100%", marginTop: "21px" }}
                                  title="click for big size"
                                  src={`${process.env.REACT_APP_FILE}poster/${row.detil[0].img}`}
                                  onClick={() =>
                                    showImg(
                                      `${process.env.REACT_APP_FILE}poster/${row.detil[0].img}`
                                    )
                                  }
                                />
                              ) : null}
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
              {
                data && (
                  <>
                    {data.length == 0 ? <h4>No Data</h4> : null}
                  </>
                )
              }
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Index;
  