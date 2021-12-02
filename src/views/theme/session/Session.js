import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import axios from "axios";
import DateCountdown from "react-date-countdown-timer";
import Countdown from "react-countdown";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CSpinner,
  CCardBody,
  CModal,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import { rgbToHex } from "@coreui/utils";
import { DocsLink } from "src/reusable";
import { Stepper } from "react-form-stepper";
import { Modal, DatePicker, Input, Form, Radio, Select, Button } from "antd";
import "antd/dist/antd.css";
import { mixed } from "yup/lib/locale";
import { useHistory } from "react-router-dom";
import generator from "generate-password";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { confirm } = Modal;
const FormItem = Form.Item;
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const rowsColor = "#0075BC";
const headerColor = "#0075BC";
const borderColor = "#0075BC";

const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

const ThemeView = () => {
  const [color, setColor] = useState("rgb(255, 255, 255)");
  const ref = createRef();

  useEffect(() => {
    const el = ref.current.parentNode.firstChild;
    const varColor = window
      .getComputedStyle(el)
      .getPropertyValue("background-color");
    setColor(varColor);
  }, [ref]);

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr style={{ border: "none" }}>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr style={{ border: "none" }}>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  );
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, "theme-color w-75 rounded mb-3");
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{ paddingTop: "75%" }}></div>
      {children}
      <ThemeView />
    </CCol>
  );
};

