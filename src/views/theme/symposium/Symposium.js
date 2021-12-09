import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import axios from "axios";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
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
const { confirm } = Modal;
const FormItem = Form.Item;
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

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
        <tr>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
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
  const [hari, setHari] = useState("");
  const [meetingid1, setMeetingid1] = useState("3529375916");
  const [meetingid2, setMeetingid2] = useState("");
  const [meetingid3, setMeetingid3] = useState("");
  const [meetingid4, setMeetingid4] = useState("");
  const [meetingid5, setMeetingid5] = useState("");
  const [meetingid6, setMeetingid6] = useState("");
  const [meetingid7, setMeetingid7] = useState("");
  const [meetingid8, setMeetingid8] = useState("");
  const [meetingid9, setMeetingid9] = useState("");
  const [meetingid10, setMeetingid10] = useState("");
  const [idanggota, setIdanggota] = useState("");
  const [nama, setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota, setAnggota] = useState("");
  const [workshopku, setWorkshopku] = useState("");
  const [visible, setVisible] = useState(false);
  const [ws, setWs] = useState("-");

  const [dataWs, setDataWs] = useState({});
  const [dataSympo, setDataSympo] = useState({});

  // const [kota,setKota] = useState(

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
        // console.log(data.data[0]);
        setAnggota(data.data[0]);
        if (data.data[0].simposium != "") {
          changeDataSympo(1);
        }
        setWorkshopku(data.data[0].workshop);
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);

  const changeDataSympo = (noUrut, noUrutIndo = null) => {
    setVisible(!visible);
    let url = "getsympodetilIndo";
    if (noUrutIndo) {
      url = `getsympodetilIndo&noUrutIndo=${noUrutIndo}`;
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=${url}&noUrut=${noUrut}`)
      .then((res) => {
        // console.log(res);
        setVisible(!visible);
        setDataSympo(res.data.data);
        setHari("sympo");
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

  const WacthZoom = (meetingId, passcode = null, type = "sympo") => {
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

  const getTime = (timeDa) => {
    let today = new Date(timeDa);
    // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let date = "";
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    return dateTime;
  };

  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          {/* <div style={{fontSize:"25px",color:"rgb(1,77,136)"}}>Symposium </div><div style={{fontSize:"12px"}}>(Klik tombol di bawah ini)</div> */}
          <span className="badge badge-info">Symposium</span>
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
          <CRow>
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              {anggota.simposium != "" ? (
                <>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      changeDataSympo(1);
                    }}
                    style={{ borderRadius: "10px" }}
                  >
                    Day 1
                  </Button>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      changeDataSympo(2, 1);
                    }}
                    style={{ marginLeft: "2px", borderRadius: "10px" }}
                  >
                    Day 2
                  </Button>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      changeDataSympo(3, 2);
                    }}
                    style={{ marginLeft: "2px", borderRadius: "10px" }}
                  >
                    Day 3
                  </Button>
                </>
              ) : null}
            </div>
          </CRow>
          <CRow>
            {hari == "sympo" ? (
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
                  {`DAY-${dataSympo[0].serial_number} : ${
                    dataSympo[0].day
                  }, ${parseDate(dataSympo[0].date)}`}
                </h2>
                {dataSympo.map((s, index1) => {
                  return (
                    <div
                      key={index1}
                      class={`col-lg-${
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
                          margin: "0 auto",
                          position: "relative",
                          width: "95%",
                        }}
                      >
                        {`Ballroom ${index1 + 1}`}
                        <small>{s.type_event == "INDOVASCULAR" ? " (INDOVASCULAR)" : null}</small>
                      </h4>
                      <VerticalTimeline layout="1-column-left">
                        {s.detil.map((row, index2) => {
                          return (
                            <>
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
                                  borderRight: "7px solid  rgb(33, 150, 243)",
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
                                    class="far fa-calendar-alt"
                                  ></i>
                                }
                              >
                                <h5 className="text-white vertical-timeline-element-title">
                                  {row.topic}
                                </h5>
                                <p>
                                  Chairman: {row.chairmain ?? "tba"} <br />{" "}
                                  Panelist: {row.panelist ?? "tba"} <br /> Time:{" "}
                                  {getTime(row.time_launching) ?? "tba"}
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
                                      row.status == "Active" ? "block" : "none",
                                  }}
                                  onClick={() => {
                                    WacthZoom(row.zoom_room_id, row.passcode);
                                  }}
                                >
                                  Watch Now
                                </Button>
                              </VerticalTimelineElement>
                            </>
                          );
                        })}
                      </VerticalTimeline>
                    </div>
                  );
                })}
              </>
            ) : null}
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
