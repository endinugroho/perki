import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import axios from 'axios';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'
import { Stepper } from 'react-form-stepper';
import { Modal,DatePicker,Input,Form, Radio, Select, Button} from 'antd';
import 'antd/dist/antd.css';
import { mixed } from 'yup/lib/locale'
import { useHistory } from "react-router-dom";
import generator from "generate-password";
const { confirm } = Modal;
const FormItem = Form.Item;
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;



const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()
  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{ rgbToHex(color) }</td>
      </tr>
      <tr>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{ color }</td>
      </tr>
      </tbody>
    </table>
    )
}


const onChange = (date, dateString) => {
  console.log(date, dateString);
}

const ThemeColor = ({className, children}) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      {children}
      <ThemeView/>
    </CCol>
  )
}

const Colors = () => {
  const [step, setStep] = useState('Step1');
  const [propinsiselect, setPropinsiselect] = useState('Jawa Timur');
  const [kotaselect, setKotaselect] = useState('Surabaya');
  const [professionselect, setProfessionselect] = useState('Cardiologist');
  const [packageselect, setPackageselect] = useState('');
  const [hargatambahan,setHargatambahan] = useState('');
  const [hargatotal,setHargatotal] = useState('');
  const [hargapromo,setHargapromo] = useState(0);
  const [hargagrandtotal,setHargagrandtotal] = useState('');
  const [hargaservice,setHargaservice] = useState('');
  // const [hargatotal,setHargatotal] = useState('');
  const [macamworkshop,setMacamworkshop] = useState([]);
  const [jumlahworkshop,setJumlahworkshop] = useState(0);
  const [hargaworkshop,setHargaworkshop] = useState("500000");
  const [jumlahworkshopdipilih,setJumlahworkshopdipilih] = useState(0);
  const [pilih,setPilih] = useState(0);
  const [pilih2,setPilih2] = useState(0);
  const [kodevoucher,setKodevoucher] = useState("");
  const [myform, setMyform] = useState({firstname:"",lastname:"",fullname:"",gender:"",pob:"",dob:"",county:"Indonesia",province:"Jawa Timur",city:"Surabaya",email:"",emailconfirm:"",password:"",mobile:"",affliliation:"",officeph:""});
  let history = useHistory();
  const [disable,setDisable] = useState(false);
  const [simposium, setSimposium] = useState("");
  const [ws, setWs] = useState("");
  const [workshopprice,setWorkshopprice] = useState([{profession:"Medical Student",price:"IDR 10,000"},

  {profession:"GP",price:"IDR 300,000"},
  {profession:"Cardiologist",price:"IDR 500,000"},
  {profession:"Other Specialists",price:"IDR 500,000"},
  {profession:"Nurse or Paramedics",price:"IDR 150,000"}]);
  const [idanggota,setIdanggota] = useState("");
  const [nama,setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota,setAnggota] = useState("");
  const [workshopku,setWorkshopku] = useState("");
  const [dataWs, setDataWs] = useState({});
  const [visible, setVisible] = useState(false);

  const changeDataWS = (noUrut) => {
    setVisible(!visible)
    axios
      .get("https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getwsdetil&noUrut="+noUrut)
      .then((res) => {
        // console.log(res);
        setVisible(!visible)
        if(res.data.status == 0 && res.data.master == null && res.data.master == []){
          alert("Mohon Hubungi Admin")
        }else{
          setDataWs(res.data);
          setWs('ws');
        }
      })
      .catch((err) => console.log(err));
  }

  const parseDate = (date) => {
    let isValidDate = Date.parse(date);
    let dateArticle = new Intl.DateTimeFormat("id");
    if (isNaN(isValidDate)) {
      return '-';
    }else{
      return dateArticle.format(new Date(date)) +' '+ new Date(date).getDate() +", "+new Date(date).getFullYear()
    }
  }

  // const [kota,setKota] = useState(
  const [simposiumprice,setSimposiumprice] = useState([{profession:"Medical Student",price:"IDR 10,000"},
  {profession:"GP",price:"IDR 300,000"},
  {profession:"Cardiologist",price:"IDR 500,000"},
  {profession:"Other Specialist",price:"IDR 500,000"},
  {profession:"Nurse or Paramedics",price:"IDR 150,000"}]);


  const [hargapaket,setHargapaket] = useState([
  // {profession:"Cardiologist",package:"-",price:"0"},
  {profession:"Cardiologist",package:"Silver (Symposium+2 workshop*)",price:"IDR 1,200,000",jumlah:2},
  {profession:"Cardiologist",package:"Gold (Symposium+4 workshop*)",price:"IDR 1,800,000",jumlah:4},
  {profession:"Cardiologist",package:"Platinum (Symposium+6 workshop*)",price:"IDR 2,300,000",jumlah:6},
  // {profession:"Other specialists",package:"-",price:"0"},
  {profession:"Other Specialist",package:"Silver (Symposium+2 workshop*)",price:"IDR 1,200,000",jumlah:2},
  {profession:"Other Specialist",package:"Gold (Symposium+4 workshop*)",price:"IDR 1,800,000",jumlah:4},
  {profession:"Other Specialist",package:"Platinum (Symposium+6 workshop*)",price:"IDR 2,300,000",jumlah:6},
  // {profession:"GP",package:"-",price:"0"},
  {profession:"GP",package:"Silver (Symposium+2 workshop*)",price:"IDR 550,000",jumlah:2},
  {profession:"GP",package:"Gold (Symposium+4 workshop*)",price:"IDR 700,000",jumlah:4},
  {profession:"GP",package:"Platinum (Symposium+6 workshop*)",price:"IDR 850,000",jumlah:6},
  // {profession:"Medical Student",package:"-",price:"0"},
  {profession:"Medical Student",package:"Silver (Symposium+2 workshop*)",price:"IDR 250,000",jumlah:2},
  {profession:"Medical Student",package:"Gold (Symposium+4 workshop*)",price:"IDR 300,000",jumlah:4},
  {profession:"Medical Student",package:"Platinum (Symposium+6 workshop*)",price:"IDR 350,000",jumlah:6},
  // {profession:"Nurse or Paramedics",package:"-",price:"0"},
  {profession:"Nurse or Paramedics",package:"Silver (Symposium+2 workshop*)",price:"IDR 225,000",jumlah:2}]);

  const [workshopprof,setWorkshopprof] = useState([
  {profession:"GP",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"GP",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
  {profession:"GP",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
  {profession:"GP",name:"WS 7 (Comprehensive CV Risk Stratification)"},
  {profession:"GP",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
  {profession:"GP",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)"},
  {profession:"GP",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
  {profession:"GP",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},
  {profession:"Cardiologist",name:"WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)"},
  {profession:"Cardiologist",name:"WS 2 (Perioperative Cardiac Consultation)"},
  {profession:"Cardiologist",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"Cardiologist",name:"WS 4 (Cardiac Injury in Chemotherapy Patient)"},
  {profession:"Cardiologist",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
  {profession:"Cardiologist",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
  {profession:"Cardiologist",name:"WS 7 (Comprehensive CV Risk Stratification)"},
  {profession:"Cardiologist",name:"WS 8 (Practical approach to non-invasive ventilation in acute heart failure)"},
  {profession:"Cardiologist",name:"WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"},
  {profession:"Cardiologist",name:"WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"},
  {profession:"Cardiologist",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"},
  {profession:"Cardiologist",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)"},
  {profession:"Cardiologist",name:"WS Indovasc 1 (Early Detection of Chronic Venous Insufficiency)"},
  {profession:"Cardiologist",name:"WS Indovasc 2 (Vascular Doppler US)"},
  {profession:"Cardiologist",name:"WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"},
  {profession:"Other Specialists",name:"WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)"},
  {profession:"Other Specialists",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"Other Specialists",name:"WS 4 (Cardiac Injury in Chemotherapy Patient)"},
  {profession:"Other Specialists",name:"WS 7 (Comprehensive CV Risk Stratification)"},
  {profession:"Other Specialists",name:"WS 8 (Practical approach to non-invasive ventilation in acute heart failure)"},
  {profession:"Other Specialists",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
  {profession:"Other Specialists",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
  {profession:"Other Specialists",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},
  {profession:"Other Specialists",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"},
  {profession:"Other Specialists",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)"},
  {profession:"Nurse or Paramedics",name:"Ws 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"Nurse or Paramedics",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskular di Lini Terdepan: Fokus pada Terapi Trombolitik)"},
  {profession:"Medical Student",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)"},
  {profession:"Medical Student",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)"},
  {profession:"Medical Student",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)"},
  {profession:"Medical Student",name:"WS 7 (Comprehensive CV Risk Stratification)"},
  {profession:"Medical Student",name:"WS 9 (Practical Approach in Emergency Arrythmias)"},
  {profession:"Medical Student",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)"},
  {profession:"Medical Student",name:"WS 11 (Rapid Echocardiography in Emergency Setting)"},
  {profession:"Medical Student",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)"},


]);

useEffect(() => {
  var idsponsor = localStorage.getItem("loginid");
  setIdsponsor(idsponsor);
  var anggotast = localStorage.getItem("status");
  if (anggotast=="ANGGOTA") {
    setAnggota(true) } else setAnggota(false);
  setNama(localStorage.getItem("nama"))

var mtd2 ="";
if (anggotast=="ANGGOTA") {
  mtd2 = "ANGGOTA2";
} else
{
  mtd2 = "ANGGOTA";
}


  axios({
    url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
    // url: "http://localhost/perki/kirimdata.php",
    data: {mtd: mtd2,idsponsor:idsponsor},
    contentType: "application/json",
    method: 'POST',
  })
    .then((data) => {
      // var temp = data.data;
      console.log(data.data[0]);
      setAnggota(data.data[0]);
      setWorkshopku(data.data[0].workshop);
      if (data.data[0].workshop!="")
      {
        if (data.data[0].workshop.indexOf("WS 1 ")>-1)
        {
          setWs("1");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 2 ")>-1)
        {
          setWs("2");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 3 ")>-1)
        {
          setWs("3");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 4 ")>-1)
        {
          setWs("4");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 5 ")>-1)
        {
          setWs("5");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 6 ")>-1)
        {
          setWs("6");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 7 ")>-1)
        {
          setWs("7");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 8 ")>-1)
        {
          setWs("8");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 9 ")>-1)
        {
          setWs("9");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 10 ")>-1)
        {
          setWs("10");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 11 ")>-1)
        {
          setWs("11");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 12 ")>-1)
        {
          setWs("12");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 13 ")>-1)
        {
          setWs("13");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 14 ")>-1)
        {
          setWs("14");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 15 ")>-1)
        {
          setWs("15");
          return;
        }
        if (data.data[0].workshop.indexOf("WS 16 ")>-1)
        {
          setWs("16");
          return;
        }
        if (data.data[0].workshop.indexOf("WS Indovasc 1 ")>-1)
        {
          setWs("1A");
          return;
        }
        if (data.data[0].workshop.indexOf("WS Indovasc 2 ")>-1)
        {
          setWs("1B");
          return;
        }
        if (data.data[0].workshop.indexOf("WS Indovasc 3 ")>-1)
        {
          setWs("1C");
          return;
        }

      }
    })
    .catch(() => {
      console.log('Internal server error');
    });

}, [])



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

    setProfessionselect(value);
    setPackageselect("");
    setMacamworkshop([]);
    setJumlahworkshop(0);
    setJumlahworkshopdipilih(0);
    setPackageselect("");
    setPilih(0)
   setHargatotal(0);
   setHargagrandtotal(0);

    workshopprice.filter(ch => ch.profession === value).map((item) =>
      setHargaworkshop(item.price.replace("IDR ","").replace(",",""))
    );
    // setHargaworkshop
  };

  const handleChange4 = (value) => {
    console.log(`selected ${value}`);

    setPackageselect(value);
    setHargatotal(value.split("#")[1]);
    setHargagrandtotal(value.split("#")[1]);
    setJumlahworkshop(value.split("#")[2]);
    console.log(value);
    if (value.substr(0,1)=="S") {
      setPilih2("packagesilver");
    } else if (value.substr(0,1)=="G") {
      setPilih2("packagegold");
    } else {
      setPilih2("packageplatinum");

    }
  };

  const handleChange6 = (value) => {
    console.log(`selected ${value}`);

    setHargaservice(value);
    setHargagrandtotal(parseInt(value)+parseInt(hargatotal.replace("IDR ","").replace(",","").replace(",",""))+parseInt(hargatambahan));

  };


  const handleChange5 = (value) => {
    console.log(`selected ${value}`);

    // setPackageselect(value);
    // setHargatotal(value.split("#")[1]);
    if (pilih==4) value=[value];
    console.log("workshop",value);
    setMacamworkshop(value);

    setJumlahworkshopdipilih(value.length);

    if (pilih===3)
    {
      if ((value.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (value.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1)) {
        alert("Ws 12 and WS Indovac 2 run in same time");
      }
      if ((value.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (value.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1)) {
        alert("Ws 14 and WS Indovac 2 run in same time");
      }
      if ((value.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1) && (value.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
        alert("Ws 15 and WS Indovac 3 run in same time");
      }
      if ((value.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) && (value.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
        alert("Ws 16 and WS Indovac 3 run in same time");
      }
      if (value.length>jumlahworkshop)
      {
        setHargatambahan((value.length-jumlahworkshop)*hargaworkshop);
        setHargagrandtotal(parseInt(hargatotal.replace("IDR ","").replace(",","").replace(",",""))+(value.length-jumlahworkshop)*hargaworkshop);
      } else
      {
        setHargatambahan(0);
        setHargagrandtotal(parseInt(hargatotal.replace("IDR ","").replace(",","").replace(",","")));
      }
    }

    if (pilih==2)
    {
      if ((value.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (value.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1)) {
        alert("Ws 12 and WS Indovac 2 run in same time");
      }
      if ((value.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (value.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1)) {
        alert("Ws 14 and WS Indovac 2 run in same time");
      }
      if ((value.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1) && (value.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
        alert("Ws 15 and WS Indovac 3 run in same time");
      }
      if ((value.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) && (value.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
        alert("Ws 16 and WS Indovac 3 run in same time");
      }
      setHargatotal(value.length*hargaworkshop);
      setHargagrandtotal(value.length*hargaworkshop);
    }

    // setHargatotal

  };

  const onSearch = value => {
    console.log(value);
    if (value=="") {
      alert("Silakan isi kode promo");return;
    }

    const payload = {
      kode : value,
      mtd:"CEK"
    }
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: payload,
      contentType: "application/json",
      method: 'POST',
    })
      .then((data) => {
        var temp = data.data;
        console.log(temp);
        if (temp.sukses=="OK") {
          alert("Promo valid diskon Rp100,000");
          setHargapromo(100000);
          setHargagrandtotal(hargagrandtotal-100000);
        } else {
          alert("Promo tidak valid");
        }
      })
      .catch(() => {
        console.log('Internal server error');
      });

  }
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
    symbols: false
  });
  if ((macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (macamworkshop.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1)) {
    alert("Ws 12 and WS Indovac 2 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (macamworkshop.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1)) {
    alert("Ws 14 and WS Indovac 2 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1) && (macamworkshop.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
    alert("Ws 15 and WS Indovac 3 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) && (macamworkshop.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
    alert("Ws 16 and WS Indovac 3 run in same time");return;
  }
  setDisable(true);
  var idsponsor = localStorage.getItem('loginid');
  console.log("masuk sini simpan",macamworkshop);
var simposium2="";
if (pilih===1 || pilih===3 || pilih===4) simposium2=simposium;

 axios({
  method: "POST",
  url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
  // url: "http://localhost/perki/kirimdata.php",
  data: {"firstname":myform.firstname,"lastname":myform.lastname,"profession":professionselect,"fullnamecert":myform.fullname,"gender":myform.gender,"placedob":myform.pob,"address":"","country":myform.county,"province":myform.province,"city":myform.city,"email":myform.email,"password":pwd,"mobilephone":myform.mobile,"affiliation":myform.affliliation,"officemobilephone":myform.officeph,"simposium":simposium,"workshopprice":hargaworkshop,"package":packageselect,"workshop":macamworkshop,"payment":"Mid Trans","promocode":myform.promocode,"total":hargagrandtotal,"mtd":'ADDANGGOTA',"idsponsor":idsponsor,"pilih":pilih2},
  contentType: "application/json",
})
  .then((data) => {
    console.log(data);
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>{"Data sudah tersimpan"}</p>
        </div>
      ),
      onOk() {
        history.push('/theme/sponsor');
        // history.push('https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor');

        // /demo/conference1/wp-content/plugins/perki/build/#/theme/perki

      },
    });
})
  .catch(() => {
    console.log('Internal server error');
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


}

const handleKlik = (value) => {
  console.log(`selected ${value}`);

}

  const klikStep1 = () => {
var emptytext="";
console.log(step);
if (step=="Step1")
{
    if (myform.fullname==="") emptytext=emptytext+"full name,";
    if (myform.gender==="") emptytext=emptytext+"gender,";
    if (myform.address==="") emptytext=emptytext+"address,";
    if (myform.email==="") emptytext=emptytext+"email,";
    if (myform.emailconfirm==="") emptytext=emptytext+"email confirm,";
    // if (myform.password==="") emptytext=emptytext+"password,";
    // if (myform.passwordconfirm==="") emptytext=emptytext+"password confirm,";
    if (myform.mobile==="") emptytext=emptytext+"mobile,";
    if (myform.affliliation==="") emptytext=emptytext+"affiliation,";

    if (emptytext.length>0) {
      Modal.info({
        title: 'This is a notification message',
        content: (
          <div>
            <p>{"Silakan "+emptytext+" diisi dulu"}</p>
          </div>
        ),
        onOk() {},
      });
      return;

    }
    const payload = {
      email : myform.email,
      mtd:"CEKEMAIL"
    }
    axios({
      url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: payload,
      contentType: "application/json",
      method: 'POST',
    })
      .then((data) => {
        var temp = data.data;
        console.log(temp);
        if (temp.sukses=="OK") {
          alert("Email sudah digunakan");
          return;
        } else {
          setStep("Step2");return;

        }

      })
      .catch(() => {
        console.log('Internal server error');
      });


    }    // }

if (step=="Step2")
{
  if (jumlahworkshop>jumlahworkshopdipilih) {
    alert("You must select more workshop");return;
  }
  if ((macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (macamworkshop.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1)) {
    alert("Ws 12 and WS Indovac 2 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) && (macamworkshop.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1)) {
    alert("Ws 14 and WS Indovac 2 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1) && (macamworkshop.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
    alert("Ws 15 and WS Indovac 3 run in same time");return;
  }
  if ((macamworkshop.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) && (macamworkshop.indexOf("WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)")>-1)) {
    alert("Ws 16 and WS Indovac 3 run in same time");return;
  }
  simpan();
// setStep("Step3");return;
  window.scrollTo(0, 0);
}


  }

const pilihanku = (value) =>
{
  console.log(professionselect);
  console.log("pilih",value);
  if (value===1) {
    simposiumprice.filter(ch => ch.profession === professionselect).map((item) =>
     // setHargatotal(item.price)
    //  console.log("price",item.price)
     {
       setHargatotal(item.price.replace("IDR ","").replace(",",""));
     setHargagrandtotal(item.price.replace("IDR ","").replace(",",""));
    }
     );
     setMacamworkshop([]);
     setJumlahworkshop(0);
     setJumlahworkshopdipilih(0);
     setPackageselect("");


    // simposiumprice.filter()
  }
  if (value===2) {
    setPackageselect("");
  }

  if (value===4) {
    var hargasimpo = 0;
    var hargaws = 0
    simposiumprice.filter(ch => ch.profession === professionselect).map((item) =>
     {
      hargasimpo = parseInt(item.price.replace("IDR ","").replace(",",""));
    }
     );
    workshopprice.filter(ch => ch.profession === professionselect).map((item) =>
    {
     hargaws = parseInt(item.price.replace("IDR ","").replace(",",""));
   }
    );

     setPackageselect("");
    setHargatotal(hargasimpo+hargaws);
    setHargagrandtotal(hargasimpo+hargaws);
 }


  // if (value===2) {
  //   workshopprice.filter(ch => ch.profession === professionselect).map((item) =>
  //    // setHargatotal(item.price)
  //    console.log("price",item.price)
  //   //  setHargatotal(item.price.replace("IDR ","").replace(",",""))
  //    );

  //   // simposiumprice.filter()
  // }
  setPilih(value);
  if (value=="1")
  {
    setPilih2("simposium");
  } else if (value==2) {
    setPilih2("workshop");
  } else if (value==3) {
    setPilih2("package");
  } else {
    setPilih2("seminar,workshop");
  }



    //  setPilih2(value);

}
  return (
    <>
      <CCard>
      <CCardHeader style={{fontSize:"25px"}}>
          {/* <div style={{fontSize:"25px",color:"rgb(1,77,136)"}}>Symsposium </div><div style={{fontSize:"12px"}}>(Klik tombol di bawah ini)</div> */}
          <span className="badge badge-info">
              Workshop
          </span>
          <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/register.png" className="visible-desktop" width="300" style={{float: 'right', position: 'relative', right: '-20px', width: '250px'}}/>
        </CCardHeader>
        <CCardBody>
          <CRow>
          {/* <Button type="primary" onClick={()=>setWs("1")} style={{marginLeft:"2px", marginBottom:"5px"}}>1</Button>
          <Button type="primary" onClick={()=>setWs("2")} style={{marginLeft:"2px", marginBottom:"5px"}}>2</Button>
          <Button type="primary" onClick={()=>setWs("3")} style={{marginLeft:"2px", marginBottom:"5px"}}>3</Button>
          <Button type="primary" onClick={()=>setWs("4")} style={{marginLeft:"2px", marginBottom:"5px"}}>4</Button>
          <Button type="primary" onClick={()=>setWs("5")} style={{marginLeft:"2px", marginBottom:"5px"}}>5</Button>
          <Button type="primary" onClick={()=>setWs("6")} style={{marginLeft:"2px", marginBottom:"5px"}}>6</Button>
          <Button type="primary" onClick={()=>setWs("7")} style={{marginLeft:"2px", marginBottom:"5px"}}>7</Button>
          <Button type="primary" onClick={()=>setWs("8")} style={{marginLeft:"2px", marginBottom:"5px"}}>8</Button>
          <Button type="primary" onClick={()=>setWs("9")} style={{marginLeft:"2px", marginBottom:"5px"}}>9</Button>
          <Button type="primary" onClick={()=>setWs("10")} style={{marginLeft:"2px", marginBottom:"5px"}}>A</Button>
          <Button type="primary" onClick={()=>setWs("11")} style={{marginLeft:"2px", marginBottom:"5px"}}>B</Button>
          <Button type="primary" onClick={()=>setWs("12")} style={{marginLeft:"2px", marginBottom:"5px"}}>C</Button>
          <Button type="primary" onClick={()=>setWs("13")} style={{marginLeft:"2px", marginBottom:"5px"}}>D</Button>
          <Button type="primary" onClick={()=>setWs("14")} style={{marginLeft:"2px", marginBottom:"5px"}}>E</Button>
          <Button type="primary" onClick={()=>setWs("15")} style={{marginLeft:"2px", marginBottom:"5px"}}>F</Button>
          <Button type="primary" onClick={()=>setWs("16")} style={{marginLeft:"2px", marginBottom:"5px"}}>G</Button>
          <Button type="primary" onClick={()=>setWs("1A")} style={{marginLeft:"2px", marginBottom:"5px"}}>1A</Button>
          <Button type="primary" onClick={()=>setWs("1B")} style={{marginLeft:"2px", marginBottom:"5px"}}>1B</Button>
          <Button type="primary" onClick={()=>setWs("1C")} style={{marginLeft:"2px", marginBottom:"5px"}}>1C</Button> */}
          {workshopku.indexOf("WS 1 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("1")
            changeDataWS(1)
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 1</Button> : null
          }
          {/* <Button type="primary" onClick={()=>setWs("1")} style={{marginLeft:"2px", marginBottom:"5px"}}>1</Button> */}
          {workshopku.indexOf("WS 2 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("2")
            changeDataWS(2)
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 2</Button> : null
          }
          {workshopku.indexOf("WS 3 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("3");
            changeDataWS(3);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 3</Button> : null
        }
          {workshopku.indexOf("WS 4 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("4");
            changeDataWS(4);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 4</Button> : null
        }
          {workshopku.indexOf("WS 5 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("5");
            changeDataWS(5);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 5</Button> : null
        }
          {workshopku.indexOf("WS 6 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("6");
            changeDataWS(6);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 6</Button> : null
        }
          {workshopku.indexOf("WS 7 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("7");
            changeDataWS(7);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 7</Button> : null
        }
          {workshopku.indexOf("WS 8 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("8");
            changeDataWS(8);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 8</Button> : null
        }
          {workshopku.indexOf("WS 9 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("9");
            changeDataWS(9);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 9</Button> : null
        }
          {workshopku.indexOf("WS 10 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("10");
            changeDataWS(10);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 10</Button> : null
        }
          {workshopku.indexOf("WS 11 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("11");
            changeDataWS(11);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 11</Button> : null
        }
          {workshopku.indexOf("WS 12 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("12");
            changeDataWS(12);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 12</Button> : null
        }
          {workshopku.indexOf("WS 13 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("13");
            changeDataWS(13);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 13</Button> : null
        }
          {workshopku.indexOf("WS 14 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("14");
            changeDataWS(14);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 14</Button> : null
        }
          {workshopku.indexOf("WS 15 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("15");
            changeDataWS(15);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 15</Button> : null
        }
          {workshopku.indexOf("WS 16 ")>-1 ?
          <Button type="primary" onClick={()=>{
            setWs("16");
            changeDataWS(16);
          }} style={{marginLeft:"2px", marginBottom:"5px"}}>WS 16</Button> : null
        }
          {workshopku.indexOf("WS Indovasc 1 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("1A")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS Indo 1</Button> : null
        }
          {workshopku.indexOf("WS Indovasc 2 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("1B")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS Indo 2</Button> : null
        }
          {workshopku.indexOf("WS Indovasc 3 ")>-1 ?
          <Button type="primary" onClick={()=>setWs("1C")} style={{marginLeft:"2px", marginBottom:"5px"}}>WS Indo 3</Button> : null
        }
          </CRow>
          <CRow>
          { ws == "ws" ? (
              <>
                {/* Tabel Master */}
                <table
                  width="70%"
                  style={{
                    marginLeft: "30px",
                    textAlign: 'center',
                    boxShadow: '0px 2px 16px -8px #000000',
                    borderRadius: '18px',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    position: 'relative',
                    left: '50%',
                    transform: 'translate(-54%, 10px)',
                  }}
                >
                  <tbody>
                    <tr style={{ border: '1px solid #c2c2c2', }}>
                      <td
                        width="146"
                        style={{background: "#0075bc", color: '#fff'}}
                      >
                        <p><b>Workshop {dataWs.master.serial_number}</b></p>
                      </td>
                      <td
                        colspan="2"
                        width="487"
                        style={{background: "#0075bc", color: '#fff'}}
                      >
                        <p>
                          <b>{dataWs.master.title}</b>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ border: '1px solid #c2c2c2', }}>
                      <td
                        width="146"
                        style={{background: "#0075bc", color: '#fff'}}
                      >
                        <p>
                          <b>
                            Topic
                          </b>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        width="487"
                      >
                        <p>
                          <b>
                            {dataWs.master.topic}
                          </b>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ border: '1px solid #c2c2c2', }}>
                      <td
                        width="146"
                        style={{background: "#0075bc", color: '#fff'}}
                      >
                        <p>
                          <b>
                            Day, date
                          </b>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        width="487"
                      >
                        <p>
                          <b>
                            {dataWs.master.day}, {parseDate(dataWs.master.date)}, Pk {dataWs.master.time_range}
                            {/* Saturday, November 27<sup>th</sup> 2021 , Pk 12.30 -
                            15.30WIB */}
                          </b>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ border: '1px solid #c2c2c2', }}>
                      <td
                        width="146"
                        style={{background: "#0075bc", color: '#fff'}}
                      >
                        <p>
                          <b>
                            Course Director
                          </b>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        width="487"
                      >
                        <p>
                          <b>
                            {dataWs.master.course_director}
                          </b>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ border: '1px solid #c2c2c2', }}>
                      <td
                        width="146"
                        style={{background: "#0075bc", color: '#fff'}}
                      >
                        <p>
                         <b>
                            PIC
                          </b>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        width="487"
                      >
                        <p><b>{dataWs.master.pic}</b></p>
                      </td>
                    </tr>
                    <tr style={{ border: '1px solid #c2c2c2', }}>
                      <td
                        width="146"
                        style={{background: "#0075bc", color: '#fff'}}
                      >
                        <p><b>Moderator</b></p>
                      </td>
                      <td
                        colspan="2"
                        width="487"
                      >
                        <p><b>{dataWs.master.moderator}</b></p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Tabel Detil Aktifitas */}
                <table
                  width="80%"
                  style={{
                    marginTop: "25px",
                    marginLeft: "30px",
                    borderCollapse: "separate",
                    textAlign: "center",
                    borderSpacing: "0.5em 0.5em",
                    position: 'relative',
                    left: '50%',
                    transform: 'translate(-54%, 10px)',
                  }}
                >
                  <tbody>
                    {
                      dataWs.data && (
                        <>
                          <tr style={{ border: "none" }}>
                            <td
                              style={{
                                backgroundColor: "#0075BC",
                                color: "white",
                                borderRadius: "18px",
                                boxShadow: "0px 1px 2px 0px #5a5a5a",
                              }}
                              width="146"
                            >
                              <b>TIME</b>
                            </td>
                            <td
                              width="284"
                              style={{
                                backgroundColor: "#0075BC",
                                color: "white",
                                borderRadius: "18px",
                                boxShadow: "0px 1px 2px 0px #5a5a5a",
                              }}
                            >
                              <p>
                                <strong>
                                  Topic
                                </strong>
                              </p>
                            </td>
                            <td
                              width="203"
                              style={{
                                backgroundColor: "#0075BC",
                                color: "white",
                                borderRadius: "18px",
                                boxShadow: "0px 1px 2px 0px #5a5a5a",
                              }}
                            >
                              <p>
                                <strong>
                                  Speakers
                                </strong>
                              </p>
                            </td>
                          </tr>
                          {
                            dataWs.data.map((row, i) => {
                              return (
                                <tr style={{ border: "none" }} key={i}>
                                  <td
                                    style={{
                                      backgroundColor: "#0075BC",
                                      color: "white",
                                      borderRadius: "18px",
                                      boxShadow: "0px 1px 2px 0px #5a5a5a",
                                    }}
                                    width="146"
                                  >
                                    <p>{row.time_range}</p>
                                  </td>
                                  <td
                                    width="284"
                                    style={{
                                      borderRadius: "18px",
                                      boxShadow: "0px 1px 2px 0px #5a5a5a",
                                    }}
                                  >
                                    <p>{row.topic}</p>
                                  </td>
                                  <td
                                    width="203"
                                    style={{
                                      borderRadius: "18px",
                                      boxShadow: "0px 1px 2px 0px #5a5a5a",
                                    }}
                                  >
                                    <p>{row.speaker}</p>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </>
                      )
                    }
                  </tbody>
                </table>
                <p>&nbsp;</p>
              </>
          ) : ''}
          {ws=="1A" ?
            <div><p>WORKSHOP I : Vein Disorders</p>
            <table style={{marginLeft:"30px", borderCollapse: "separate", textAlign: "center", borderSpacing: "0.5em 0.5em",}}>
            <tbody>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>Audience</p>
            </td>
            <td colspan="2" width="585">
            <p>Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>Theme</p>
            </td>
            <td colspan="2" width="585">
            <p>Early Detection of Chronic Venous Insufficiency</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>Day/Date</p>
            </td>
            <td colspan="2" width="585">
            <p>Friday, December 10, 2021</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>PIC</p>
            </td>
            <td colspan="2" width="585">
            <p>dr. Novi Anggriyani, SpJP</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Device</p>
            </td>
            <td colspan="2" width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Sponsor</p>
            </td>
            <td colspan="2" width="70%">
            <p>Biolitec</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Moderator</p>
            </td>
            <td colspan="2" width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>TIME</p>
            </td>
            <td width="364">
            <p>TOPIK</p>
            </td>
            <td width="221">
            <p>SPEAKER</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.00-08.20</strong></p>
            </td>
            <td width="364">
            <p>Lower Extremity Veins Anatomy &amp; Pathophysiology in Chronic</p>
            <p>Venous Insufficiency</p>
            </td>
            <td width="221">
            <p>Novi Kurnianingsih, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.20-08.40</strong></p>
            </td>
            <td width="364">
            <p>How to Identify, Stratify and Diagnosis Chronic Venous</p>
            <p>Insufficiency</p>
            </td>
            <td width="221">
            <p>Christine Anita, dr., Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.40-09.00</strong></p>
            </td>
            <td width="364">
            <p>Management of CVI with Lifestyle Modification, Medical &amp;</p>
            <p>Compression Therapy</p>
            </td>
            <td width="221">
            <p>Sidhi Laksono, Sp.JP</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.00-09.20</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.20-09.30</strong></p>
            </td>
            <td width="364">
            <p>Coffee Break</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>&nbsp;</p>
            </td>
            <td width="364">
            <p>&nbsp;</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.30-09.50</strong></p>
            </td>
            <td width="364">
            <p>Modalities in Management in Chronic Venous Insufficiency: Focusing in the Safety and Efficacy of Endovenous Laser</p>
            <p>Ablation</p>
            </td>
            <td width="221">
            <p>Dr. J. Nugroho E. Putranto, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.50-10.10</strong></p>
            </td>
            <td width="364">
            <p>What and How EVLT Works : From A to Z</p>
            </td>
            <td width="221">
            <p>Taofan, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.10-10.30</strong></p>
            </td>
            <td width="364">
            <p>Case 1 : CVI Manageable with Lifestyle Modification &amp;</p>
            <p>Compression Therapy</p>
            </td>
            <td width="221">
            <p>Nurul Rahayuningrum, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.30-10.50</strong></p>
            </td>
            <td width="364">
            <p>Case 2 : CVI with Complication of Venous Ulcer</p>
            </td>
            <td width="221">
            <p>Novi Anggriyani, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.50-11.15</strong></p>
            </td>
            <td width="364">
            <p>Case 3 : EVLT in CVI with Accessories Veins as the Culprit</p>
            </td>
            <td width="221">
            <p>M. Reza J. Pasciolly, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>11.15-11.45</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>11.45-13.00</strong></p>
            </td>
            <td width="364">
            <p>Lunch Break &amp; Friday Praying</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>&nbsp;</p>
            </td>
            <td width="364">
            <p>&nbsp;</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>13.00-13.30</strong></p>
            </td>
            <td width="364">
            <p>How to prepare patient, operator and device (Video)</p>
            </td>
            <td width="221">
            <p>Suci Indriani, dr., SpJP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>13.30-14.00</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>14.00-14.30</strong></p>
            </td>
            <td width="364">
            <p>All about EVLT procedure</p>
            </td>
            <td width="221">
            <p>Vito A. Damay, dr., SpJP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>14.30-15.00</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>15.00-15.30</strong></p>
            </td>
            <td width="364">
            <p>All about post procedure EVLT</p>
            </td>
            <td width="221">
            <p>Novi Anggriyani, dr., Sp.JP(K)</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>15.30-16.00</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            :
            ws=="1B" ?
            <div><p>WORKSHOP 2 : VASCULAR DOPPLER ULTRASOUND</p>
            <table style={{marginLeft:"30px", borderCollapse: "separate", textAlign: "center", borderSpacing: "0.5em 0.5em",}}>
            <tbody>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Audience</p>
            </td>
            <td width="70%">
            <p>Cardiologist</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Theme</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Day / Date</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>PIC</p>
            </td>
            <td width="70%">
            <p>dr. Suci Indriani, SpJP</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Device</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Sponsor</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Moderator</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p>
            <table style={{marginLeft:"30px", borderCollapse: "separate", textAlign: "center", borderSpacing: "0.5em 0.5em",}}>
            <tbody>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>TIME</p>
            </td>
            <td width="35%">
            <p>TOPIK</p>
            </td>
            <td width="35%">
            <p>SPEAKER</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.00-08.10</strong></p>
            </td>
            <td width="364">
            <p>Re-registration, pretest</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.10-08.15</strong></p>
            </td>
            <td width="364">
            <p>Opening and Introduction</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.15-08.35</strong></p>
            </td>
            <td width="364">
            <p>Basic Principals of Vascular Doppler Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.35-08.55</strong></p>
            </td>
            <td width="364">
            <p>How to Diagnose Lower Peripheral Arterial Disease Using</p>
            <p>Doppler Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.55-09.15</strong></p>
            </td>
            <td width="364">
            <p>Evaluation Chronic Venous Insufficiency Using Doppler</p>
            <p>Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.15-09.35</strong></p>
            </td>
            <td width="364">
            <p>Deep Vein vs Superficial Vein Thrombosis</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.35-10.05</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.05-10.20</strong></p>
            </td>
            <td width="364">
            <p>Coffee Break</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>&nbsp;</p>
            </td>
            <td width="364">
            <p>&nbsp;</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.20-10.40</strong></p>
            </td>
            <td width="364">
            <p>Evaluation of Upper Extremities Pathology ( Arteries &amp; Vein)</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.40-11.00</strong></p>
            </td>
            <td width="364">
            <p>AV Fistula Assessment (preparation &amp; surveillance)</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>11.00-11.20</strong></p>
            </td>
            <td width="364">
            <p>Evaluation of Carotid Artery Using Doppler Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>11.20-11.40</strong></p>
            </td>
            <td width="364">
            <p>Pseudoaneurysm vs AV Fistula Assessment</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>11.40-12.00</strong></p>
            </td>
            <td width="364">
            <p>Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>12.00-13.00</strong></p>
            </td>
            <td width="364">
            <p>LUNCH BREAK &amp; FRIDAY PRAYING</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p>&nbsp;</p>
            </td>
            <td width="364">
            <p>&nbsp;</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>13.00-14.00</strong></p>
            </td>
            <td width="364">
            <p>Video and Discussion : Lower Artery and Vein Doppler</p>
            <p>Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>14.00-15.00</strong></p>
            </td>
            <td width="364">
            <p>Video and Discussion : Carotid Doppler Ultrasound</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>15.00-15.50</strong></p>
            </td>
            <td width="364">
            <p>Video and Discussion : AV Fistula</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>15.50-16.00</strong></p>
            </td>
            <td width="364">
            <p>Post test and closing</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div>
            : ws=="1C" ?
            <div><p>WORKSHOP 3 : PAD Management</p>
            <table style={{marginLeft:"30px", borderCollapse: "separate", textAlign: "center", borderSpacing: "0.5em 0.5em",}}>
            <tbody>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Audience</p>
            </td>
            <td width="70%">
            <p>General Practitioner</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>&nbsp;</p>
            <p>Theme</p>
            </td>
            <td width="70%">
            <p>A - Z Peripheral Management : From Patient Selection to</p>
            <p>Therapy</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Day / Date</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>PIC</p>
            </td>
            <td width="70%">
            <p>dr. Vito Anggarino Damay, SpJP(K), M.Kes</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Device</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Sponsor</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>Moderator</p>
            </td>
            <td width="70%">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p>
            <table style={{marginLeft:"30px", borderCollapse: "separate", textAlign: "center", borderSpacing: "0.5em 0.5em",}}>
            <tbody>
            <tr style={{border: "none"}}>
            <td width="20%">
            <p>TIME</p>
            </td>
            <td width="35%">
            <p>TOPIK</p>
            </td>
            <td width="35%">
            <p>SPEAKER</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.00-08.20</strong></p>
            </td>
            <td width="364">
            <p>Practical Aspect of Peripheral Artery Disease : Spectrum and</p>
            <p>Definition</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.20-08.35</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>08.40-09.00</strong></p>
            </td>
            <td width="364">
            <p>Clinical Anatomy and Pathomechanism of Most Common PAD:</p>
            <p>From Basic to Bedside</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.00-09.20</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.20-09.40</strong></p>
            </td>
            <td width="364">
            <p>Updated PAD Treatment: How about Cilostazol, Oral</p>
            <p>Thrombolytic and " PAD Cocktails"</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>09.40-09.55</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.00-10.20</strong></p>
            </td>
            <td width="364">
            <p>Coffee Break</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.20-10.40</strong></p>
            </td>
            <td width="364">
            <p>Managing Claudicatio Intermitten in Clinical Practice</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>10.40-11.55</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>11.00-11.20</strong></p>
            </td>
            <td width="364">
            <p>Imaging Interpretation of Lower and Upper Extremity AD</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>11.20-11.35</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>11.40-12.00</strong></p>
            </td>
            <td width="364">
            <p>The Role of Peripheral Intervention in PAD with Chronic Ulcer</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>12.00-12.15</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>12.20-13.00</strong></p>
            </td>
            <td width="364">
            <p>Lunch Break</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>13.00-13.15</strong></p>
            </td>
            <td width="364">
            <p>Case Presentation: Peripheral Artery Disease in Pandemic Era</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>13.15-13.30</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>13.30-13.50</strong></p>
            </td>
            <td width="364">
            <p>Managing Critical Limb Ischemia in Daily Practice</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>13.50-14.05</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>16.10-16.30</strong></p>
            </td>
            <td width="364">
            <p>UPDATE management on ALI</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>16.10-16.25</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>16.30-16.50</strong></p>
            </td>
            <td width="364">
            <p>Periprocedure Management of Limb Threatening PAD</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>16.50-17.05</strong></p>
            </td>
            <td width="364">
            <p>Interactive Discussion</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>17.10-17.30</strong></p>
            </td>
            <td width="364">
            <p>Recorded Case on PAD Intervention or Interactive PTA CASE</p>
            <p>Presentation</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            <tr style={{border: "none"}}>
            <td width="80">
            <p><strong>17.30-17.45</strong></p>
            </td>
            <td width="364">
            <p>All speaker "Take Home Message"</p>
            </td>
            <td width="221">
            <p>&nbsp;</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p></div> : null
           }

          </CRow>
        </CCardBody>
      </CCard>

</>
  )
}

export default Colors