const Colors = () => {
  const [step, setStep] = useState("Step1");
  const [propinsiselect, setPropinsiselect] = useState("Jawa Timur");
  const [kotaselect, setKotaselect] = useState("Surabaya");
  const [professionselect, setProfessionselect] = useState("Cardiologist");
  const [packageselect, setPackageselect] = useState("");
  const [hargatambahan, setHargatambahan] = useState("");
  const [hargatotal, setHargatotal] = useState("");
  const [hargapromo, setHargapromo] = useState(0);
  const [hargagrandtotal, setHargagrandtotal] = useState("");
  const [hargaservice, setHargaservice] = useState("");
  // const [hargatotal,setHargatotal] = useState('');
  const [macamworkshop, setMacamworkshop] = useState([]);
  const [jumlahworkshop, setJumlahworkshop] = useState(0);
  const [hargaworkshop, setHargaworkshop] = useState("500000");
  const [jumlahworkshopdipilih, setJumlahworkshopdipilih] = useState(0);
  const [pilih, setPilih] = useState(0);
  const [pilih2, setPilih2] = useState(0);
  const [kodevoucher, setKodevoucher] = useState("");
  const [myform, setMyform] = useState({
    firstname: "",
    lastname: "",
    fullname: "",
    gender: "",
    pob: "",
    dob: "",
    county: "Indonesia",
    province: "Jawa Timur",
    city: "Surabaya",
    email: "",
    emailconfirm: "",
    password: "",
    mobile: "",
    affliliation: "",
    officeph: "",
  });
  let history = useHistory();
  const [disable, setDisable] = useState(false);
  const [simposium, setSimposium] = useState("");
  const [idanggota, setIdanggota] = useState("");
  const [nama, setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota, setAnggota] = useState("");
  const [workshopku, setWorkshopku] = useState("");
  const [wsUser, setWsUser] = useState("");
  const [ws, setWs] = useState("-");
  const [sympo, setSympo] = useState("-");
  const [hari, setHari] = useState("PERTAMA");
  const [visible, setVisible] = useState(false);
  const [dataWs, setDataWs] = useState({});
  const [hasFetch, setHasFetch] = useState(true);
  const [dataSympo, setDataSympo] = useState({});

  useEffect(() => {
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
      data: { mtd: mtd2, idsponsor: idsponsor },
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        setAnggota(data.data[0]);
        if (data.data[0].simposium != "") {
          getActiveEventSympo();
        }
        if (data.data[0].workshop != "") {
          getActiveEventWs(data.data[0].workshop);
          setWsUser(data.data[0].workshop);
        }
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);

  const WacthZoom = (meetingId, passcode = null, type = null) => {
    if (meetingId == "" || passcode == "") {
      alert("This feature is not active");
    } else {
      if (type == "sympo") {
        localStorage.setItem("meetingid", meetingId);
        localStorage.setItem("passcode", passcode);
        localStorage.setItem("type", "sympo");
        history.push("/livestream");
      } else {
        if (passcode != null) {
          passcode = "?pwd=" + passcode;
        } else {
          passcode = "";
        }
        window.open(`https://us04web.zoom.us/j/${meetingId}${passcode}`);
      }
    }
  };

  const getActiveEventSympo = () => {
    setVisible(!visible);
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getActiveSympo`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 1) {
          setDataSympo(res.data.data);
          setSympo("sympo");
        }else{
          setDataSympo([])
        }
      })
      .catch((err) => console.log(err));
  };

  const getActiveEventWs = (wsUserParam) => {
    setVisible(!visible);
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getActiveWs`)
      .then((res) => {
        console.log(res);
        let dataWsNew = "";
        if (res.data.data.length != 0) {
          res.data.data.forEach((row) => {
            if (wsUserParam.indexOf(row.data + " ") > -1) {
              if (hasFetch) {
                setHasFetch(false);
                if (row.type == "acsa") {
                  changeDataWS(row.no);
                } else {
                  changeDataIndoWS(row.no);
                }
              }
              dataWsNew += row.data + " ";
            }
          });
        }
        setWorkshopku(dataWsNew);
      })
      .catch((err) => console.log(err));
  };

  const changeDataWS = (noUrut) => {
    setVisible(!visible);
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getwsdetil&noUrut=" +
          noUrut
      )
      .then((res) => {
        // console.log(res);
        setVisible(!visible);
        if (
          res.data.status == 0 &&
          res.data.master == null &&
          res.data.master == []
        ) {
          alert("Mohon Hubungi Admin");
        } else {
          setDataWs(res.data);
          setWs("ws");
        }
      })
      .catch((err) => console.log(err));
  };

  const changeDataIndoWS = (noUrut) => {
    setVisible(!visible);
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getwsvasculardetil&noUrut=" +
          noUrut
      )
      .then((res) => {
        // console.log(res);
        setVisible(!visible);
        if (
          res.data.status == 0 &&
          res.data.master == null &&
          res.data.master == []
        ) {
          alert("Mohon Hubungi Admin");
        } else {
          setDataWs(res.data);
          setWs("wsIndo");
        }
      })
      .catch((err) => console.log(err));
  };

  const parseDate = (date) => {
    let isValidDate = Date.parse(date);
    let dateArticle = new Intl.DateTimeFormat("en", { month: "long" });
    if (isNaN(isValidDate)) {
      return "-";
    } else {
      if(isSafari){
        return (
          Date.parse(date).getDate() +
          " " +
          dateArticle.format(Date.parse(date)) +
          " " +
          Date.parse(date).getFullYear()
        );
      }else{
        return (
          new Date(date).getDate() +
          " " +
          dateArticle.format(new Date(date)) +
          " " +
          new Date(date).getFullYear()
        );
      }
    }
  };

  const getTime = (timeDa) => {
    let today = new Date(timeDa);
    // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let date = "";
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    return dateTime;
  };

  const getDate = (date) => {
    if(isSafari){
      return Date.parse(date);
    }else{
      return new Date(date);
    }
  }

  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CSpinner color="primary" />
      </CModal>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">Session</span>
          <img
            src="https://acsasurabaya2021.com/wp-content/plugins/perki/register.png"
            className="visible-desktop"
            width="300"
            style={{
              float: "right",
              position: "relative",
              right: "-20px",
              width: "250px",
            }}
          />
        </CCardHeader>
        <CCardBody>
          <CRow
            style={{ marginTop: "30px" }}
            className="justify-content-center"
          >
            {sympo == "sympo" ? (
              <>
                <h2
                  style={{
                    margin: "0 auto",
                    position: "relative",
                    width: "97%",
                    marginBottom: "25px",
                    color: "#4e4e4e",
                  }}
                >
                  {`DAY-${dataSympo[0].serial_number} : ${
                    dataSympo[0].day
                  }, ${parseDate(dataSympo[0].date)}`}
                </h2>
                <h5
                  style={{
                    margin: "0 auto",
                    position: "relative",
                    width: "97%",
                    marginBottom: "25px",
                    color: "#4e4e4e",
                  }}
                >
                  (Symposium)
                </h5>
                {dataSympo.map((s, index1) => {
                  return (
                    <div
                      key={index1}
                      className={`col-lg-${
                        dataSympo.length == 1
                          ? "12"
                          : dataSympo.length == 2
                          ? "6"
                          : dataSympo.length == 3
                          ? "4"
                          : dataSympo.length > 3
                          ? "3"
                          : "12"
                      } col-md-${
                        dataSympo.length == 1
                          ? "12"
                          : dataSympo.length > 1 && dataSympo.length <= 3
                          ? "4"
                          : dataSympo.length > 3
                          ? "3"
                          : "12"
                      } col-sm-12 col-xs-12`}
                    >
                      <h4
                        style={{
                          color: "#4e4e4e",
                          margin: "0 auto 15px",
                          position: "relative",
                          width: "99%",
                        }}
                      >{`Ballroom ${index1 + 1}`}</h4>
                      <div
                        className="card card-body shadow border"
                        layout="1-column-left"
                        style={{ height: "222px" }}
                      >
                        {s.detil.map((row, index2) => {
                          return (
                            <>
                              {row.status == "Active" ? (
                                <>
                                  <h5>{row.topic}</h5>
                                  <p>
                                    Chairman: {row.chairman ?? "tba"} <br />{" "}
                                    Panelist: {row.panelist ?? "tba"}
                                    <br />
                                    Time: {getTime(row.time_launching) ?? "tba"}
                                    <br />
                                    <b>Coming Up In</b> : <br />
                                    <Countdown
                                      date={getDate(row.time_launching)}
                                    />
                                  </p>
                                  {row.zoom_room_id ||
                                  (row.zoom_room_id && row.passcode) ? (
                                    <Button
                                      type="primary"
                                      style={{
                                        borderRadius: "10px",
                                        background: "#2a3d9f",
                                        position: "absolute",
                                        right: "15px",
                                        bottom: "16px",
                                        color: "#fff",
                                        display:
                                          row.status == "Active"
                                            ? "block"
                                            : "none",
                                      }}
                                      onClick={() => {
                                        WacthZoom(
                                          row.zoom_room_id,
                                          row.passcode,
                                          "sympo"
                                        );
                                      }}
                                    >
                                      Watch Now
                                    </Button>
                                  ) : null}
                                </>
                              ) : (
                                <>
                                  {index2 == 0 && s.length == 1 ? (
                                    <h5 align="center">
                                      This event is not Active
                                    </h5>
                                  ) : null}
                                </>
                              )}
                            </>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {dataSympo.length == 0 ? (
                  <>
                    <h5
                      style={{
                        margin: "0 auto",
                        position: "relative",
                        width: "97%",
                        marginBottom: "25px",
                        color: "#4e4e4e",
                      }}
                    >
                      (Symposium)
                    </h5>
                    <p style={{ width: "97%", margin: "0px auto 25px" }}>
                      No Symposium live today
                    </p>
                  </>
                ) : null}
              </>
            )}
          </CRow>
          <CRow>
            {workshopku.length != 0 ? (
              <>
                <h5
                  style={{
                    margin: "0px auto",
                    position: "relative",
                    marginBottom: "25px",
                    width: "97%",
                    color: "#4e4e4e",
                  }}
                >
                  (Workshop)
                </h5>
                <p style={{ width: "97%", margin: "0px auto 0px" }}>
                  Click the button below to view the workshop
                </p>
              </>
            ) : (
              <>
                {workshopku.length == 0 ? (
                  <>
                    <h5
                      style={{
                        margin: "0px auto 0",
                        marginBottom: "25px",
                        position: "relative",
                        width: "97%",
                        color: "#4e4e4e",
                      }}
                    >
                      (Workshop)
                    </h5>
                    <p style={{ width: "97%", margin: "0px auto 0px" }}>
                      No Workshop live today
                    </p>
                  </>
                ) : null}
              </>
            )}
            <div className="col-lg-12 col-md-12 col-sm-12">
              {workshopku.indexOf("WS 1 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("1");
                    changeDataWS(1);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 1
                </Button>
              ) : null}
              {workshopku.indexOf("WS 2 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("2");
                    changeDataWS(2);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 2
                </Button>
              ) : null}
              {workshopku.indexOf("WS 3 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("3");
                    changeDataWS(3);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 3
                </Button>
              ) : null}
              {workshopku.indexOf("WS 4 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("4");
                    changeDataWS(4);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 4
                </Button>
              ) : null}
              {workshopku.indexOf("WS 5 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("5");
                    changeDataWS(5);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 5
                </Button>
              ) : null}
              {workshopku.indexOf("WS 6 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("6");
                    changeDataWS(6);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 6
                </Button>
              ) : null}
              {workshopku.indexOf("WS 7 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("7");
                    changeDataWS(7);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 7
                </Button>
              ) : null}
              {workshopku.indexOf("WS 8 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("8");
                    changeDataWS(8);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 8
                </Button>
              ) : null}
              {workshopku.indexOf("WS 9 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("9");
                    changeDataWS(9);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 9
                </Button>
              ) : null}
              {workshopku.indexOf("WS 10 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("10");
                    changeDataWS(10);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 10
                </Button>
              ) : null}
              {workshopku.indexOf("WS 11 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("11");
                    changeDataWS(11);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 11
                </Button>
              ) : null}
              {workshopku.indexOf("WS 12 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("12");
                    changeDataWS(12);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 12
                </Button>
              ) : null}
              {workshopku.indexOf("WS 13 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("13");
                    changeDataWS(13);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 13
                </Button>
              ) : null}
              {workshopku.indexOf("WS 14 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("14");
                    changeDataWS(14);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 14
                </Button>
              ) : null}
              {workshopku.indexOf("WS 15 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("15");
                    changeDataWS(15);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 15
                </Button>
              ) : null}
              {workshopku.indexOf("WS 16 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setWs("16");
                    changeDataWS(16);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  WS 16
                </Button>
              ) : null}
              {workshopku.indexOf("WS Indovasc 1 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => changeDataIndoWS(1)}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  Indovasc WS 1
                </Button>
              ) : null}
              {workshopku.indexOf("WS Indovasc 2 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => changeDataIndoWS(2)}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  Indovasc WS 2
                </Button>
              ) : null}
              {workshopku.indexOf("WS Indovasc 3 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => changeDataIndoWS(3)}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "7px",
                    marginBottom: "5px",
                  }}
                >
                  Indovasc WS 3
                </Button>
              ) : null}
            </div>
          </CRow>
          <CRow
            style={{ marginTop: "30px" }}
            className="justify-content-center"
          >
            {ws == "ws" ? (
              <>
                <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
                  <div className="card" style={{ borderRadius: "10px" }}>
                    <div
                      className="card-header"
                      style={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        margin: "10px auto",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <h4>
                        Workshop {dataWs.master.serial_number}
                        <p style={{ textAlign: "center" }}>

                          {dataWs.master.topic}
                        </p>
                      </h4>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        {dataWs.master.title}
                      </li>
                      <li className="list-group-item">
                        Day,Date : {dataWs.master.day}, {dataWs.master.date}
                      </li>
                      <li className="list-group-item">
                        Course Director : {dataWs.master.course_director}
                      </li>
                      <li className="list-group-item">
                        PIC : {dataWs.master.pic}
                      </li>
                      <li className="list-group-item">
                        Moderator : {dataWs.master.moderator}
                      </li>
                      <li className="list-group-item">
                        Coming Up In :{" "}
                        <Countdown date={getDate(dataWs.master.date)} />
                      </li>
                      <li className="list-group-item text-center">
                        <Button
                          type="primary"
                          style={{
                            borderRadius: "7px",
                            background: "#2a3d9f",
                            color: "#fff",
                            display:
                              dataWs.master.status == "Active"
                                ? "inline-block"
                                : "none",
                          }}
                          onClick={() => {
                            WacthZoom(
                              dataWs.master.zoom_room_id,
                              dataWs.master.passcode,
                              "ws"
                            );
                          }}
                        >
                          Join Now
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : null}
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
