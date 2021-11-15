import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";
import { RollbackOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { ImageMap } from "@qiuz/react-image-map";
import { Modal, Button } from "antd";
import { PDFReader } from "reactjs-pdf-reader";
import { pdfjs, Document, Page } from "react-pdf";
import FileViewer from "react-file-viewer";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import styles from "./Button.module.css";

// const dirFile = "https://acsasurabaya2021.com/files/";
const dirFile = "https://admin.acsasurabaya2021.com/files/"

const Colors = () => {
  let history = useHistory();
  const [layar1, setLayar1] = useState(0);
  const [layar2, setLayar2] = useState(0);
  const [phase, setPhase] = useState("GATE");
  const [hoverMask, setHoverMask] = useState(0);
  const [masterPhase, setMasterPhase] = useState("GATE");
  const [dataBooth, setDataBooth] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleViewModal, setVisibleViewModal] = useState(false);
  const [fileView, setFileView] = useState(null);
  const [viewType, setViewType] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const onMapClick = (area, index: number) => {
    const tip = `click map${area.href || index + 1}`;
    console.log(index);
    if (index == 16) {
      openInNewTab("https://wa.me/6282232683785");
    }

    if (index == 0) {
      setPhase("PLATINUM");
      setMasterPhase("PLATINUM");
    }

    if (index == 1) {
      setPhase("SILVER");
      setMasterPhase("SILVER");
    }
  };

  const onMapClick2 = (area, index: number) => {
    const tip = `click map${area.href || index + 1}`;
    console.log(index);
    if (index == 0) {
      // setPhase("ASTRA");
      fetchDataBooth("BOOTH001", "ASTRA");
    }
    if (index == 1) {
      setPhase("BOSTON");
    }
    if (index == 2) {
      setPhase("MERIL");
    }
    if (index == 3) {
      setPhase("NOVARTIS");
    }
    if (index == 4) {
      setPhase("OTSUKO");
    }
    if (index == 5) {
      setPhase("SERVIER");
    }
    if (index == 6) {
      setPhase("MISTUBISHI");
    }
    if (index == 7) {
      // setPhase("PLATINUM");
    }
    if (index == 8) {
      // setPhase("PLATINUM");
    }
    if (index == 9) {
      // setPhase("PLATINUM");
    }
    if (index == 10) {
      // setPhase("PLATINUM");
    }
    if (index == 12) {
      // setPhase("PLATINUM");
    }
    if (index == 12) {
      setPhase("ABBOT");
    }
    if (index == 13) {
      // setPhase("PLATINUM");
    }
    if (index == 14) {
      setPhase("PFIZER");
    }
  };

  const fetchDataBooth = (boothCode, boothName) => {
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getboothdetil&code=" +
          boothCode
      )
      .then((res) => {
        console.log(res);
        if (res.data.status == 0) {
          alert(res.data.message);
        } else {
          setDataBooth(res.data);
          setPhase(boothName);
        }
      })
      .catch((err) => console.log(err));
  };

  const onMapClick3 = (area, index: number) => {
    const tip = `click map${area.href || index + 1}`;
    console.log(index);
    if (index == 0) {
      setPhase("DARYA");
    }
    if (index == 1) {
      setPhase("BAYER");
    }
    if (index == 2) {
      setPhase("PRODIA");
    }
    if (index == 3) {
      setPhase("INDOMED");
    }
    if (index == 4) {
      setPhase("UPJOHN");
    }
    if (index == 5) {
      setPhase("TERUMO");
    }
    if (index == 6) {
      setPhase("IDSMED");
    }
    if (index == 7) {
      setPhase("FERRON");
    }
    if (index == 8) {
      setPhase("SIEMENS");
    }
    if (index == 9) {
      setPhase("MEDTRONIK");
    }
    if (index == 10) {
      setPhase("MERCK");
    }
  };

  const openInNewTab = (url) => {
    window.location.href = url;
  };

  const mapArea: any[] = [
    {
      width: "16.9%",
      height: "32%",
      left: "18%",
      top: "35.8%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, " + layar1 + ")", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "17%",
      height: "32%",
      left: "65%",
      top: "35.8%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, " + layar2 + ")", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0);
        setLayar2(0.3);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
  ];

  const mapArea2: any[] = [
    {
      width: "7%",
      height: "12%",
      left: "25%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "33%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "42%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "51%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "59%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "68%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    ///////
    {
      width: "7%",
      height: "12%",
      left: "21.5%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "31.5%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "41%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "51%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "61%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "72%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    //////////
    {
      width: "7%",
      height: "12%",
      left: "34.5%",
      top: "70%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "46.5%",
      top: "70%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "12%",
      left: "59%",
      top: "70%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
  ];

  const mapAreasilver: any[] = [
    {
      width: "7%",
      height: "15%",
      left: "24%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "33%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "42%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "51%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "60%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "68%",
      top: "30%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    ///////
    {
      width: "7%",
      height: "15%",
      left: "26%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "36%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "46.5%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "57%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "7%",
      height: "15%",
      left: "67%",
      top: "50%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
  ];

  const mapAreaBoothPlatinum: any[] = [
    {
      width: "2.3%",
      height: "5.3%",
      left: "59.3%",
      top: "-4px",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "7.3%",
      height: "29.1%",
      left: "29.9%",
      top: "21.8%",
      // href: "https://detik.com",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "2.3%",
      height: "5.3%",
      left: "25.6%",
      top: "47.9%",
      // href: "https://detik.com",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
    {
      width: "8.2%",
      height: "12.7%",
      left: "50.3%",
      top: "34%",
      // href: "https://detik.com",
      style: {
        background: "rgba(69, 147, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => {},
      render: (area: any, index: number) => <span></span>,
    },
  ];

  const mapAreaabbot: any[] = [
    {
      width: "9.4%",
      height: "14.5%",
      left: "34%",
      top: "32%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0.3)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/t4NxxsoTDT0"
            width="100%"
            height="100%"
            volume="0.2"
            playsInline
            playing={false}
            loop
            controls={true}
            autoPlay={false}
          />
        </span>
      ),
    },
    {
      width: "9.4%",
      height: "14.5%",
      left: "45%",
      top: "32%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0.3)", zIndex: "8" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/t4NxxsoTDT0"
            width="100%"
            height="100%"
            volume="0.2"
            playsInline
            playing={false}
            loop
            controls={true}
            autoPlay={false}
          />
        </span>
      ),
    },
  ];

  const backBeforeImg = () => {
    // console.log(phase)
    if (phase == "PLATINUM" || phase == "SILVER") {
      setPhase("GATE");
      setMasterPhase("GATE");
    }
    if (phase != "PLATINUM" && phase != "SILVER" && phase != "GATE") {
      setPhase(masterPhase);
    }
  };

  const onMapBoothPlatinumClick = (area, index) => {
    if (index == 0) {
      window.open(dataBooth.master[0].link);
    } else if (index == 1) {
      console.log("Open PDF MODAL");
      setVisibleModal(true);
      setViewType("PDF");
    } else if (index == 2) {
      console.log("Open WA ME MODAL");
    } else if (index == 3) {
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

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

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

      {phase != "GATE" && (
        <RollbackOutlined
          className={styles.back}
          onClick={() => backBeforeImg()}
        />
      )}
      {/* GATE AND BOOTHS */}
      {phase == "GATE" ? (
        <ImageMap
          className="usage-map"
          src={"./gate-blue-carpet.jpg"}
          map={mapArea}
          onMapClick={onMapClick}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "PLATINUM" ? (
        <ImageMap
          className="usage-map"
          src={"./001 Booth Venue platinum.jpg"}
          map={mapArea2}
          onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "SILVER" ? (
        <ImageMap
          className="usage-map"
          src={"./hall silver.jpg"}
          map={mapAreasilver}
          onMapClick={onMapClick3}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : null}
      {/* BOOTHS PLATINUM */}
      {phase == "ASTRA" ? (
        <ImageMap
          className="usage-map"
          src={"./astra.jpg"}
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
      ) : phase == "BOSTON" ? (
        <ImageMap
          className="usage-map"
          src={"./boston.jpg"}
          map={mapAreaBoothPlatinum}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "MERIL" ? (
        <ImageMap
          className="usage-map"
          src={"./meril.jpg"}
          map={mapAreaBoothPlatinum}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "NOVARTIS" ? (
        <ImageMap
          className="usage-map"
          src={"./novartis.jpg"}
          map={mapAreaBoothPlatinum}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "OTSUKO" ? (
        <ImageMap
          className="usage-map"
          src={"./otsuka.jpg"}
          map={mapAreaBoothPlatinum}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "SERVIER" ? (
        <ImageMap
          className="usage-map"
          src={"./servier.jpg"}
          map={mapAreaBoothPlatinum}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "MISTUBISHI" ? (
        <ImageMap
          className="usage-map"
          src={"./mitsubisi.jpg"}
          map={mapAreaBoothPlatinum}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "ABBOT" ? (
        <ImageMap
          className="usage-map"
          src={"./abbot.jpg"}
          map={mapAreaabbot}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "PFIZER" ? (
        <ImageMap
          className="usage-map"
          src={"./pfizer.jpg"}
          map={mapAreaabbot}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "DARYA" ? (
        <ImageMap
          className="usage-map"
          src={"./darya.jpg"}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "BAYER" ? (
        <ImageMap
          className="usage-map"
          src={"./bayer.jpg"}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "PRODIA" ? (
        <ImageMap
          className="usage-map"
          src={"./prodia.jpg"}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "INDOMED" ? (
        <ImageMap
          className="usage-map"
          src={"./indomed.jpg"}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "UPJOHN" ? (
        <ImageMap
          className="usage-map"
          src={"./upjon.jpg"}
          // map={mapAreaabbot}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "TERUMO" ? (
        <ImageMap
          className="usage-map"
          src={"./terumo.jpg"}
          // map={mapAreaabbot}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "IDSMED" ? (
        <ImageMap
          className="usage-map"
          src={"./idsmed.jpg"}
          // map={mapAreaabbot}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "FERRON" ? (
        <ImageMap
          className="usage-map"
          src={"./ferron.jpg"}
          // map={mapAreaabbot}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "SIEMENS" ? (
        <ImageMap
          className="usage-map"
          src={"./siemens.jpg"}
          // map={mapAreaabbot}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "MEDTRONIK" ? (
        <ImageMap
          className="usage-map"
          src={"./medtronik.jpg"}
          // map={mapAreaabbot}
          // onMapClick={onMapClick2}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : phase == "MERCK" ? (
        <ImageMap
          className="usage-map"
          src={"./merck.jpg"}
          // map={mapAreaabbot}
          // onMapClick={onMapClick2}
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
};

export default Colors;
