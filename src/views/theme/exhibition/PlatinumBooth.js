import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { ImageMap } from "@qiuz/react-image-map";
import { Modal, Button, Form, Input } from "antd";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import styles from "./Button.module.css";
import DataPlatinum from "./platinum.json";

const dirFile = "https://admin.acsasurabaya2021.com/files/";

const PlatinumBooth = ({ phase, dataBooth }) => {
  const [guestBookModal, setGuestBookModal] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleViewModal, setVisibleViewModal] = useState(false);
  const [fileView, setFileView] = useState(null);
  const [viewType, setViewType] = useState("Catalog");
  const [form] = Form.useForm();

  const mapAreaBoothPlatinum = [
    {
      width: "2.3%",
      height: "5.3%",
      left: "59.3%",
      top: "-19px",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "8.3%",
      height: "30%",
      left: "29.5%",
      top: "21.8%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "2.7%",
      height: "6.5%",
      left: "24.6%",
      top: "48.3%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
        borderRadius: "50%",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "8.6%",
      height: "13.2%",
      left: "49.8%",
      top: "29.6%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "8.6%",
      height: "13.2%",
      left: "59.1%",
      top: "29.6%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "8.6%",
      height: "13.2%",
      left: "72.9%",
      top: "29.6%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "8.6%",
      height: "13.2%",
      left: "72.9%",
      top: "44.9%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "8.6%",
      height: "13.2%",
      left: "72.9%",
      top: "60.5%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "4%",
      height: "9%",
      left: "37.9%",
      top: "45.7%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => (
        <img width="100%" height="100%" src="./guests-book.png" />
      ),
    },
  ];

  const onMapBoothPlatinumClick = (area, index) => {
    if (index == 0) {
      if (dataBooth.master[0].link != "-" && dataBooth.master[0].link != null) {
        window.open(dataBooth.master[0].link);
      }
    } else if (index == 1) {
      // console.log("Open PDF MODAL");
      setVisibleModal(true);
      setViewType("PDF");
    } else if (index == 2) {
      if(dataBooth.master[0].pic != "-" && dataBooth.master[0].pic != null){
        window.open(`https://wa.me/${dataBooth.master[0].pic}`);
      }else{
        alert('this WA number is unavaible')
      }
      // console.log("Open WA ME MODAL");
    } else if (index == 3) {
      playVideo(0);   
      // console.log("Open VIDEO MODAL");
      // setVisibleModal(true);
      // setViewType("Video"); 
    } else if (index == 4) {
      playVideo(1);   
    } else if (index == 5) {
      playVideo(2);   
    } else if (index == 6) {
      playVideo(3);   
    } else if (index == 7) {
      playVideo(4);
    } else if (index == 8) {
      // console.log("Open Modal Guest Book");
      setGuestBookModal(true);            
    }
  };

  const playVideo = (index) => {
    let dataVideo = dataBooth.video[index];
      if(dataVideo != undefined){
        let UrlFile;
        if (dataVideo.type == "EMBED") {
          UrlFile = dataVideo.link;
        } else {
          UrlFile = dirFile + "video/" + dataVideo.file;
        }
        setVisibleViewModal(true);
        setFileView(UrlFile);
      }else{
        alert('Video Is Unavaible')
      }
  }

  const openPdfReader = (file) => {
    let UrlFile = dirFile + "pdf/" + file;
    console.log(UrlFile);
    setVisibleViewModal(true);
    setFileView(UrlFile);
    // setFileView("https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf")
  };

  const openVideoPlayer = (file, link, type) => {
    let UrlFile;
    if (type == "EMBED") {
      UrlFile = link;
    } else {
      UrlFile = dirFile + "video/" + file;
    }
    setVisibleViewModal(true);
    setFileView(UrlFile);
  };

  const onFinish = (value) => {
    let values = {
      ...value,
      nama: JSON.parse(localStorage.getItem("userData")).nama,
      phone: JSON.parse(localStorage.getItem("userData")).userData.mobilephone,
      instansi: JSON.parse(localStorage.getItem("userData")).userData.affiliation,
      booth_id: dataBooth.master[0].id,
      peserta_id: JSON.parse(localStorage.getItem("userData")).userData.id,
    };
    console.log("Success:", values);
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getboothguestbook",
      data: values,
      contentType: "application/json",
      method: "POST",
    })
      .then((res) => {
        console.log(res.data);
        if(res.data.status == 1){
          form.resetFields();
          setGuestBookModal(false)
          alert(res.data.message)
        }else{
          alert(res.data.message)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {/* Modal Guest Book */}
      <Modal
        title={`Guest Book`}
        width={"80%"}
        visible={guestBookModal}
        onCancel={() => setGuestBookModal(false)}
        footer={[
          <Button key="back" onClick={() => setGuestBookModal(false)}>
            Close
          </Button>,
        ]}
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Form
              name="basic"
              form={form}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >              
              <Form.Item label="Name" name="nama">
                <Input           
                  disabled={true}        
                  defaultValue={JSON.parse(localStorage.getItem("userData")).nama}             
                  placeholder="Name"
                />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"                
              >
                <Input 
                  disabled={true}        
                  defaultValue={JSON.parse(localStorage.getItem("userData")).userData.mobilephone}             
                  placeholder="Phone" />
              </Form.Item>

              <Form.Item
                label="Affiliation"
                name="instansi"                
              >
                <Input 
                  disabled={true}        
                  defaultValue={JSON.parse(localStorage.getItem("userData")).userData.affiliation}             
                  placeholder="Affiliation" />
              </Form.Item>

              <Form.Item label="" name="desc">
                <Input.TextArea
                  defaultValue={""}
                  placeholder="Criticism and Suggestions"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>

      {/* Modal PDF AND Video */}
      <Modal
        title={`View ${viewType}`}
        width={"100%"}
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
        footer={[
          <Button key="back" onClick={() => setVisibleModal(false)}>
            Close
          </Button>,
        ]}
      >
        <div className="row">
          {dataBooth && (
            <>
              {dataBooth.pdf.length == 0 || dataBooth.video.length == 0
                ? "No Data"
                : ""}
              {viewType == "PDF" ? (
                <>
                  {dataBooth.pdf.map((row, i) => {
                    return (
                      <div
                        key={i}
                        className="col-lg-3 col-md-4 col-sm-12 col-xs-12"
                      >
                        <div className="card">
                          <div className="card-body">
                            {row.desc}
                            <br />
                            <br />
                            <Button
                              type="primary"
                              style={{
                                borderRadius: "10px",
                                background: "#2a3d9f",
                              }}
                              onClick={() => openPdfReader(row.file)}
                            >
                              View File
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  {dataBooth.video.map((row, i) => {
                    return (
                      <div
                        key={i}
                        className="col-lg-3 col-md-4 col-sm-12 col-xs-12"
                      >
                        <div className="card">
                          <div className="card-body">
                            {row.desc}
                            <br />
                            <small className="text-socondary">{row.tipe}</small>
                            <br />
                            <br />
                            <Button
                              type="primary"
                              style={{
                                borderRadius: "10px",
                                background: "#2a3d9f",
                              }}
                              onClick={() =>
                                openVideoPlayer(row.file, row.link, row.tipe)
                              }
                            >
                              View File
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
      </Modal>

      {/* Modal View PDF AND Video */}
      <Modal
        title={`View Catalog ${viewType}`}
        width={"100%"}
        visible={visibleViewModal}
        onCancel={() => setVisibleViewModal(false)}
        footer={[
          <Button key="back" onClick={() => setVisibleViewModal(false)}>
            Close
          </Button>,
        ]}
      >
        {viewType == "PDF" && fileView != null ? (
          <>
            <embed
              src={fileView}
              height="800"
              width="100%"
              type="application/pdf"
            />
          </>
        ) : (
          <ReactPlayer
            className="react-player"
            url={fileView}
            width="100%"
            height="80vh"
            volume="0.2"
            playsInline
            playing={false}
            loop
            controls={true}
            autoPlay={false}
          />
        )}
      </Modal>

      {DataPlatinum.map((row, i) => {
        return (
          <>
            {phase == row.phase ? (
              <ImageMap
                className="usage-map"
                src={row.img}
                map={mapAreaBoothPlatinum}
                onMapClick={onMapBoothPlatinumClick}
                style={{
                  width: "75%",
                  position: "relative",
                  zIndex: "1",
                  left: "50%",
                  transform: "translate(-50%, -23px)",
                }}
              />
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default PlatinumBooth;
