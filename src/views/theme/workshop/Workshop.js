import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import axios from "axios";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
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
  const [ws, setWs] = useState("");

  const [workshopprice, setWorkshopprice] = useState([
    { profession: "Medical Student", price: "IDR 10,000" },

    { profession: "GP", price: "IDR 300,000" },
    { profession: "Cardiologist", price: "IDR 500,000" },
    { profession: "Other Specialists", price: "IDR 500,000" },
    { profession: "Nurse or Paramedics", price: "IDR 150,000" },
  ]);
  const [idanggota, setIdanggota] = useState("");
  const [nama, setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota, setAnggota] = useState("");
  const [workshopku, setWorkshopku] = useState("");
  const [dataWs, setDataWs] = useState({});
  const [dataIndoWs, setDataIndoWs] = useState({});
  const [visible, setVisible] = useState(false);
  const [hasFetch, setHasFetch] = useState(true);

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
        // var temp = data.data;
        console.log(data.data[0]);
        setAnggota(data.data[0]);
        setWorkshopku(data.data[0].workshop);
        if (data.data[0].workshop != "") {
          if (data.data[0].workshop.indexOf("WS 1 ") > -1) {
            // setWs("1");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(1);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 2 ") > -1) {
            // setWs("2");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(2);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 3 ") > -1) {
            // setWs("3");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(3);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 4 ") > -1) {
            // setWs("4");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(4);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 5 ") > -1) {
            // setWs("5");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(5);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 6 ") > -1) {
            // setWs("6");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(6);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 7 ") > -1) {
            // setWs("7");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(7);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 8 ") > -1) {
            // setWs("8");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(8);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 9 ") > -1) {
            // setWs("9");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(9);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 10 ") > -1) {
            // setWs("10");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(10);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 11 ") > -1) {
            // setWs("11");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(11);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 12 ") > -1) {
            // setWs("12");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(12);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 13 ") > -1) {
            // setWs("13");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(13);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 14 ") > -1) {
            // setWs("14");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(14);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 15 ") > -1) {
            // setWs("15");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(15);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 16 ") > -1) {
            // setWs("16");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(16);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS 20 ") > -1) {
            // setWs("16");
            if (hasFetch) {
              setHasFetch(false);
              changeDataWS(16);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS Indovasc 1 ") > -1) {
            // setWs("1A");
            if (hasFetch) {
              setHasFetch(false);
              changeDataIndows(1);
            }
            // changeDataIndows(1);
            return;
          }
          if (data.data[0].workshop.indexOf("WS Indovasc 2 ") > -1) {
            // setWs("1B");
            if (hasFetch) {
              setHasFetch(false);
              changeDataIndows(2);
            }
            return;
          }
          if (data.data[0].workshop.indexOf("WS Indovasc 3 ") > -1) {
            // setWs("1C");
            if (hasFetch) {
              setHasFetch(false);
              changeDataIndows(3);
            }
            return;
          }
        }
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);

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
          console.log(ws);
        }
      })
      .catch((err) => console.log(err));
  };

  const changeDataIndows = (noUrut) => {
    setVisible(!visible);
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getwsvasculardetil&noUrut=" +
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
          setDataWs(res.data);
          setWs("ws");
          console.log(ws);
        }
      })
      .catch((err) => console.log(err));
  };

  const parseDate = (date) => {
    let isValidDate = Date.parse(date);
    let dateArticle = new Intl.DateTimeFormat("id");
    if (isNaN(isValidDate)) {
      return "-";
    } else {
      return (
        dateArticle.format(new Date(date)) +
        " " +
        new Date(date).getDate() +
        ", " +
        new Date(date).getFullYear()
      );
    }
  };

  // const [kota,setKota] = useState(
  const [simposiumprice, setSimposiumprice] = useState([
    { profession: "Medical Student", price: "IDR 10,000" },
    { profession: "GP", price: "IDR 300,000" },
    { profession: "Cardiologist", price: "IDR 500,000" },
    { profession: "Other Specialist", price: "IDR 500,000" },
    { profession: "Nurse or Paramedics", price: "IDR 150,000" },
  ]);

  const [hargapaket, setHargapaket] = useState([
    // {profession:"Cardiologist",package:"-",price:"0"},
    {
      profession: "Cardiologist",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 1,200,000",
      jumlah: 2,
    },
    {
      profession: "Cardiologist",
      package: "Gold (Symposium+4 workshop*)",
      price: "IDR 1,800,000",
      jumlah: 4,
    },
    {
      profession: "Cardiologist",
      package: "Platinum (Symposium+6 workshop*)",
      price: "IDR 2,300,000",
      jumlah: 6,
    },
    // {profession:"Other specialists",package:"-",price:"0"},
    {
      profession: "Other Specialist",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 1,200,000",
      jumlah: 2,
    },
    {
      profession: "Other Specialist",
      package: "Gold (Symposium+4 workshop*)",
      price: "IDR 1,800,000",
      jumlah: 4,
    },
    {
      profession: "Other Specialist",
      package: "Platinum (Symposium+6 workshop*)",
      price: "IDR 2,300,000",
      jumlah: 6,
    },
    // {profession:"GP",package:"-",price:"0"},
    {
      profession: "GP",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 550,000",
      jumlah: 2,
    },
    {
      profession: "GP",
      package: "Gold (Symposium+4 workshop*)",
      price: "IDR 700,000",
      jumlah: 4,
    },
    {
      profession: "GP",
      package: "Platinum (Symposium+6 workshop*)",
      price: "IDR 850,000",
      jumlah: 6,
    },
    // {profession:"Medical Student",package:"-",price:"0"},
    {
      profession: "Medical Student",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 250,000",
      jumlah: 2,
    },
    {
      profession: "Medical Student",
      package: "Gold (Symposium+4 workshop*)",
      price: "IDR 300,000",
      jumlah: 4,
    },
    {
      profession: "Medical Student",
      package: "Platinum (Symposium+6 workshop*)",
      price: "IDR 350,000",
      jumlah: 6,
    },
    // {profession:"Nurse or Paramedics",package:"-",price:"0"},
    {
      profession: "Nurse or Paramedics",
      package: "Silver (Symposium+2 workshop*)",
      price: "IDR 225,000",
      jumlah: 2,
    },
  ]);

  const [workshopprof, setWorkshopprof] = useState([
    {
      profession: "GP",
      name: "WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "GP",
      name: "WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",
    },
    {
      profession: "GP",
      name: "WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",
    },
    { profession: "GP", name: "WS 7 (Comprehensive CV Risk Stratification)" },
    {
      profession: "GP",
      name: "WS 9 (Practical Approach in Emergency Arrythmias)",
    },
    {
      profession: "GP",
      name: "WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)",
    },
    {
      profession: "GP",
      name: "WS 11 (Rapid Echocardiography in Emergency Setting)",
    },
    {
      profession: "GP",
      name: "WS 13 (Advanced in Diagnosing Acute Heart Failure)",
    },
    {
      profession: "Cardiologist",
      name: "WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)",
    },
    {
      profession: "Cardiologist",
      name: "WS 2 (Perioperative Cardiac Consultation)",
    },
    {
      profession: "Cardiologist",
      name: "WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "Cardiologist",
      name: "WS 4 (Cardiac Injury in Chemotherapy Patient)",
    },
    {
      profession: "Cardiologist",
      name: "WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",
    },
    {
      profession: "Cardiologist",
      name: "WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",
    },
    {
      profession: "Cardiologist",
      name: "WS 7 (Comprehensive CV Risk Stratification)",
    },
    {
      profession: "Cardiologist",
      name: "WS 8 (Practical approach to non-invasive ventilation in acute heart failure)",
    },
    {
      profession: "Cardiologist",
      name: "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)",
    },
    {
      profession: "Cardiologist",
      name: "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)",
    },
    {
      profession: "Cardiologist",
      name: "WS 15 (Cardiomyopathy Evaluation by Cardiac MR)",
    },
    {
      profession: "Cardiologist",
      name: "WS 16 (Cardiac CT in Coronary Artery and Beyond)",
    },
    {
      profession: "Cardiologist",
      name: "WS Indovasc 1 (Early Detection of Chronic Venous Insufficiency)",
    },
    { profession: "Cardiologist", name: "WS Indovasc 2 (Vascular Doppler US)" },
    {
      profession: "Cardiologist",
      name: "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)",
    },
    {
      profession: "Other Specialists",
      name: "WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)",
    },
    {
      profession: "Other Specialists",
      name: "WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "Other Specialists",
      name: "WS 4 (Cardiac Injury in Chemotherapy Patient)",
    },
    {
      profession: "Other Specialists",
      name: "WS 7 (Comprehensive CV Risk Stratification)",
    },
    {
      profession: "Other Specialists",
      name: "WS 8 (Practical approach to non-invasive ventilation in acute heart failure)",
    },
    {
      profession: "Other Specialists",
      name: "WS 9 (Practical Approach in Emergency Arrythmias)",
    },
    {
      profession: "Other Specialists",
      name: "WS 11 (Rapid Echocardiography in Emergency Setting)",
    },
    {
      profession: "Other Specialists",
      name: "WS 13 (Advanced in Diagnosing Acute Heart Failure)",
    },
    {
      profession: "Other Specialists",
      name: "WS 15 (Cardiomyopathy Evaluation by Cardiac MR)",
    },
    {
      profession: "Other Specialists",
      name: "WS 16 (Cardiac CT in Coronary Artery and Beyond)",
    },
    {
      profession: "Nurse or Paramedics",
      name: "Ws 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "Nurse or Paramedics",
      name: "WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskular di Lini Terdepan: Fokus pada Terapi Trombolitik)",
    },
    {
      profession: "Medical Student",
      name: "WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",
    },
    {
      profession: "Medical Student",
      name: "WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",
    },
    {
      profession: "Medical Student",
      name: "WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",
    },
    {
      profession: "Medical Student",
      name: "WS 7 (Comprehensive CV Risk Stratification)",
    },
    {
      profession: "Medical Student",
      name: "WS 9 (Practical Approach in Emergency Arrythmias)",
    },
    {
      profession: "Medical Student",
      name: "WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)",
    },
    {
      profession: "Medical Student",
      name: "WS 11 (Rapid Echocardiography in Emergency Setting)",
    },
    {
      profession: "Medical Student",
      name: "WS 13 (Advanced in Diagnosing Acute Heart Failure)",
    },
  ]);

  const WacthZoom = (meetingId, passcode = null, type = "ws") => {
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

  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          {/* <div style={{fontSize:"25px",color:"rgb(1,77,136)"}}>Symsposium </div><div style={{fontSize:"12px"}}>(Klik tombol di bawah ini)</div> */}
          <span className="badge badge-info">Workshop</span>
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
            <p
              style={{
                width: "97%",
                margin: "0px auto 05px",
                textAlign: "center",
              }}
            >
              Click the button below to view the workshop
            </p>
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              {workshopku.indexOf("WS 1 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    changeDataWS(1);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    backgroundColor:"rgb(159,226,255)",
                    borderColor:"rgb(159,226,255)",

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
                    changeDataWS(2);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    backgroundColor:"rgb(159,226,255)",
                    borderColor:"rgb(159,226,255)",
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
                    borderRadius: "10px",
                    marginBottom: "5px",
                    backgroundColor:"rgb(159,226,255)",
                    borderColor:"rgb(159,226,255)",
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
                    changeDataWS(4);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    backgroundColor:"rgb(159,226,255)",
                    borderColor:"rgb(159,226,255)",
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
                    changeDataWS(5);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    backgroundColor:"rgb(159,226,255)",
                    borderColor:"rgb(159,226,255)",
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
                    changeDataWS(6);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    backgroundColor:"rgb(159,226,255)",
                    borderColor:"rgb(159,226,255)",
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
                    changeDataWS(7);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    backgroundColor:"rgb(159,226,255)",
                    borderColor:"rgb(159,226,255)",
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
                    changeDataWS(8);
                  }}
                  style={{
                    marginLeft: "2px",
                    borderRadius: "10px",
                    marginBottom: "5px",
                    backgroundColor:"rgb(159,226,255)",
                    borderColor:"rgb(159,226,255)",
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
                  size="large"
                  onClick={() => {
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
                  size="large"
                  onClick={() => {
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
                  size="large"
                  onClick={() => {
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
                  size="large"
                  onClick={() => {
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
                  size="large"
                  onClick={() => {
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
                  size="large"
                  onClick={() => {
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
                  size="large"
                  onClick={() => {
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
              {workshopku.indexOf("WS Indovasc 1 ") > -1 ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => changeDataIndows(1)}
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
                  size="large"
                  onClick={() => changeDataIndows(2)}
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
                  size="large"
                  onClick={() => changeDataIndows(3)}
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
            {ws == "ws" ? (
              <>
                <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
                  <div class="card" style={{ borderRadius: "10px" }}>
                    <div
                      class="card-header"
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
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">{dataWs.master.title}</li>
                      <li class="list-group-item">
                        Day,Date : {dataWs.master.day}, {dataWs.master.date}
                      </li>
                      <li class="list-group-item">
                        Course Director : {dataWs.master.course_director}
                      </li>
                      <li class="list-group-item">PIC : {dataWs.master.pic}</li>
                      <li class="list-group-item">
                        Moderator : {dataWs.master.moderator}
                      </li>
                      <li class="list-group-item text-center">
                        <Button
                          type="primary"
                          size="large"
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
                              class="far fa-calendar-alt"
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
      </CCard>
    </>
  );
};

export default Colors;
