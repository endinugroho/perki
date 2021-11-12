import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import axios from "axios";
import ReactPlayer from "react-player";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { rgbToHex } from "@coreui/utils";
import { DocsLink } from "src/reusable";
import { Stepper } from "react-form-stepper";
import { Modal, DatePicker, Input, Form, Radio, Select, Button } from "antd";
import "antd/dist/antd.css";
import { mixed } from "yup/lib/locale";
import { useHistory } from "react-router-dom";
import generator from "generate-password";
import { ImageMap } from "@qiuz/react-image-map";

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
  const [layar1, setLayar1] = useState(0);
  const [layar2, setLayar2] = useState(0);
  const [phase, setPhase] = useState("GATE");

  const onMapClick = (area, index: number) => {
    const tip = `click map${area.href || index + 1}`;
    console.log(index);
    if (index == 16) {
      openInNewTab("https://wa.me/6282232683785");
    }

    if (index == 0) {
      setPhase("PLATINUM");
    }

    if (index == 1) {
      setPhase("SILVER");
    }
  };

  const onMapClick2 = (area, index: number) => {
    const tip = `click map${area.href || index + 1}`;
    console.log(index);
    if (index == 0) {
      setPhase("ASTRA");
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
    // const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    // if (newWindow) newWindow.opener = null
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

  const mapAreaastra: any[] = [
    {
      width: "8.5%",
      height: "13%",
      left: "60.2%",
      top: "34%",
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
      width: "8.5%",
      height: "13%",
      left: "59.2%",
      top: "34%",
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
      width: "8.3%",
      height: "13%",
      left: "73.2%",
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
      width: "8.3%",
      height: "13%",
      left: "73.2%",
      top: "46.5%",
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
      width: "8.3%",
      height: "13%",
      left: "73.2%",
      top: "61.5%",
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

  useEffect(() => {
    axios({
      method: "POST",
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: { var: "simposium", mtd: "CEKOPTION" },
      contentType: "application/json",
    })
      .then((data) => {
        console.log(data.data.data);
        setSimposium(data.data.data);
      })
      .catch(() => {
        console.log("Internal server error");
      });
    // handlePlayVideo();
  }, []);

  const handleChange = (value) => {
    console.log(`selected ${value}`);

    setPropinsiselect(value);
    setKotaselect("");
  };

  const handleChange2 = (value) => {
    console.log(`selected ${value}`);

    setKotaselect(value);
  };

  const handleChange3 = (value) => {
    console.log(`selected ${value}`);

    // setHargaworkshop
  };

  const handleChange4 = (value) => {
    console.log(`selected ${value}`);

    setPackageselect(value);
    setHargatotal(value.split("#")[1]);
    setHargagrandtotal(value.split("#")[1]);
    setJumlahworkshop(value.split("#")[2]);
    console.log(value);
    if (value.substr(0, 1) == "S") {
      setPilih2("packagesilver");
    } else if (value.substr(0, 1) == "G") {
      setPilih2("packagegold");
    } else {
      setPilih2("packageplatinum");
    }
  };

  const handleChange6 = (value) => {
    console.log(`selected ${value}`);

    setHargaservice(value);
    setHargagrandtotal(
      parseInt(value) +
        parseInt(
          hargatotal.replace("IDR ", "").replace(",", "").replace(",", "")
        ) +
        parseInt(hargatambahan)
    );
  };

  const handleChange5 = (value) => {
    console.log(`selected ${value}`);

    // setPackageselect(value);
    // setHargatotal(value.split("#")[1]);
    if (pilih == 4) value = [value];
    console.log("workshop", value);
    setMacamworkshop(value);

    setJumlahworkshopdipilih(value.length);

    if (pilih === 3) {
      if (
        value.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        value.indexOf(
          "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"
        ) > -1
      ) {
        alert("Ws 12 and WS Indovac 2 run in same time");
      }
      if (
        value.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        value.indexOf(
          "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"
        ) > -1
      ) {
        alert("Ws 14 and WS Indovac 2 run in same time");
      }
      if (
        value.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)") > -1 &&
        value.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 15 and WS Indovac 3 run in same time");
      }
      if (
        value.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)") >
          -1 &&
        value.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 16 and WS Indovac 3 run in same time");
      }
      if (value.length > jumlahworkshop) {
        setHargatambahan((value.length - jumlahworkshop) * hargaworkshop);
        setHargagrandtotal(
          parseInt(
            hargatotal.replace("IDR ", "").replace(",", "").replace(",", "")
          ) +
            (value.length - jumlahworkshop) * hargaworkshop
        );
      } else {
        setHargatambahan(0);
        setHargagrandtotal(
          parseInt(
            hargatotal.replace("IDR ", "").replace(",", "").replace(",", "")
          )
        );
      }
    }

    if (pilih == 2) {
      if (
        value.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        value.indexOf(
          "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"
        ) > -1
      ) {
        alert("Ws 12 and WS Indovac 2 run in same time");
      }
      if (
        value.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        value.indexOf(
          "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"
        ) > -1
      ) {
        alert("Ws 14 and WS Indovac 2 run in same time");
      }
      if (
        value.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)") > -1 &&
        value.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 15 and WS Indovac 3 run in same time");
      }
      if (
        value.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)") >
          -1 &&
        value.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 16 and WS Indovac 3 run in same time");
      }
      setHargatotal(value.length * hargaworkshop);
      setHargagrandtotal(value.length * hargaworkshop);
    }

    // setHargatotal
  };

  const onSearch = (value) => {
    console.log(value);
    if (value == "") {
      alert("Silakan isi kode promo");
      return;
    }

    const payload = {
      kode: value,
      mtd: "CEK",
    };
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: payload,
      contentType: "application/json",
      method: "POST",
    })
      .then((data) => {
        var temp = data.data;
        console.log(temp);
        if (temp.sukses == "OK") {
          alert("Promo valid diskon Rp100,000");
          setHargapromo(100000);
          setHargagrandtotal(hargagrandtotal - 100000);
        } else {
          alert("Promo tidak valid");
        }
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  const simpan = () => {
    // axios.get(`https://primavisiglobalindo.net/demo/conference1/wp-content/plugins/perki/test.php`)
    //     .then(res => {
    //       const persons = res.data;
    //       // this.setState({ persons });
    //       console.log(persons);
    //     })
    const pwd = generator.generate({
      length: 10,
      lowercase: false,
      uppercase: true,
      numbers: true,
      symbols: false,
    });
    if (
      macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
      macamworkshop.indexOf(
        "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"
      ) > -1
    ) {
      alert("Ws 12 and WS Indovac 2 run in same time");
      return;
    }
    if (
      macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
      macamworkshop.indexOf(
        "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"
      ) > -1
    ) {
      alert("Ws 14 and WS Indovac 2 run in same time");
      return;
    }
    if (
      macamworkshop.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)") >
        -1 &&
      macamworkshop.indexOf(
        "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
      ) > -1
    ) {
      alert("Ws 15 and WS Indovac 3 run in same time");
      return;
    }
    if (
      macamworkshop.indexOf(
        "WS 16 (Cardiac CT in Coronary Artery and Beyond)"
      ) > -1 &&
      macamworkshop.indexOf(
        "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
      ) > -1
    ) {
      alert("Ws 16 and WS Indovac 3 run in same time");
      return;
    }
    setDisable(true);
    var idsponsor = localStorage.getItem("loginid");
    console.log("masuk sini simpan", macamworkshop);
    var simposium2 = "";
    if (pilih === 1 || pilih === 3 || pilih === 4) simposium2 = simposium;

    axios({
      method: "POST",
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: {
        firstname: myform.firstname,
        lastname: myform.lastname,
        profession: professionselect,
        fullnamecert: myform.fullname,
        gender: myform.gender,
        placedob: myform.pob,
        address: "",
        country: myform.county,
        province: myform.province,
        city: myform.city,
        email: myform.email,
        password: pwd,
        mobilephone: myform.mobile,
        affiliation: myform.affliliation,
        officemobilephone: myform.officeph,
        simposium: simposium,
        workshopprice: hargaworkshop,
        package: packageselect,
        workshop: macamworkshop,
        payment: "Mid Trans",
        promocode: myform.promocode,
        total: hargagrandtotal,
        mtd: "ADDANGGOTA",
        idsponsor: idsponsor,
        pilih: pilih2,
      },
      contentType: "application/json",
    })
      .then((data) => {
        console.log(data);
        Modal.info({
          title: "This is a notification message",
          content: (
            <div>
              <p>{"Data sudah tersimpan"}</p>
            </div>
          ),
          onOk() {
            history.push("/theme/sponsor");
            // history.push('https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor');

            // /demo/conference1/wp-content/plugins/perki/build/#/theme/perki
          },
        });
      })
      .catch(() => {
        console.log("Internal server error");
      });

    //  axios({
    //   url: 'http://127.0.0.1:8080/api/saveorderstatus',
    //   method: 'POST',
    //   data: payload
    // })
    //   .then((data) => {
    //     // postList: this.state.postList.filter(item => item.post_id != deletePostId)
    //     console.log(idmerchant);
    //     console.log("================================");
    //     loadstatus(idmerchant);
    //     // window.location.reload();
    //     // var data2 = datas.filter(item => item._id != data.data._id);
    //     // setDatas(data2);
    //     // setDatas();
    //     // console.log(datas);
    //     // loadkategori();
    //     // setDatas([data.data,...datas]);
    //     // history.push('/kategori');
    //     // useEffect2();
    //   })
    //   .catch(() => {
    //     console.log('Internal server error');
    //   });
  };

  const handleKlik = (value) => {
    console.log(`selected ${value}`);
  };

  const klikStep1 = () => {
    var emptytext = "";
    console.log(step);
    if (step == "Step1") {
      if (myform.fullname === "") emptytext = emptytext + "full name,";
      if (myform.gender === "") emptytext = emptytext + "gender,";
      if (myform.address === "") emptytext = emptytext + "address,";
      if (myform.email === "") emptytext = emptytext + "email,";
      if (myform.emailconfirm === "") emptytext = emptytext + "email confirm,";
      // if (myform.password==="") emptytext=emptytext+"password,";
      // if (myform.passwordconfirm==="") emptytext=emptytext+"password confirm,";
      if (myform.mobile === "") emptytext = emptytext + "mobile,";
      if (myform.affliliation === "") emptytext = emptytext + "affiliation,";

      if (emptytext.length > 0) {
        Modal.info({
          title: "This is a notification message",
          content: (
            <div>
              <p>{"Silakan " + emptytext + " diisi dulu"}</p>
            </div>
          ),
          onOk() {},
        });
        return;
      }
      const payload = {
        email: myform.email,
        mtd: "CEKEMAIL",
      };
      axios({
        url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
        // url: "http://localhost/perki/kirimdata.php",
        data: payload,
        contentType: "application/json",
        method: "POST",
      })
        .then((data) => {
          var temp = data.data;
          console.log(temp);
          if (temp.sukses == "OK") {
            alert("Email sudah digunakan");
            return;
          } else {
            setStep("Step2");
            return;
          }
        })
        .catch(() => {
          console.log("Internal server error");
        });
    } // }

    if (step == "Step2") {
      if (jumlahworkshop > jumlahworkshopdipilih) {
        alert("You must select more workshop");
        return;
      }
      if (
        macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        macamworkshop.indexOf(
          "WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"
        ) > -1
      ) {
        alert("Ws 12 and WS Indovac 2 run in same time");
        return;
      }
      if (
        macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)") > -1 &&
        macamworkshop.indexOf(
          "WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"
        ) > -1
      ) {
        alert("Ws 14 and WS Indovac 2 run in same time");
        return;
      }
      if (
        macamworkshop.indexOf(
          "WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"
        ) > -1 &&
        macamworkshop.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 15 and WS Indovac 3 run in same time");
        return;
      }
      if (
        macamworkshop.indexOf(
          "WS 16 (Cardiac CT in Coronary Artery and Beyond)"
        ) > -1 &&
        macamworkshop.indexOf(
          "WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"
        ) > -1
      ) {
        alert("Ws 16 and WS Indovac 3 run in same time");
        return;
      }
      simpan();
      // setStep("Step3");return;
      window.scrollTo(0, 0);
    }
  };

  const pilihanku = (value) => {
    console.log(professionselect);
    console.log("pilih", value);
    // if (value===2) {
    //   workshopprice.filter(ch => ch.profession === professionselect).map((item) =>
    //    // setHargatotal(item.price)
    //    console.log("price",item.price)
    //   //  setHargatotal(item.price.replace("IDR ","").replace(",",""))
    //    );

    //   // simposiumprice.filter()
    // }
    setPilih(value);
    if (value == "1") {
      setPilih2("simposium");
    } else if (value == 2) {
      setPilih2("workshop");
    } else if (value == 3) {
      setPilih2("package");
    } else {
      setPilih2("seminar,workshop");
    }

    //  setPilih2(value);
  };
  
  return (
    <>
      {/* <CCard>
        <CCardHeader>
          Exhibition
        </CCardHeader>
        <CCardBody>           */}
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
      ) : phase == "ASTRA" ? (
        <ImageMap
          className="usage-map"
          src={"./astra.jpg"}
          map={mapAreaastra}
          // onMapClick={onMapClick2}
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
          map={mapAreaastra}
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
          map={mapAreaastra}
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
          map={mapAreaastra}
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
          map={mapAreaastra}
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
          map={mapAreaastra}
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
          map={mapAreaastra}
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
      ) : phase == "BAYER" ? (
        <ImageMap
          className="usage-map"
          src={"./bayer.jpg"}
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
      ) : phase == "PRODIA" ? (
        <ImageMap
          className="usage-map"
          src={"./prodia.jpg"}
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
      ) : phase == "INDOMED" ? (
        <ImageMap
          className="usage-map"
          src={"./indomed.jpg"}
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
      {/* </CCardBody>
            // onMapClick={onMapClick}
      </CCard> */}
    </>
  );
};

export default Colors;
