import { useSelector, useDispatch } from "react-redux";
import React, { lazy, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Input, Form, Select, Radio, Modal, Button, Space, Table } from "antd";
import "antd/dist/antd.css";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
// import "./video-react.css"; // import css
import CIcon from "@coreui/icons-react";
// import { Player, ControlBar } from 'video-react';
import ReactPlayer from "react-player";
import { Image } from "antd";
import { ImageMap } from "@qiuz/react-image-map";
import MainChartExample from "../charts/MainChartExample.js";
import { useHistory } from "react-router-dom";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));
const { TextArea } = Input;

const Dashboard = () => {
  const [anggota, setAnggota] = useState(false);
  const [statusnew, setStatusnew] = useState(false);
  const [file, setFile] = useState("");
  // const [playing,setPlaying] = useState(false);
  const dispatch = useDispatch();
  const [jadwal, setJadwal] = useState("none");
  const [pejet, setPejet] = useState("");
  const [pejet2, setPejet2] = useState("none");
  const [pejet3, setPejet3] = useState("none");
  const [pejet4, setPejet4] = useState("none");
  const [pejet5, setPejet5] = useState("none");
  const [layar1, setLayar1] = useState(0);
  const [layar2, setLayar2] = useState(0);
  const [layar3, setLayar3] = useState(0);
  const [idanggota, setIdanggota] = useState("");
  const [nama, setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota1, setAnggota1] = useState();
  const [paymentstatus, setPaymentstatus] = useState("PAY");
  const [workshopku, setWorkshopku] = useState("");
  const [isLive, setIsLive] = useState(null);
  const [GuestBookModal,setGuestBookModal] = useState(false);
  const [GuestBookModal2,setGuestBookModal2] = useState(false);
  const [GuestBookModal3,setGuestBookModal3] = useState(false);
  const [namacert, setNamaCert] = useState("");
  const [pesanpesan, setPesanpesan] = useState("");
  // const [idanggota, setIdanggota] = useState("");
  const [value1, setValue1] = React.useState(1);
  const [nilai1,setNilai1]=useState("");
  const [nilai1saran,setNilai1saran]=useState("");
  const [nilai2a,setNilai2a]=useState("");
  const [nilai2b,setNilai2b]=useState("");
  const [nilai2c,setNilai2c]=useState("");
  const [nilai3,setNilai3]=useState("");
  const [nilai3saran,setNilai3saran]=useState("");
  const [nilai4,setNilai4]=useState("");
  const [nilai5,setNilai5]=useState("");
  const [datakuis,setDatakuis] = useState([]);
  const [simpo,setSimpo] = useState("");
  const [downloaded,setDownloaded] = useState("");
  let history = useHistory();
  // const vidRef = useRef(null);
  // const handlePlayVideo = () => {
  //   vidRef.current.play();
  // }
  useEffect(() => {
    dispatch({ type: "set", sidebarShow: false });
    const script = document.createElement("script");
    script.src = "/perki.js";
    script.async = true;
    if (localStorage.getItem("status") == "ANGGOTA") {
      setAnggota(true);
    } else setAnggota(false);

    document.body.appendChild(script);

    var idsponsor = localStorage.getItem("loginid");
    setIdsponsor(idsponsor);
    var anggotast = localStorage.getItem("status");
    if (anggotast == "ANGGOTA") {
      setAnggota(true);
    } else setAnggota(false);
    setNama(localStorage.getItem("nama"));

    var mtd2 = "";
    if (anggotast == "ANGGOTA") {
      mtd2 = "ANGGOTA2";
    } else {
      mtd2 = "ANGGOTA";
    }

    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: { mtd: mtd2, idsponsor: idsponsor },
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        var temp1 = data.data[0].paymentstatus;
        // setAnggota1(data.data[0]);
        setPaymentstatus(temp1);
        setStatusnew(data.data[0].statusnew);
        setNamaCert(data.data[0].namacert);
        setPesanpesan(data.data[0].pesanpesan);
        setWorkshopku(data.data[0].workshop);
        setIdanggota(data.data[0].id);
        setSimpo(data.data[0].simposium);
        setDownloaded(data.data[0].downloaded);
        // alert(data.data[0].downloaded);
        // setWorkshopku(data.data[0].workshop);
        axios({
          url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
          // url: "http://localhost/perki/kirimdata.php",
          data: { mtd: "LOADKUESIONER", id: data.data[0].id},
          contentType: "application/json",
          method: "POST",
        })
          .then((data) => {
              console.log(data.data);
              setDatakuis(data.data);
              for (var i=0;i<data.data.length;i++) {
                  console.log(data.data[i].variable);
                  if (data.data[i].variable=="1") {
                    setNilai1(data.data[i].value);
                  }
                  if (data.data[i].variable=="1saran") {
                    setNilai1saran(data.data[i].value);
                  }
                  if (data.data[i].variable=="2a") {
                    setNilai2a(data.data[i].value);
                  }
                  if (data.data[i].variable=="2b") {
                    setNilai2b(data.data[i].value);
                  }
                  if (data.data[i].variable=="2c") {
                    setNilai2c(data.data[i].value);
                  }
                  if (data.data[i].variable=="3") {
                    setNilai3(data.data[i].value);
                  }
                  if (data.data[i].variable=="3saran") {
                    setNilai3saran(data.data[i].value);
                  }
                  if (data.data[i].variable=="4") {
                    setNilai4(data.data[i].value);
                  }
                  if (data.data[i].variable=="5") {
                    setNilai5(data.data[i].value);
                  }
              }

          })
          .catch(() => {
            // console.log("Internal server error");
          });


      })
      .catch(() => {
        // console.log("Internal server error");
      });


  }, []);

  useEffect(() => {
    if (isLive == null) {
      getCurrentLive();
    }
  }, [isLive]);

  const openInNewTab = (url) => {
    window.open(url);
    // const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    // if (newWindow) newWindow.opener = null
  };

  const jadwalku = (value) => {
    setJadwal(value);
  };

  const onClikHall = (area, index: number) => {
    console.log(index);
    if (index == 0) {
      // console.log("exhibition");
      history.push("/theme/exhibition");
    }
    if (index == 1) {
      history.push("/theme/symposium");
      // setGuestBookModal3(true);
    }
    if (index == 2) {
      history.push("/theme/workshop");
    }
    if (index==4) {
      if (downloaded=="OK") {
        setGuestBookModal2(true);
      } else {
        setGuestBookModal(true);
      }
      console.log("true");

    }
  };

  const onClikHallMobile = (area, index: number) => {
    if (index == 0) {
      // history.push("/theme/session");
      setGuestBookModal3(true);

    }
    if (index == 1) {
      history.push("/theme/exhibition");
    }
    if (index == 2) {
      // exit
      history.push("/theme/login");
    }
    if (index == 3) {
      history.push("/theme/workshop");
    }
    if (index == 4) {
      //acount
      history.push("/theme/sponsor");
    }
    if (index == 5) {
      history.push("/theme/symposium");
      // setGuestBookModal3(true);

    }
    if (index == 6) {
      // faq
      history.push("/theme/faq");
    }
    if (index == 7) {
      // wa
      openInNewTab("https://wa.me/6282232683785");
    }
    if (index == 8) {
      history.push("/lifeTimeAchievementAward");
    }
    if (index == 9) {
      history.push("/oralPresentation");
    }
    if (index == 10) {
      history.push("/e-Poster");
    }
    // console.log(index);
    if (index == 11) {
      // history.push("/e-Poster");
      if (downloaded=="OK") {
        setGuestBookModal2(true);
      } else {
        setGuestBookModal(true);
      }

    }
  };

  const onClikMenu = (area, index: number) => {
    if (index == 1) {
      setPejet("SESSION");
      // history.push("/theme/session");
      setGuestBookModal3(true);

    }
    if (index == 2) {
      setPejet("EXHIBITION");
      history.push("/theme/exhibition");
    }
    if (index == 3) {
      setPejet("EXIT");
      history.push("/theme/login");
      window.location.href = "https://acsasurabaya2021.com/ "
    }
    if (index == 4) {
      setPejet("SYMPOSIUM");
      history.push("/theme/symposium");
      // setGuestBookModal3(true);
    }
    if (index == 5) {
      setPejet("ACCOUNT");
      // console.log("akun");
      history.push("/theme/sponsor");
    }
    if (index == 6) {
      setPejet("WORKSHOP");
      history.push("/theme/workshop");
    }
    if (index == 7) {
      setPejet("LIFE");
      history.push("/lifeTimeAchievementAward");
    }
    if (index == 8) {
      setPejet("ORAL");
      history.push("/oralPresentation");
    }

    if (index == 9) {
      setPejet("E_POSTER");
      history.push("/e-Poster");
    }
  };

  const onClikFaq = (area, index: number) => {
    if (index == 0) {
      history.push("/theme/faq");
    }
  };

  const onClikWa = (area, index: number) => {
    if (index == 0) {
      openInNewTab("https://wa.me/6282232683785");
    }
  };


  const onClikdownload = (area, index: number) => {
    console.log(index);

    if (index == 0) {
      console.log("donwload");
      // openInNewTab("https://wa.me/6282232683785");
    }
  };

  function getCurrentLive() {
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getCurrentRun`)
      .then((res) => {
        // console.log(res);
        setIsLive(res.data.isLive);
        // return res.data.isLive;
      });
  }

  const onChange1 = e => {
    console.log('radio checked', e.target.value);
    setNilai1(e.target.value);
  };

  const mapAreamobile: any[] = [
    //0
    {
      left: "-3.5%",
      top: "18%",
      height: "18%",
      width: "53%",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <img
          src="./new.gif"
          width="100%"
          style={{
            position: "absolute",
            width: "43px",
            top: "10px",
            right: "20px",
            display: "block",
          }}
        />
      ),
    },
    //1
    {
      left: "-2.5%",
      top: "37%",
      height: "17.8%",
      width: "52%",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //2
    {
      left: "93.5%",
      top: "73.8%",
      height: "26%",
      width: "10%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //3
    {
      left: "-2.5%",
      top: "74%",
      height: "18%",
      width: "52%",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //4
    {
      left: "50.5%",
      top: "55%",
      height: "18%",
      width: "52%",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //5
    {
      left: "-2.5%",
      top: "55.4%",
      height: "18%",
      width: "52%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "0" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <img
          src="./vod.gif"
          width="100%"
          style={{
            position: "absolute",
            width: "43px",
            top: "10px",
            right: "20px",
            display: "block",
          }}
        />
      ),
    },
    //6
    {
      left: "81.5%",
      top: "74%",
      height: "26%",
      width: "11%",
      style: { background: "rgba(255, 0, 0, 0)", zIndex: "5" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //7
    {
      left: "70.5%",
      top: "74%",
      height: "26%",
      width: "10%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0)", zIndex: "2" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //8
    {
      left: "50.5%",
      top: "0%",
      height: "17%",
      width: "52%",
      style: { background: "rgba(255, 0, 0, 0)", zIndex: "2" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //9
    {
      left: "50.5%",
      top: "18%",
      height: "17%",
      width: "52%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0)", zIndex: "2" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    //10
    {
      left: "50.5%",
      top: "34%",
      height: "17%",
      width: "52%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.0)", zIndex: "2" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
    {
      left: "61.5%",
      top: "84%",
      height: "5%",
      width: "5%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0)", zIndex: "2" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => <span></span>,
    },
  ];

  const mapAreaHall: any[] = [
    //0
    //exhibition
    {
      width: "8.9%",
      height: "15.5%",
      left: "27.4%",
      top: "32.8%",
      style: {
        background: "rgba(0, 0, 255, " + layar1 + ")",
        transform: "rotate(2deg)",
        zIndex: "8",
        display: "block",
        cursor: "pointer",
      },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
        setLayar3(0);
      },
      render: (area: any, index: number) => <span></span>,
    },
    //1
    //simposium
    {
      width: "10.7%",
      height: "15.5%",
      left: "44.7%",
      top: "32.5%",
      style: {
        background: "rgba(0, 0, 255, " + layar2 + ")",
        zIndex: "8",
        display: "block",
        cursor: "pointer",
      },
      onMouseOver: () => {
        setLayar2(0.3);
        setLayar3(0);
        setLayar1(0);
      },
      render: (area: any, index: number) => <span></span>,
    },
    //2
    //workshop
    {
      width: "9%",
      height: "16%",
      left: "63.7%",
      top: "32.8%",
      style: {
        transform: "rotate(-2deg)",
        cursor: "pointer",
        background: "rgba(0, 0, 255, " + layar3 + ")",
        zIndex: "8",
        display: "block",
      },
      onMouseOver: () => {
        setLayar3(0.3);
        setLayar2(0);
        setLayar1(0);
      },
      render: (area: any, index: number) => <span></span>,
    },
    //3
    {
      width: "14.1%",
      height: "20.5%",
      left: "43%",
      top: "1.2%",
      style: {
        background: "rgba(0, 0, 255, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      //      href: "https://google.com",
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
          <ReactPlayer
            className="react-player"
            url="https://acsasurabaya2021.com/wp-content/uploads/2021/10/movie.mp4"
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
      width: "6%",
      height: "11%",
      left: "10.7%",
      top: "85.8%",
      style: {
        transform: "rotate(-2deg)",
        cursor: "pointer",
        background: "rgba(255, 0, 255, 0)",
        zIndex: "8",
        display: "block",
      },
      onMouseOver: () => {
        // setLayar3(0.3);
        // setLayar2(0);
        // setLayar1(0);
      },
      render: (area: any, index: number) => <span></span>,
    },
  ];

  const mapAreaMenu: any[] = [
    //0
    {
      left: "14%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: { background: "rgba(0, 255, 0, 0)", zIndex: "0" },
      onMouseOver: () => setPejet("LOBBY"),
      render: (area: any, index: number) => (
        <span>
          {/* {pejet == "LOBBY" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Lobby_Select.png"
              width="100%"
            />
          ) : null} */}
        </span>
      ),
    },
    //1
    {
      left: "17.55%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(255, 0, 0, 0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("SESSION"),
      render: (area: any, index: number) => (
        <span>
          <img
            src="./new.gif"
            width="100%"
            style={{
              position: "absolute",
              width: "43px",
              marginTop: "9px",
              marginLeft: "24px",
              display: "block",
            }}
          />
          {pejet == "SESSION" ? (
            <>
              <img
                src="https://acsasurabaya2021.com/wp-content/plugins/perki/Session_Select.png"
                width="100%"
              />
            </>
          ) : null}
        </span>
      ),
    },
    //2
    {
      left: "24.8%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("EXHIBITION"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "EXHIBITION" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Exhibition_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //3
    {
      left: "75.3%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("EXIT"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "EXIT" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Exit_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //4
    {
      left: "32.0%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("SYMPOSIUM"),
      render: (area: any, index: number) => (
        <span>
          <img
            src="./vod.gif"
            width="100%"
            style={{
              position: "absolute",
              width: "43px",
              marginTop: "9px",
              marginLeft: "24px",
              display: "block",
            }}
          />
          {pejet == "SYMPOSIUM" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Symposium_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //5
    {
      left: "68.1%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(255, 0, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("ACCOUNT"),
      render: (area, index) => (
        <span>
          {pejet == "ACCOUNT" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Account_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //6
    {
      left: "39.1%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(0, 255, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("WORKSHOP"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "WORKSHOP" ? (
            <img
              src="https://acsasurabaya2021.com/wp-content/plugins/perki/Workshop_Select.png"
              width="100%"
            />
          ) : null}
        </span>
      ),
    },
    //7
    {
      left: "46.4%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(0, 255, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("LIFE"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "LIFE" ? (
            <img src="./00_BUTTON/Lifetime_Select.png" width="100%" />
          ) : null}
        </span>
      ),
    },
    //8
    {
      left: "53.72%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(0, 255, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("ORAL"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "ORAL" ? (
            <img src="./00_BUTTON/Oral_Select.png" width="100%" />
          ) : null}
        </span>
      ),
    },
    //9
    {
      left: "60.9%",
      top: "-99px",
      height: "100%",
      width: "7.1%",
      style: {
        background: "rgba(0, 255, 0, 0.0)",
        zIndex: "8",
        cursor: "pointer",
      },
      onMouseOver: () => setPejet("E_POSTER"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "E_POSTER" ? (
            <img src="./00_BUTTON/Eposter_Select.png" width="100%" />
          ) : null}
        </span>
      ),
    },
  ];

  const mapAreaWa: any[] = [
    //0
    {
      width: "6%",
      height: "100%",
      left: "4.5%",
      top: "-186px",
      style: { background: "rgba(0, 255, 0, 0)", zIndex: "8" },
      onMouseOver: () => setPejet("WA"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "WA" ? (
            <img src="./00_BUTTON/WA_Select.png" width="100%" />
          ) : null}
        </span>
      ),
    },
  ];


  // const mapAreadownload: any[] = [
  //   //0
  //   {
  //     width: "100%",
  //     height: "100%",
  //     left: "6.5%",
  //     top: "0px",
  //     style: { background: "rgba(255, 255, 0, 0.4)", zIndex: "8" },
  //     onMouseOver: () => setPejet("WA"),
  //     render: (area: any, index: number) => (
  //       <span>
  //         {/* {pejet == "WA" ? (
  //           <img src="./00_BUTTON/WA_Select.png" width="100%" />
  //         ) : null} */}
  //       </span>
  //     ),
  //   },
  // ];


  const mapAreaFAQ: any[] = [
    //0
    {
      width: "6%",
      height: "91%",
      left: "87.5%",
      top: "-252px",
      style: { background: "rgba(0, 255, 0, 0)", zIndex: "8" },
      onMouseOver: () => setPejet("FAQ"),
      render: (area: any, index: number) => (
        <span>
          {pejet == "FAQ" ? (
            <img src="./00_BUTTON/FAQ_Select.png" width="100%" />
          ) : null}
        </span>
      ),
    },
  ];

  const handleOk = () => {
    setGuestBookModal(false);
    setGuestBookModal2(true);
    // }

    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: { mtd: "SIMPANKUESIONER", id: idanggota, namacert:namacert,nilai1:nilai1,nilai1saran:nilai1saran,nilai2a:nilai2a,nilai2b:nilai2b,nilai2c:nilai2c,nilai3:nilai3,nilai3saran:nilai3saran,nilai4:nilai4,nilai5:nilai5},
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        // var temp1 = data.data[0].paymentstatus;
        // setAnggota1(data.data[0]);
      })
      .catch(() => {
        // console.log("Internal server error");
      });

  };
  const handleOk2 = () => {
    setGuestBookModal2(false);
    // setGuestBookModal(false);
    // axios.get('https://acsasurabaya2021.com/wp-content/plugins/perki/certificate.php?id='+idanggota);
  };

  const downloadcert = () => {
//    alert("Silakan tunggu proses download");
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: { mtd: "DOWNLOADED", id: idanggota},
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        // var temp1 = data.data[0].paymentstatus;
        // setAnggota1(data.data[0]);
      })
      .catch(() => {
        // console.log("Internal server error");
      });


  }

  return (
    <>
      <div>

        {(anggota && paymentstatus == "PAY") || (anggota && statusnew == "OK")  ? (
          <div>
            <div
              class="visibledesktop"
              style={{ height: "93vh", overflow: "hidden", marginTop: "-32px" }}
            >
              <ImageMap
                className="usage-map"
                src={"./New Img/Hall_rev 1280x620 (1).png"}
                map={mapAreaHall}
                style={{
                  width: "92%",
                  position: "relative",
                  left: "50%",
                  zIndex: 1,
                  transform: "translate(-50%, 1px)",
                }}
                onMapClick={onClikHall}
              />
              <ImageMap
                className="usage-map"
                src={"./00_BUTTON/MAIN_BUTTON copy.png"}
                map={mapAreaMenu}
                style={{
                  width: "65%",
                  position: "relative",
                  left: "50%",
                  zIndex: 1,
                  transform: "translate(-50%, -99px)",
                }}
                onMapClick={onClikMenu}
              />
              <ImageMap
                className="usage-map"
                src={"./00_BUTTON/download2.png"}
                map={mapAreaHall}
                style={{
                  width: "6%",
                  position: "absolute",
                  left: "10.5%",
                  bottom: "110px",
                  zIndex: 1,
                }}
                onMapClick={onClikHall}
              />
              <ImageMap
                className="usage-map"
                src={"./00_BUTTON/WA_Button.png"}
                map={mapAreaWa}
                style={{
                  width: "6%",
                  position: "relative",
                  left: "4.5%",
                  bottom: "186px",
                  zIndex: 1,
                }}
                onMapClick={onClikWa}
              />
              <ImageMap
                className="usage-map"
                src={"./00_BUTTON/FAQ_Button.png"}
                map={mapAreaFAQ}
                style={{
                  width: "6%",
                  position: "relative",
                  left: "87.5%",
                  bottom: "252px",
                  zIndex: 1,
                }}
                onMapClick={onClikFaq}
              />
            </div>
            <div class="visibledevice">
              <ImageMap
                className="usage-map"
                src={"./New Img/Hall_rev 1280x620 (1).png"}
                style={{
                  width: "100%",
                  position: "relative",
                  marginTop: "-30px",
                }}
                onMapClick={onClikHall}
              />
              <ImageMap
                className="usage-map"
                src={"./MOBILE BUTTON/Mobile Button copy2.png"}
                map={mapAreamobile}
                style={{
                  width: "143%",
                  position: "relative",
                  left: "-21.5%",
                  marginTop: "-33px",
                }}
                onMapClick={onClikHallMobile}
              />
            </div>
          </div>
        ) : anggota && paymentstatus != "PAY" ? (
          <div style={{ fontSize: "25px", marginLeft: "15px" }}>
            Mohon klik{" "}
            <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor">
              di sini
            </a>{" "}
            - Next - Pay untuk melakukan pembayaran untuk mengaktifkan akun.
            Klik{" "}
            <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/login">
              di sini
            </a>{" "}
            untuk exit.{" "}
          </div>
        ) : !anggota ? (
          <div style={{ fontSize: "25px", marginLeft: "15px" }}>
            Mohon klik{" "}
            <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor">
              di sini
            </a>{" "}
            untuk menambah anggota. Klik{" "}
            <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/login">
              di sini
            </a>{" "}
            untuk exit.
          </div>
        ) : null}

      <Modal title={"Data Peserta"+downloaded} visible={GuestBookModal} onOk={(handleOk)} width={"80%"} onCancel={() => setGuestBookModal(false)}>
          <div class="labeldaninput">
            <div class="labelatas">Nama (sesuai cert)</div>
            <Input placeholder="Nama sesuai cert" value={namacert} style={{width:"95%"}} onChange={(e)=>setNamaCert(e.target.value)}/>
          </div>
          <div class="labeldaninput">
            <div class="labelatas">Bagaimana anda menilai ketepatan waktu symposium secara keseluruhan ?</div>
            {/* <Input placeholder="Pesan pesan" value={pesanpesan}  style={{width:"400px"}}/> */}
            {/* <TextArea rows={4} value={pesanpesan} onChange={(e)=>setPesanpesan(e.target.value)} style={{width:"400px"}} /> */}
            <Radio.Group onChange={onChange1} value={nilai1}>

                <div><Radio value="Buruk">Buruk</Radio></div>
                <div><Radio value="Kurang">Kurang</Radio></div>
                <div><Radio value="Cukup">Cukup</Radio></div>
                <div><Radio value="Baik">Baik</Radio></div>
                <div><Radio value="Sangat Baik">Sangat Baik</Radio></div>
            </Radio.Group>
            <div>-Saran</div>
            <Input style={{width:"95%"}} value={nilai1saran} onChange={(e)=>setNilai1saran(e.target.value)}/>
          </div>
          <div class="labeldaninput">
            <div class="labelatas">Bagaimana anda menilai topic symposium ini secara keseluruhan ?</div>
            {/* <Input placeholder="Pesan pesan" value={pesanpesan}  style={{width:"400px"}}/> */}
            {/* <TextArea rows={4} value={pesanpesan} onChange={(e)=>setPesanpesan(e.target.value)} style={{width:"400px"}} /> */}
            <div>-Edukatif</div>
            <Radio.Group onChange={(e)=>setNilai2a(e.target.value)} value={nilai2a}>

                <div><Radio value="Buruk">Buruk</Radio></div>
                <div><Radio value="Kurang">Kurang</Radio></div>
                <div><Radio value="Cukup">Cukup</Radio></div>
                <div><Radio value="Baik">Baik</Radio></div>
                <div><Radio value="Sangat Baik">Sangat Baik</Radio></div>
            </Radio.Group>
            <div>-Bermanfaat</div>
            <Radio.Group onChange={(e)=>setNilai2b(e.target.value)} value={nilai2b}>

                <div><Radio value="Buruk">Buruk</Radio></div>
                <div><Radio value="Kurang">Kurang</Radio></div>
                <div><Radio value="Cukup">Cukup</Radio></div>
                <div><Radio value="Baik">Baik</Radio></div>
                <div><Radio value="Sangat Baik">Sangat Baik</Radio></div>
            </Radio.Group>
            <div>-Menarik</div>
            <Radio.Group onChange={(e)=>setNilai2c(e.target.value)} value={nilai2c}>

                <div><Radio value="Buruk">Buruk</Radio></div>
                <div><Radio value="Kurang">Kurang</Radio></div>
                <div><Radio value="Cukup">Cukup</Radio></div>
                <div><Radio value="Baik">Baik</Radio></div>
                <div><Radio value="Sangat Baik">Sangat Baik</Radio></div>
            </Radio.Group>
          </div>
          <div class="labeldaninput">
            <div class="labelatas">Bagaimana anda menilai alur registrasi pada symposium ini ?</div>
            {/* <Input placeholder="Pesan pesan" value={pesanpesan}  style={{width:"400px"}}/> */}
            {/* <TextArea rows={4} value={pesanpesan} onChange={(e)=>setPesanpesan(e.target.value)} style={{width:"400px"}} /> */}
            <div>-Nilai</div>
            <Radio.Group onChange={(e)=>setNilai3(e.target.value)} value={nilai3}>

                <div><Radio value="Buruk">Buruk</Radio></div>
                <div><Radio value="Kurang">Kurang</Radio></div>
                <div><Radio value="Cukup">Cukup</Radio></div>
                <div><Radio value="Baik">Baik</Radio></div>
                <div><Radio value="Sangat Baik">Sangat Baik</Radio></div>
            </Radio.Group>
            <div>-Saran</div>
            <Input style={{width:"95%"}} value={nilai3saran} onChange={(e)=>setNilai3saran(e.target.value)}/>
          </div>
          <div class="labeldaninput">
            <div class="labelatas">Siapakah pembawa materi yang paling anda sukai?</div>
            {/* <Input placeholder="Pesan pesan" value={pesanpesan}  style={{width:"400px"}}/> */}
            {/* <TextArea rows={4} value={pesanpesan} onChange={(e)=>setPesanpesan(e.target.value)} style={{width:"400px"}} /> */}
            <Input style={{width:"95%"}} value={nilai4} onChange={(e)=>setNilai4(e.target.value)}/>
          </div>
          <div class="labeldaninput">
            <div class="labelatas">Materi apa yang anda harapkan dapat kami tampilkan pada simposium tahun depan ?</div>
            {/* <Input placeholder="Pesan pesan" value={pesanpesan}  style={{width:"400px"}}/> */}
            {/* <TextArea rows={4} value={pesanpesan} onChange={(e)=>setPesanpesan(e.target.value)} style={{width:"400px"}} /> */}
            <Input style={{width:"95%"}} value={nilai5} onChange={(e)=>setNilai5(e.target.value)}/>
          </div>
      </Modal>
      <Modal width={"80%"} title="Data Download Materi Proceeding" visible={GuestBookModal3} onCancel={() => setGuestBookModal3(false)} footer={null}>
        <div class="labeldaninput">
         Silakan download Materi Proceeding
         </div>
          <div class="labeldaninput">
          <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate3.php"}><Button type="primary" >Download Materi Proceeding</Button></a>

        </div>

      </Modal>
      <Modal width={"80%"} title="Data Download Sertifikat" visible={GuestBookModal2} onCancel={() => setGuestBookModal2(false)} footer={null}>
        <div class="labeldaninput">
         Silakan download semua certifikat pada kesempatan pertama
         </div>
          {simpo.length>0 ?
          <div class="labeldaninput">
          <div class="labelatas">Simposium Cardiovascular Care Advancement Reshaping and Evolving Throughout Pandemic and Beyond</div>
          <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=simpo1&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download Simpo 1 (jpg)</Button></a> <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=simpo2&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download Simpo 2 (jpg)</Button></a>

        </div>:null
        }
          {workshopku.indexOf("WS 1 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=1&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 1 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 2 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 2 (Perioperative Cardiac Consultation)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=2&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 2 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 3 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 3 (Stay Fit Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=3&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 3 (jpg)</Button></a>
          </div> :null }
          {workshopku.indexOf("WS 4 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 4 (Cardiac Injury in Chemotherapy Patient)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=4&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 4 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 5 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 5 (AF Management in the ER Consultant Cardiologist do their jobs)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=5&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 5 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 6 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=6&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 6 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 7 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 7 (Comprehensive CV Risk Stratification)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=7&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 7 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 8 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 8 (Practical approach to non-invasive ventilation in acute heart failure)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=8&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 8 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 9 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 9 (Practical Approach in Emergency Arrythmias)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=9&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 9 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 10 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=10&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 10 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 11 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 11 (Rapid Echocardiography in Emergency Setting)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=11&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 11 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 12 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=12&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 12 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 13 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 13 (Advanced in Diagnosing Acute Heart Failure)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=13&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 13 (jpg)</Button></a>
          </div> : null }
          {workshopku.indexOf("WS 14 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=14&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 14 (jpg)</Button></a>
          </div>:null}
          {workshopku.indexOf("WS 15 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 15 (Cardiomyopathy Evaluation by Cardiac MR)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=15&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 15 (jpg)</Button></a>
          </div>:null}
          {workshopku.indexOf("WS 16 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 16 (Cardiac CT in Coronary Artery and Beyond)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=16&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 16 (jpg)</Button></a>
          </div>:null}
          {workshopku.indexOf("WS Indovasc 1 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS Indovasc 1 (Early Detection of Chronic Venous Insufficiency)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=17&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 17 (jpg)</Button></a>
          </div> : null}
          {workshopku.indexOf("WS Indovasc 2 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS Indovasc 2 (Vascular Doppler US)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=18&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 18 (jpg)</Button></a>
          </div>:null}
          {workshopku.indexOf("WS Indovasc 3 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=19&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 19 (jpg)</Button></a>
          </div>:null}
          {workshopku.indexOf("WS 20 ") > -1 ?
          <div class="labeldaninput">
            <div class="labelatas">WS 20 (Physiology Assessment and Intravascular Imaging (OCT) in Coronary Intervention)</div>
            <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate2.php?ws=20&id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download WS 20 (jpg)</Button></a>
          </div>:null}

          <div class="labeldaninput">
              <a href={"https://acsasurabaya2021.com/wp-content/plugins/perki/certificate.php?id="+idanggota}><Button type="primary" onClick={()=>downloadcert()}>Download Semua (zip)</Button></a>
          </div>

      </Modal>
      {/* <Modal
        title={`Guest Book`}
        width={"80%"}
        visible={true}
        onCancel={() => setGuestBookModal(false)}
        footer={[
          <Button key="back" onClick={() => setGuestBookModal(false)}>
            Close
          </Button>,
        ]}
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="labeldaninput">
            <div class="labelatas" style={{display:"flex"}}>Nama (sesuai cert)</div>
            <Input placeholder="Nama sesuai cert" value={namacert}/>
          </div>
          <div class="labeldaninput">
            <div class="labelatas" style={{display:"flex"}}>Pesan - pesan</div>
            <Input placeholder="Pesan pesan" value={pesanpesan}/>
          </div>

          </div>
        </div>
      </Modal> */}

      </div>
    </>
  );
};

export default Dashboard;
