import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { ImageMap } from "@qiuz/react-image-map";
import { Modal, Button, Form, Input, Tooltip } from "antd";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import styles from "./Button.module.css";
import DataSliver from "./silver.json";
import DataGold from "./gold.json";
import { isMobile } from "react-device-detect";

// const dirFile = "https://acsasurabaya2021.com/files/";
const dirFile = "https://admin.acsasurabaya2021.com/files/";

const SilverBooth = ({ phase, dataBooth }) => {
  const [guestBookModal, setGuestBookModal] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleViewModal, setVisibleViewModal] = useState(false);
  const [fileView, setFileView] = useState(null);
  const [viewType, setViewType] = useState(null);
  const [form] = Form.useForm();

  const mapAreSilver = [
    {
      width: "2.4%",
      height: "6.5%",
      left: "61%",
      top: "10%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "8.4%",
      height: "35.5%",
      left: "58%",
      top: "34%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "4%",
      height: "9%",
      left: "18.9%",
      top: "59.7%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => (
        <Tooltip placement="right" title={"Guest Book"}>
          <img width="100%" height="100%" src="./guests-book.png" />
        </Tooltip>
      ),
    },
  ];

  const mapAreSilverMobile = [
    {
      width: "15.4%",
      height: "24.5%",
      left: "58%",
      top: "10%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "14.4%",
      height: "38.5%",
      left: "59%",
      top: "37%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "7%",
      height: "10%",
      left: "9.9%",
      top: "63.7%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => (
        <Tooltip placement="right" title={"Guest Book"} defaultVisible={true}>
          <img width="100%" height="100%" src="./guests-book.png" />
        </Tooltip>
      ),
    },
  ];

  const mapAreGold = [
    {
      width: "2.4%",
      height: "6.5%",
      left: "40.7%",
      top: "2.5%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "8.5%",
      height: "14%",
      left: "34.4%",
      top: "30.5%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "8.6%",
      height: "13.4%",
      left: "45.3%",
      top: "31%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "9.7%",
      height: "42%",
      left: "67%",
      top: "29%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "4%",
      height: "9%",
      left: "39.9%",
      top: "61.7%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => (
        <Tooltip placement="right" title={"Guest Book"} >
          <img width="100%" height="100%" src="./guests-book.png" />
        </Tooltip>
      ),
    },
  ];

  const mapAreGoldMobile = [
    {
      width: "16%",
      height: "19%",
      left: "58%",
      top: "5%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "14.5%",
      height: "17%",
      left: "27.4%",
      top: "33.5%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "14.5%",
      height: "17%",
      left: "42.3%",
      top: "33%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "15.7%",
      height: "43%",
      left: "72%",
      top: "32%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area, index) => <span></span>,
    },
    {
      width: "6%",
      height: "9%",
      left: "36.9%",
      top: "64.7%",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => (
        <Tooltip placement="right" title={"Guest Book"} defaultVisible={true}>
          <img width="100%" height="100%" src="./guests-book.png" />
        </Tooltip>
      ),
    },
  ];

  const onMapBoothSilverClick = (area, index) => {
    if (index == 0) {
      if (dataBooth.master[0].link != "-" || dataBooth.master[0].link != null) {
        window.open(dataBooth.master[0].link);
      }
    } else if (index == 1) {
      console.log("Open PDF MODAL");
      setVisibleModal(true);
      setViewType("PDF");
    } else if (index == 2) {
      console.log("Open Modal Guest Book");
      setGuestBookModal(true);
      // setViewType("Video");
    }
  };

  const onMapBoothGoldClick = (area, index) => {
    if (index == 0) {
      if (dataBooth.master[0].link != "-" || dataBooth.master[0].link != null) {
        window.open(dataBooth.master[0].link);
      }
    } else if (index == 1) {
      playVideo(0);
    } else if (index == 2) {
      playVideo(1);
    } else if (index == 3) {
      setVisibleModal(true);
      setViewType("PDF");
    } else if (index == 4) {
      console.log("Open Modal Guest Book");
      setGuestBookModal(true);
      // setViewType("Video");
    }
  };

  const playVideo = (index) => {
    setViewType("Video");
    let dataVideo = dataBooth.video[index];
    if (dataVideo != undefined) {
      let UrlFile;
      if (dataVideo.tipe == "EMBED") {
        UrlFile = dataVideo.link;
      } else {
        UrlFile = dirFile + "video/" + dataVideo.file;
      }
      setVisibleViewModal(true);
      setFileView(UrlFile);
    } else {
      alert("Video Is Unavaible");
    }
  };

  const openPdfReader = (file) => {
    let UrlFile = dirFile + "pdf/" + file;
    console.log(UrlFile);
    if (isMobile) {
      window.open("https://docs.google.com/viewerng/viewer?url=" + UrlFile);
    } else {
      setVisibleViewModal(true);
      setFileView(UrlFile);
    }
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
      instansi: JSON.parse(localStorage.getItem("userData")).userData
        .affiliation,
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
        if (res.data.status == 1) {
          form.resetFields();
          setGuestBookModal(false);
          alert(res.data.message);
        } else {
          alert(res.data.message);
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
                  defaultValue={
                    JSON.parse(localStorage.getItem("userData")).nama
                  }
                  placeholder="Name"
                />
              </Form.Item>

              <Form.Item label="Phone" name="phone">
                <Input
                  disabled={true}
                  defaultValue={
                    JSON.parse(localStorage.getItem("userData")).userData
                      .mobilephone
                  }
                  placeholder="Phone"
                />
              </Form.Item>

              <Form.Item label="Affiliation" name="instansi">
                <Input
                  disabled={true}
                  defaultValue={
                    JSON.parse(localStorage.getItem("userData")).userData
                      .affiliation
                  }
                  placeholder="Affiliation"
                />
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
              {viewType == "PDF" ? (
                <>
                  {dataBooth.pdf.length == 0 ? "No Data" : ""}
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
                  {dataBooth.video.length == 0 ? "No Data" : ""}
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
        destroyOnClose={true}
        onCancel={() => setVisibleViewModal(false)}
        footer={[
          <Button key="back" onClick={() => setVisibleViewModal(false)}>
            Close
          </Button>,
        ]}
      >
        {/* <Document           
            file={fileView}
            showAll={true}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page pageNumber={pageNumber} />
          </Document> */}
        {viewType == "PDF" && fileView != null ? (
          <embed
            src={fileView}
            height="800"
            width="100%"
            type="application/pdf"
          />
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
      <div class="visibledesktop">
        {DataSliver.map((row, i) => {
          return (
            <>
              {phase == row.phase ? (
                <ImageMap
                  className="usage-map"
                  src={row.img}
                  map={mapAreSilver}
                  onMapClick={onMapBoothSilverClick}
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
      </div>
      <div class="visibledevice">
        {DataSliver.map((row, i) => {
          return (
            <>
              {phase == row.phase ? (
                <ImageMap
                  className="usage-map"
                  src={row.img}
                  map={mapAreSilverMobile}
                  onMapClick={onMapBoothSilverClick}
                  style={{
                    width: "100%",
                  }}
                />
              ) : null}
            </>
          );
        })}
      </div>
      <div class="visibledesktop">
        {DataGold.map((row, i) => {
          return (
            <>
              {phase == row.phase ? (
                <ImageMap
                  className="usage-map"
                  src={row.img}
                  map={mapAreGold}
                  onMapClick={onMapBoothGoldClick}
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
      </div>
      <div class="visibledevice">
        {DataGold.map((row, i) => {
          return (
            <>
              {phase == row.phase ? (
                <ImageMap
                  className="usage-map"
                  src={row.img}
                  map={mapAreGoldMobile}
                  onMapClick={onMapBoothGoldClick}
                  style={{
                    width: "100%",
                  }}
                />
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default SilverBooth;
