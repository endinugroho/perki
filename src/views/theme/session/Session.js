import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import axios from "axios";
import DateCountdown from "react-date-countdown-timer";
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

// var leaveUrl = "https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/session";
var leaveUrl = "http://localhost:3000/#/theme/session";

const rowsColor = "#0075BC";
const headerColor = "#0075BC";
const borderColor = "#0075BC";

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
  const [ws, setWs] = useState("-");
  const [hari, setHari] = useState("PERTAMA");
  const [visible, setVisible] = useState(false);
  const [dataWs, setDataWs] = useState({});
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
      // url: "http://localhost/perki/kirimdata.php",
      data: { mtd: mtd2, idsponsor: idsponsor },
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        // var temp = data.data;
        setAnggota(data.data[0]);
        if (data.data[0].simposium != "") {
          changeDataSympo(1);
        } else {
          if (data.data[0].workshop != "") {
            // setWs(data.data[0].workshop.substr(3,2).trim());
            if (data.data[0].workshop.indexOf("WS 1 ") > -1) {
              setWs("1");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 2 ") > -1) {
              setWs("2");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 3 ") > -1) {
              setWs("3");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 4 ") > -1) {
              setWs("4");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 5 ") > -1) {
              setWs("5");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 6 ") > -1) {
              setWs("6");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 7 ") > -1) {
              setWs("7");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 8 ") > -1) {
              setWs("8");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 9 ") > -1) {
              setWs("9");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 10 ") > -1) {
              setWs("10");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 11 ") > -1) {
              setWs("11");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 12 ") > -1) {
              setWs("12");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 13 ") > -1) {
              setWs("13");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 14 ") > -1) {
              setWs("14");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 15 ") > -1) {
              setWs("15");
              return;
            }
            if (data.data[0].workshop.indexOf("WS 16 ") > -1) {
              setWs("16");
              return;
            }
            if (data.data[0].workshop.indexOf("WS Indovasc 1 ") > -1) {
              setWs("1A");
              return;
            }
            if (data.data[0].workshop.indexOf("WS Indovasc 2 ") > -1) {
              setWs("1B");
              return;
            }
            if (data.data[0].workshop.indexOf("WS Indovasc 3 ") > -1) {
              setWs("1C");
              return;
            }
          }
        }
        setWorkshopku(data.data[0].workshop);
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
        if(passcode != null){
          passcode = "?pwd="+passcode;        
        }else{
          passcode = ""
        }
        window.open(`https://us04web.zoom.us/j/${meetingId}${passcode}`);        
      }
    }
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

  const changeDataSympo = (noUrut) => {
    setVisible(!visible);
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getsympodetil&noUrut=" +
          noUrut
      )
      .then((res) => {
        console.log(res);
        setVisible(!visible);
        if (
          res.data.status == 0 &&
          res.data.master == null &&
          res.data.master == []
        ) {
          alert("Mohon Hubungi Admin");
        } else {
          setDataSympo(res.data);
          setWs("sympo");
          console.log(dataSympo);
        }
      })
      .catch((err) => console.log(err));
  };

  const changeDataIndoSympo = (noUrut) => {
    setVisible(!visible);
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getsympovasculardetil&noUrut=" +
          noUrut
      )
      .then((res) => {
        console.log(res);
        setVisible(!visible);
        if (
          res.data.status == 0 &&
          res.data.master == null &&
          res.data.master == []
        ) {
          alert("Mohon Hubungi Admin");
        } else {
          setDataSympo(res.data);
          setWs("sympoIndo");
          console.log(dataSympo);
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
      return (
        new Date(date).getDate() +
        " " +
        dateArticle.format(new Date(date)) +
        " " +
        new Date(date).getFullYear()
      );
    }
  };

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
        <CTabs activeTab="acsa">
          <CNav variant="tabs" style={{ padding: "11px" }}>
            <CNavItem>
              <CNavLink data-tab="acsa" style={{ border: "none" }}>
                ACSA
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="indoviscular" style={{ border: "none" }}>
                INDOVASCULAR
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane data-tab="acsa">
              <CCardBody>
                <CRow>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                    <b>Symposium</b>
                    <br />
                    {anggota.simposium != "" ? (
                      <>
                        <Button
                          type="primary"
                          onClick={() => {
                            changeDataSympo(1);
                          }}
                          style={{ borderRadius: "10px" }}
                        >
                          Day 1
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            changeDataSympo(2);
                          }}
                          style={{ marginLeft: "2px", borderRadius: "10px" }}
                        >
                          Day 2
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            changeDataSympo(3);
                          }}
                          style={{ marginLeft: "2px", borderRadius: "10px" }}
                        >
                          Day 3
                        </Button>
                      </>
                    ) : null}
                    <hr style={{ width: "50%" }} />
                    <b>Workshop</b>
                    <br />
                    {workshopku.indexOf("WS 1 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("1");
                          changeDataWS(1);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 1
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 2 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("2");
                          changeDataWS(2);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 2
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 3 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("3");
                          changeDataWS(3);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 3
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 4 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("4");
                          changeDataWS(4);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 4
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 5 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("5");
                          changeDataWS(5);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 5
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 6 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("6");
                          changeDataWS(6);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 6
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 7 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("7");
                          changeDataWS(7);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 7
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 8 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("8");
                          changeDataWS(8);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 8
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 9 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("9");
                          changeDataWS(9);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 9
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 10 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("10");
                          changeDataWS(10);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 10
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 11 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("11");
                          changeDataWS(11);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 11
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 12 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("12");
                          changeDataWS(12);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 12
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 13 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("13");
                          changeDataWS(13);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 13
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 14 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("14");
                          changeDataWS(14);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 14
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 15 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("15");
                          changeDataWS(15);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 15
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS 16 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => {
                          setWs("16");
                          changeDataWS(16);
                        }}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        WS 16
                      </Button>
                    ) : null}
                  </div>
                </CRow>
                <CRow
                  style={{ marginTop: "30px" }}
                  className="justify-content-center"
                >
                  {ws == "sympo" ? (
                    <>
                      <h2
                        style={{
                          margin: "0 auto",
                          position: "relative",
                          width: "95%",
                          marginBottom: "25px",
                          color: "#4e4e4e",
                        }}
                      >
                        {`DAY-${dataSympo.master[0].serial_number} : ${
                          dataSympo.master[0].day
                        }, ${parseDate(dataSympo.master[0].date)}`}
                      </h2>
                      {dataSympo.detil.map((s, index1) => {
                        return (
                          <div
                            key={index1}
                            className={`col-lg-${
                              dataSympo.detil.length == 1
                                ? "12"
                                : dataSympo.detil.length > 1 &&
                                  dataSympo.detil.length >= 2
                                ? "6"
                                : dataSympo.detil.length > 2 &&
                                  dataSympo.detil.length <= 3
                                ? "4"
                                : dataSympo.detil.length > 3
                                ? "3"
                                : "12"
                            } col-md-${
                              dataSympo.detil.length == 1
                                ? "12"
                                : dataSympo.detil.length > 1 &&
                                  dataSympo.detil.length <= 3
                                ? "4"
                                : dataSympo.detil.length > 3
                                ? "3"
                                : "12"
                            } col-sm-12 col-xs-12`}
                          >
                            <h4
                              style={{
                                color: "#4e4e4e",
                                margin: "0 auto",
                                position: "relative",
                                width: "95%",
                              }}
                            >{`Ballroom ${index1 + 1}`}</h4>
                            <VerticalTimeline layout="1-column-left">
                              {dataSympo.detil[index1].map((row, index2) => {
                                return (
                                  <VerticalTimelineElement
                                    key={index2}
                                    className="vertical-timeline-element--work"
                                    style={{ margin: "10px 0" }}
                                    contentStyle={{
                                      background: "rgb(33, 150, 243)",
                                      color: "#fff",
                                      textAlign: "center",
                                    }}
                                    contentArrowStyle={{
                                      borderRight:
                                        "7px solid  rgb(33, 150, 243)",
                                    }}
                                    date={row.time_range}
                                    iconStyle={{
                                      background: "rgb(33, 150, 243)",
                                      color: "#fff",
                                    }}
                                    icon={
                                      <i
                                        style={{
                                          position: "relative",
                                          left: "50%",
                                          top: "50%",
                                          transform: "translate(-50%, -50%)",
                                          fontSize: "25px",
                                        }}
                                        className="far fa-calendar-alt"
                                      ></i>
                                    }
                                  >
                                    {row.tipe == "Activity" ? (
                                      <>
                                        <h5 className="text-white vertical-timeline-element-title">
                                          {row.topic}
                                        </h5>
                                        <p>Speaker: {row.speaker ?? "tba"}</p>
                                      </>
                                    ) : (
                                      <>
                                        <h5 className="text-white vertical-timeline-element-title">
                                          {row.topic}
                                        </h5>
                                        <p>
                                          Chairman: {row.chairman ?? "tba"}{" "}
                                          <br /> Panelist:{" "}
                                          {row.panelist ?? "tba"}
                                        </p>
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
                                      </>
                                    )}
                                  </VerticalTimelineElement>
                                );
                              })}
                            </VerticalTimeline>
                          </div>
                        );
                      })}
                    </>
                  ) : ws == "ws" ? (
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
                              Workshop{" "}
                              <p style={{ textAlign: "center" }}>
                                {dataWs.master.title}
                              </p>
                            </h4>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              Topic : {dataWs.master.topic}
                            </li>
                            <li className="list-group-item">
                              Day,Date : {dataWs.master.day},{" "}
                              {dataWs.master.date}
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
                            <li className="list-group-item text-center">
                              <Button
                                type="primary"
                                style={{
                                  borderRadius: "10px",
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
                        <VerticalTimeline layout="1-column-left">
                          {dataWs.data.map((s, index1) => {
                            return (
                              <VerticalTimelineElement
                                key={index1}
                                className="vertical-timeline-element--work"
                                style={{ margin: "10px 0" }}
                                contentStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                  textAlign: "center",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  rgb(33, 150, 243)",
                                }}
                                date={s.time_range}
                                iconStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                }}
                                icon={
                                  <i
                                    style={{
                                      position: "relative",
                                      left: "50%",
                                      top: "50%",
                                      transform: "translate(-50%, -50%)",
                                      fontSize: "25px",
                                    }}
                                    className="far fa-calendar-alt"
                                  ></i>
                                }
                              >
                                <h5 className="text-white vertical-timeline-element-title">
                                  {s.topic}
                                </h5>
                                <p>Speakers: {s.speaker ?? "tba"}</p>
                              </VerticalTimelineElement>
                            );
                          })}{" "}
                        </VerticalTimeline>
                      </div>
                    </>
                  ) : null}
                </CRow>
              </CCardBody>
            </CTabPane>
            <CTabPane data-tab="indoviscular">
              <CCardBody>
                <CRow>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                    <b>Symposium</b>
                    <br />
                    {anggota.simposium != "" ? (
                      <>
                        <Button
                          type="primary"
                          onClick={() => {
                            changeDataIndoSympo(1);
                          }}
                          style={{ marginLeft: "30px", borderRadius: "10px" }}
                        >
                          Day 1{" "}
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            changeDataIndoSympo(2);
                          }}
                          style={{ marginLeft: "2px", borderRadius: "10px" }}
                        >
                          Day 2
                        </Button>
                      </>
                    ) : null}
                    <hr style={{ width: "50%" }} />
                    <b>Workshop</b>
                    <br />
                    {workshopku.indexOf("WS Indovasc 1 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => changeDataIndoWS(1)}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        Indovasc WS 1
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS Indovasc 2 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => changeDataIndoWS(2)}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        Indovasc WS 2
                      </Button>
                    ) : null}
                    {workshopku.indexOf("WS Indovasc 3 ") > -1 ? (
                      <Button
                        type="primary"
                        onClick={() => changeDataIndoWS(3)}
                        style={{
                          marginLeft: "2px",
                          borderRadius: "10px",
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
                  {ws == "sympoIndo" ? (
                    <>
                      <h2
                        style={{
                          margin: "0 auto",
                          position: "relative",
                          width: "95%",
                          marginBottom: "25px",
                          color: "#4e4e4e",
                          textAlign: "center",
                        }}
                      >
                        {`DAY-${dataSympo.master[0].serial_number} : ${
                          dataSympo.master[0].day
                        }, ${parseDate(dataSympo.master[0].date)}`}
                      </h2>
                      {dataSympo.detil.map((s, index1) => {
                        return (
                          <div
                            key={index1}
                            className={`col-lg-${
                              dataSympo.detil.length == 1
                                ? "8"
                                : dataSympo.detil.length > 1 &&
                                  dataSympo.detil.length >= 2
                                ? "6"
                                : dataSympo.detil.length > 2 &&
                                  dataSympo.detil.length <= 3
                                ? "4"
                                : dataSympo.detil.length > 3
                                ? "3"
                                : "8"
                            } col-md-${
                              dataSympo.detil.length == 1
                                ? "8"
                                : dataSympo.detil.length > 1 &&
                                  dataSympo.detil.length <= 3
                                ? "4"
                                : dataSympo.detil.length > 3
                                ? "3"
                                : "8"
                            } col-sm-12 col-xs-12`}
                          >
                            <h4
                              style={{
                                color: "#4e4e4e",
                                margin: "0 auto",
                                position: "relative",
                                width: "95%",
                              }}
                            >{`Ballroom ${index1 + 1}`}</h4>
                            <VerticalTimeline layout="1-column-left">
                              {dataSympo.detil[index1].map((row, index2) => {
                                return (
                                  <VerticalTimelineElement
                                    key={index2}
                                    className="vertical-timeline-element--work"
                                    style={{ margin: "10px 0" }}
                                    contentStyle={{
                                      background: "rgb(33, 150, 243)",
                                      color: "#fff",
                                      textAlign: "center",
                                    }}
                                    contentArrowStyle={{
                                      borderRight:
                                        "7px solid  rgb(33, 150, 243)",
                                    }}
                                    date={row.time_range}
                                    iconStyle={{
                                      background: "rgb(33, 150, 243)",
                                      color: "#fff",
                                    }}
                                    icon={
                                      <i
                                        style={{
                                          position: "relative",
                                          left: "50%",
                                          top: "50%",
                                          transform: "translate(-50%, -50%)",
                                          fontSize: "25px",
                                        }}
                                        className="far fa-calendar-alt"
                                      ></i>
                                    }
                                  >
                                    {row.tipe == "Activity" ? (
                                      <>
                                        <h5 className="text-white vertical-timeline-element-title">
                                          {row.topic}
                                        </h5>
                                        <p>Speaker: {row.speaker ?? "tba"}</p>
                                      </>
                                    ) : (
                                      <>
                                        <h5 className="text-white vertical-timeline-element-title">
                                          {row.topic}
                                        </h5>
                                        <p>
                                          Chairman: {row.chairman ?? "tba"}{" "}
                                          <br /> Panelist:{" "}
                                          {row.panelist ?? "tba"}
                                        </p>
                                        <br />
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
                                      </>
                                    )}
                                  </VerticalTimelineElement>
                                );
                              })}
                            </VerticalTimeline>
                          </div>
                        );
                      })}
                    </>
                  ) : ws == "wsIndo" ? (
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
                              Workshop{" "}
                              <p style={{ textAlign: "center" }}>
                                {dataWs.master.title}
                              </p>
                            </h4>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              Topic : {dataWs.master.topic}
                            </li>
                            <li className="list-group-item">
                              Day,Date : {dataWs.master.day},{" "}
                              {dataWs.master.date}
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
                            <li className="list-group-item text-center">
                              <Button
                                type="primary"
                                style={{
                                  borderRadius: "10px",
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
                                    dataWs.master.passcode
                                  );
                                }}
                              >
                                Join Now
                              </Button>
                            </li>
                          </ul>
                        </div>
                        <VerticalTimeline layout="1-column-left">
                          {dataWs.data.map((s, index1) => {
                            return (
                              <VerticalTimelineElement
                                key={index1}
                                className="vertical-timeline-element--work"
                                style={{ margin: "10px 0" }}
                                contentStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                  textAlign: "center",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  rgb(33, 150, 243)",
                                }}
                                date={s.time_range}
                                iconStyle={{
                                  background: "rgb(33, 150, 243)",
                                  color: "#fff",
                                }}
                                icon={
                                  <i
                                    style={{
                                      position: "relative",
                                      left: "50%",
                                      top: "50%",
                                      transform: "translate(-50%, -50%)",
                                      fontSize: "25px",
                                    }}
                                    className="far fa-calendar-alt"
                                  ></i>
                                }
                              >
                                <h5 className="text-white vertical-timeline-element-title">
                                  {s.topic}
                                </h5>
                                <p>Speakers: {s.speaker ?? "tba"}</p>
                              </VerticalTimelineElement>
                            );
                          })}{" "}
                        </VerticalTimeline>
                      </div>
                    </>
                  ) : null}
                </CRow>
              </CCardBody>
            </CTabPane>
          </CTabContent>
        </CTabs>
      </CCard>
    </>
  );
};

export default Colors;
