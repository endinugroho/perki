import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { ImageMap } from "@qiuz/react-image-map";
import { Modal, Button } from "antd";
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

// const dirFile = "https://acsasurabaya2021.com/files/";
const dirFile = "https://admin.acsasurabaya2021.com/files/";

const PlatinumBooth = ({ phase, dataBooth }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleViewModal, setVisibleViewModal] = useState(false);
  const [fileView, setFileView] = useState(null);
  const [viewType, setViewType] = useState("Catalog");

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
  ];

  const onMapBoothPlatinumClick = (area, index) => {
    if (index == 0) {
      if (dataBooth.master[0].link != "-" || dataBooth.master[0].link != null) {
        window.open(dataBooth.master[0].link);
      }
    } else if (index == 1) {
      console.log("Open PDF MODAL");
      setVisibleModal(true);
      setViewType("PDF");
    } else if (index == 2) {
      console.log("Open WA ME MODAL");
    } else if (index >= 3) {
      console.log("Open VIDEO MODAL");
      setVisibleModal(true);
      setViewType("Video");
    }
  };

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

  return (
    <>
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
        {/* <img
          src="https://acsasurabaya2021.com/wp-content/plugins/perki/register.png"
          className="visible-desktop"
          width="300"
          style={{
            position: "absolute",
            right: "0",
            width: "350px",
            marginTop: "-22px",
          }}
        /> */}
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
        {/* <Document           
            file={fileView}
            showAll={true}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page pageNumber={pageNumber} />
          </Document> */}
        {viewType == "PDF" && fileView != null ? (
          <iframe
            src={`${fileView}#view=fitH`}
            title="title"
            height="100%"
            width="100%"
          >
            Presss me: <a href={fileView}>Download PDF</a>
          </iframe>
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
