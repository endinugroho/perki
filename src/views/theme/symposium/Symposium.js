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
  const [visiblevideo, setVisiblevideo] = useState(true);
  const [ws, setWs] = useState("-");
  const [harike,setHarike] = useState("");

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
        if (data.data[0].simposium != "" && data.data[0].simposium == null) {
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

  const WacthZoom = (meetingId, passcode = null, type = "sympo", caption = "") => {
    // console.log(caption)
    if (meetingId == "" || passcode == "") {
      alert("This feature is not active");
    } else {
      if (type == "sympo") {
        localStorage.setItem("meetingid", meetingId);
        localStorage.setItem("passcode", passcode);
        localStorage.setItem("type", "sympo");
        localStorage.setItem("captionTitle", caption);
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

  const WacthZoom1 = (index1,index2) => {

    if (harike=="1") {
      if (index1==0 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1aeKgzC-my186-eczKPaXdSqJoOKTam93/preview`);
        history.push("/theme/video/1-1");

      }
      if (index1==1 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1vSVjX3LA_Vds5UUqBEJY5lJZdhj2vCyq/preview`);
        history.push("/theme/video/1-2");
      }
      if (index1==2 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1aXXJdwmuvC0IS6E1A0ec2S72MCyqISOv/preview`);
        history.push("/theme/video/1-3");
      }

      if (index1==3 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1L2AjLG6c4ZgYZVHTToZPsMGqBqIl2Fbq/preview`);
        history.push("/theme/video/1-4");
      }

      if (index1==4 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1L2AjLG6c4ZgYZVHTToZPsMGqBqIl2Fbq/preview`);
        history.push("/theme/video/1-5");
      }

      if (index1==0 && index2==1) {
        // window.open(`https://drive.google.com/file/d/16Y_zA7-6b5MIQjxO64vGEI-Aj9AjNL-n/preview`);
        history.push("/theme/video/2-1");
      }
      if (index1==1 && index2==1) {
        // window.open(`https://drive.google.com/file/d/1UzjuY3HBSdTCLpwB5dM1u033n8gRSRsV/preview`);
        history.push("/theme/video/2-2");
      }
      if (index1==2 && index2==1) {
        // window.open(`https://drive.google.com/file/d/10e_i4YvAXoEdSLzStkdOLmRda5MuzNw0/preview`);
        history.push("/theme/video/2-3");
      }

      if (index1==3 && index2==1) {
        // window.open(`https://drive.google.com/file/d/166Gzt3zRaVq-_pM4BcuEBafI1YEXmrRd/preview`);
        history.push("/theme/video/2-4");
      }

      if (index1==4 && index2==1) {
        // window.open(`https://drive.google.com/file/d/1VGDkgMIuC0TqCSWog08qlJpm2i3-XpFu/preview`);
        history.push("/theme/video/2-5");
      }


    }

    if (harike=="2") {
      if (index1==0 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1KmWRap3fSbSqvX4_V-plZv00L-cyy1OJ/preview`);
        history.push("/theme/video/1-6");
      }
      if (index1==1 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1ShfL1BfvF47dgEEKDxcnnzzChXKgIF0V/preview`);
        history.push("/theme/video/1-7");
      }
      if (index1==2 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1Z2Nc_1u8bzQWG6rkjaxSy_nuV6vIC3kE/preview`);
        history.push("/theme/video/1-8");
      }

      if (index1==3 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1WJYFYINxeSGXVjA_gQyyltGrPjOPBMw3/preview`);
        history.push("/theme/video/1-9");
      }

      if (index1==4 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1F_8mkFrGdhL-8GwRrvkYkcoDQPUmma6U/preview`);
        history.push("/theme/video/1-10");
      }

      if (index1==0 && index2==1) {
        // window.open(`https://drive.google.com/file/d/1yz6eHSl32AuTqQ8ccf-Q2kalu66qqSzQ/preview`);
        history.push("/theme/video/2-6");
      }
      if (index1==1 && index2==1) {
        // window.open(`https://drive.google.com/file/d/1-E860OcMKQp5Hc2gfFEg7PhtHBA6zbbL/preview`);
        history.push("/theme/video/2-7");
      }
      if (index1==2 && index2==1) {
        // window.open(`https://drive.google.com/file/d/1bcP8M2XbTO9BD9OsEOGxTFcJzPFZejaD/preview`);
        history.push("/theme/video/2-8");
      }

      if (index1==3 && index2==1) {
        // window.open(`https://drive.google.com/file/d/145lIrfeHeZqMkjtR1hy4s3-FOiRPdiyy/preview`);
        history.push("/theme/video/2-9");
      }

      if (index1==4 && index2==1) {
        // window.open(`https://drive.google.com/file/d/1UattmyxFzuhS-XrBzjiJJShmGWL32jor/preview`);
        history.push("/theme/video/2-10");
      }


      if (index1==0 && index2==2) {
        // window.open(`https://drive.google.com/file/d/1YpUZfK5veTpdS1K4QPZUHSiQIydYZjT_/preview`);
        history.push("/theme/video/3-1");
      }
      if (index1==1 && index2==2) {
        // window.open(`https://drive.google.com/file/d/1CS9L0Le-wHsxxzWe4s-2IWr8Nk92TJsH/preview`);
        history.push("/theme/video/3-2");
      }
      if (index1==2 && index2==2) {
        // window.open(`https://drive.google.com/file/d/1lz3BbMNFM8g_TvJVgMpDaZ0HTehzVK1m/preview`);
        history.push("/theme/video/3-3");
      }

      if (index1==3 && index2==2) {
        history.push("/theme/video/3-4");
        // window.open(`https://drive.google.com/file/d/15Pxvq0npyUQmrVybKC4V7MYmWHwwz7xA/preview`);
      }

      if (index1==4 && index2==2) {
        history.push("/theme/video/3-5");
        // window.open(`https://drive.google.com/file/d/1_Tg3fYGvGwB-Ocj8mQD6KY2u2dOlmbtG/preview`);
      }

      if (index1==5 && index2==2) {
        history.push("/theme/video/3-6");
        // window.open(`https://drive.google.com/file/d/1lANWciipPVPB7eZlUZ8UYlmEVqJQ3T5p/preview`);
      }

    }


    if (harike=="3") {
      if (index1==0 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1AyXhDRzTduF9YS4BvDyq4oBjPBt61172/preview`);
        history.push("/theme/video/1-11");
      }
      if (index1==1 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1PJg3KGk5uvG03MuBFVuUjUOXnVtkHz93/preview`);
        history.push("/theme/video/1-12");
      }
      if (index1==2 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1gAAN7cgIpG_zrYGc7dDGki7pVO2Zsp-x/preview`);
        history.push("/theme/video/1-13");
      }

      if (index1==3 && index2==0) {
        // window.open(`https://drive.google.com/file/d/1GReezPN6bSSmfqE7TTm_Vb0J9tJO1nlj/preview`);
        history.push("/theme/video/1-14");
      }

      if (index1==0 && index2==1) {
        // window.open(`https://drive.google.com/file/d/1-oNz_cMJ9Leqs5sLuZx_h_Zt9phjWlwi/view?usp=sharing`);
        history.push("/theme/video/2-11");
      }
      if (index1==1 && index2==1) {
        history.push("/theme/video/2-12");
      }
      if (index1==2 && index2==1) {
        history.push("/theme/video/2-13");
      }
      if (index1==3 && index2==1) {
        history.push("/theme/video/2-14");
      }


      if (index1==0 && index2==2) {
        history.push("/theme/video/3-7");
        // window.open(`https://drive.google.com/file/d/1ewVAPhYTIeZcqhIHtB1Ta8F88KBWwz6p/preview`);
      }
      if (index1==1 && index2==2) {
        history.push("/theme/video/3-8");
        // window.open(`https://drive.google.com/file/d/1Mlt0CfLoGde4QvGrilx_1F1wwU8EYIYB/preview`);
      }
      if (index1==2 && index2==2) {
        history.push("/theme/video/3-9");
        // window.open(`https://drive.google.com/file/d/1UceEr73wW0nVtWtSk9KP6C97ibb4MBQM/preview`);
      }
      if (index1==3 && index2==2) {
        history.push("/theme/video/3-10");
        // window.open(`https://drive.google.com/file/d/11K_P8BJzDux3C71EO-rYr4nTQ17h5w5o/preview`);
      }
      if (index1==4 && index2==2) {
        history.push("/theme/video/3-11");
        // window.open(`https://drive.google.com/file/d/1QeizAnBU8nyPnqKTumyyUW7n5dGkX2r9/preview`);
      }
      if (index1==5 && index2==2) {
        history.push("/theme/video/3-12");
        // window.open(`https://drive.google.com/file/d/1q9MK3qQcEarpgSHX0DfX-oDQ0uJDSBfU/preview`);
      }
      // if (index1==6 && index2==2) {
      //   history.push("/theme/video/3-1");
      //   // window.open(``);
      // }


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
              {(anggota.simposium != "" && anggota.simposium != null) ? (
                <>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      changeDataSympo(1);
                      setHarike("1");
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
                      setHarike("2");
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
                      setHarike("3");
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
                                    color: "#fff",}}
                                    onClick={() => {
                                      WacthZoom1(index2,index1);
                                    }}

                                >Video On Demand</Button>
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
                                    WacthZoom(row.zoom_room_id, row.passcode, 'sympo', index1 + 1 + (s.type_event == "INDOVASCULAR" ? " (INDOVASCULAR)" : null));
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
      {/* <Modal
        title="Video On Demand"
        centered
        visible={visiblevideo}
        onOk={() => setVisiblevideo(false)}
        onCancel={() => setVisiblevideo(false)}
        width={"50%"}
        height={"80%"}
      >
<iframe src="https://drive.google.com/file/d/1aeKgzC-my186-eczKPaXdSqJoOKTam93/preview" width="640" height="480" allow="autoplay"></iframe>
      </Modal> */}

    </>
  );
};

export default Colors;
