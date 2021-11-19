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
import DataSliver from './silver.json'
import DataGold from './gold.json'

// const dirFile = "https://acsasurabaya2021.com/files/";
const dirFile = "https://admin.acsasurabaya2021.com/files/"

const SilverBooth = ({phase, dataBooth}) => {    
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleViewModal, setVisibleViewModal] = useState(false);
  const [fileView, setFileView] = useState(null);
  const [viewType, setViewType] = useState(null);  

  const mapAreSilver = [
    {
      width: "2.4%",
      height: "6.5%",
      left: "61%",
      top: "10%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area, index) => (
        <span>       
        </span>
      ),
    },
    {
      width: "8.4%",
      height: "35.5%",
      left: "58%",
      top: "34%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area, index) => (
        <span>

        </span>
      ),
    },
  ];

  const mapAreGold = [
    {
      width: "2.4%",
      height: "6.5%",
      left: "40%",
      top: "1%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area, index) => (
        <span>       
        </span>
      ),
    },
    {
      width: "9.3%",
      height: "14.5%",
      left: "34%",
      top: "32%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area, index) => (
        <span>

        </span>
      ),
    },
    {
      width: "9.2%",
      height: "14.5%",
      left: "45%",
      top: "32%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area, index) => (
        <span>

        </span>
      ),
    },
    {
      width: "9.7%",
      height: "40.5%",
      left: "67.4%",
      top: "29%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area, index) => (
        <span>

        </span>
      ),
    },
  ];

  const onMapBoothSilverClick = (area, index) => {
    if (index == 0) {
      window.open(dataBooth.master[0].link);
    } else if (index == 1) {
      console.log("Open PDF MODAL");
      setVisibleModal(true);
      setViewType("PDF");
    }
  };

  const onMapBoothGoldClick = (area, index) => {
    if (index == 0) {
      window.open(dataBooth.master[0].link);
    } else if (index == 1) {    
      setVisibleModal(true);
      setViewType("Video");  
    } else if (index == 2) {      
      setVisibleModal(true);
      setViewType("Video");    
    } else if (index == 3) {      
      setVisibleModal(true);
      setViewType("PDF");    
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
        title="View"
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
        title="Catalog"
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
          <iframe src={`${fileView}#view=fitH`} title="title" height="100%" width="100%">
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
      {
          DataSliver.map((row, i) => {
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
              )
          })
      }      
      {
          DataGold.map((row, i) => {
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
              )
          })
      }      
    </>
  );
};

export default SilverBooth;
