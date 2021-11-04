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
  const [hari,setHari] = useState("");
  const [meetingid1,setMeetingid1] = useState("5612879626");
  const [meetingid2,setMeetingid2] = useState("");
  const [meetingid3,setMeetingid3] = useState("");
  const [meetingid4,setMeetingid4] = useState("");
  const [meetingid5,setMeetingid5] = useState("");
  const [meetingid6,setMeetingid6] = useState("");
  const [meetingid7,setMeetingid7] = useState("");
  const [meetingid8,setMeetingid8] = useState("");
  const [meetingid9,setMeetingid9] = useState("");
  const [meetingid10,setMeetingid10] = useState("");
  const [idanggota,setIdanggota] = useState("");
  const [nama,setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota,setAnggota] = useState("");
  const [workshopku,setWorkshopku] = useState("");

  // const [kota,setKota] = useState(


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
    })
    .catch(() => {
      console.log('Internal server error');
    });

}, [])

const openInNewTab = (url,meetingidku) => {
  window.location.href = url;

  // const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  // if (newWindow) newWindow.opener = null
  localStorage.setItem("meetingid",meetingidku);
}


// const lihatzoom = (meetingidku) => {
//   // localStorage.setItem("meetingid",meetingidku);
//   openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/zoom/12345');
// }


    //  setPilih2(value);


  return (
    <>
      <CCard>
        <CCardHeader >
          <div style={{fontSize:"25px",color:"rgb(1,77,136)"}}>Symposium </div><div style={{fontSize:"12px"}}>(Klik tombol di bawah ini)</div>
        </CCardHeader>
        <CCardBody>
          <CRow>
          {anggota.simposium !="" ?
            <div>
            <Button type="primary" onClick={()=>setHari("PERTAMA")} style={{marginLeft:"30px"}}>Day 1</Button>
            <Button type="primary" onClick={()=>setHari("KEDUA")} style={{marginLeft:"2px"}}>Day 2</Button>
            <Button type="primary" onClick={()=>setHari("KETIGA")} style={{marginLeft:"2px"}}>Day 3</Button>
            </div>
            : null

          }
          </CRow>
          <CRow>
          {hari=="PERTAMA" ?
          <div><p><strong>&nbsp;</strong></p>
          <p style={{marginLeft:"30px", fontSize:"25px"}}><b>DAY-1: Friday, 10 December 2021</b></p>
          <table width="90%" style={{marginLeft:"30px", border: "1px solid rgb(1,77,136)"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><b>TIME</b></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>Warm-Up Session</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>BRAINSTROMING, A NEW PERSPECTIVE IN</strong></p>
          <p><strong>CARDIONEUROLOGY</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>DRUG INTERACTION</strong></p>
          <p><strong>&nbsp;</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(08.00 &ndash; 08.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Heart-Brain Axis: The Neuroscience Aspects,</strong></p>
          <p><strong>More Than Just Issues</strong></p>
          <p><em>Speaker: tba</em></p>
          <table style={{borderCollapse:"collapse", width: "124.652px"}} border="0">
<tbody>
<tr style={{border: "1px solid rgb(1,77,136)"}}>
<td style={{width: "228px"}} colspan="3"><b>Zoom data login</b></td>
</tr>
{/* <tr style={{border: "1px solid rgb(1,77,136)"}}>
<td style={{width: "76px"}}>MeetingID</td>
<td style={{width: "6px"}}>:</td>
<td style={{width: "140px"}}><input type="text" value={meetingid1} /></td>
</tr> */}
{/* <tr style={{border: "1px solid rgb(1,77,136)"}}>
<td style={{width: "67px"}}>Password</td>
<td style={{width: "6px"}}>:</td>
<td style={{width: "149px"}}><input type="password" value="L0hndXQ4aEx1NXlTN1FHUW9yOTJiUT09"/></td>
</tr> */}
<tr style={{border: "1px solid rgb(1,77,136)"}}>
{/* <td style={{width: "76px"}}>&nbsp;</td>
<td style={{width: "6px"}}>&nbsp;</td> */}
<td style={{width: "140px"}}><Button type="primary" onClick={() => openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/zoom/12345', meetingid1)}> Goto Zoom </Button></td>
</tr>
</tbody>
</table>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Most Common Cardiovascular Drugs</strong> <strong>(HF &amp; CCS)</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.20 &ndash; 08.40)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>New Term for Cardiologist : Hemodynamic </strong><strong>Stroke</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Common Drug Interaction among In- and Out- </strong><strong>Patients Is?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.40 &ndash; 09.00)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Simultaneous Investigation : Arrhythmia &amp; Clot </strong><strong>Source</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Cardiovascular Drugs Should Be Adjusted?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.00 &ndash; 09.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Morning Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PLENARY: RESEARCH FINDINGS IN COVID- </strong><strong>19</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE CORONARY SYNDROME</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.15 &ndash; 09.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>COVID-19: Genomic Variations and Clinical </strong><strong>Manifestations</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Acute Coronary Syndrome: New Insight during Pandemic</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(09.35 &ndash; 09.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Plasma Convalescence : Surabaya Experience</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Symptoms to balloon time</strong> <strong>has stronger impacts</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(09.55 &ndash; 10.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Covid &amp; Pneumonia : 2 sides of a Coin</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>No More MONACO</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(10.15 &ndash; 10.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiac Injury in COVID-19/Arrhthymia</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Introducing A New Kind of ACS: MINOCA</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.35 &ndash; 10.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cytokine Storm and Metabolic Problems in COVID-19</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cath-Lab Dedicated Covid-19: Is It That Urgent?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(10.55 &ndash; 11.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(11.05 &ndash; 12.30)</p>
          </td>
          <td colspan="2" width="633" style={{paddingLeft:"15px"}}>
          <p><strong>FRIDAY PRAYER</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>Lunch Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>IN-DEPTH SESSION: BASIC THINGS IN </strong><strong>COVID-19</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>STEMI: FOCUS ON REVASCULARIZATION</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(12.30 &ndash; 12.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Pneumonia: Classifications and Stages</strong></p>
          <p><em>Speaker:tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Immediate Thrombolysis in the ER</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(12.50 &ndash; 13.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Markers of Inflammation in COVID-19</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Thrombolysis Should be Performed?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.10 &ndash; 13.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Role of Non-Invasive (Echocardiography)</strong></p>
          <p><strong>Monitoring in COVID-19 ICU</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How To Optimize Myocardial Recovery after STEMI?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p>
          <p><strong>&nbsp;</strong></p>
          <table style={{marginLeft:"30px",border: "1px solid blue",width:"90%"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.30 &ndash; 13.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>&nbsp;</strong></p>
          <p><strong>ECMO in Covid 19 :</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>&nbsp;</strong></p>
          <p><strong>Surabaya STEMI Network</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(13.50 &ndash; 14.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>Afternoon Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How to Interpret Laboratory Findings: How to Recognize Troponitis Disease</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE CARDIAC CARE &ndash; 1</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(14.15 &ndash; 14.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Actually Troponin Enters The Blood Stream?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Valvular Disease in Acute Heart Failure</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(14.35 &ndash; 14.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How The Markers Detects Its Existence and How</strong></p>
          <p><strong>Should It be Interpreted?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Mechanical Ventilation Setting in Acute Heart Failure:</strong></p>
          <p><strong>Some Hints!</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.55 &ndash; 15.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Synchronizing with The Clinical Constellations</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Nutrition, and Diet for ICCU Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.15 &ndash; 15.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Afternoon Symposium &ndash; 2</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Laboratory Findings in COVID-19: What The </strong><strong>Expert Says? &ndash; 1</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE CARDIAC CARE &ndash; 2</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.30 &ndash; 15.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Blood Gas Analysis in COVID-19 Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Present and Future Hope of</strong> <strong>ICCU/CVCU</strong></p>
          <p><em>Speaker : tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(15.50 &ndash; 16.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Laboratory FIndings in COVID-19: What Should We Aware Of?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Post-Operative Care Management: When Anesthesiologist and Cardiologist Hold Hands</strong></p>
          <p><strong>Together</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(16.10 &ndash; 16..20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>&nbsp;</strong></p>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Present Contributionsof Chest Pain Unit &ndash;</strong></p>
          <p><strong>CVCU :</strong></p>
          <p><em>Speaker : tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(16.20 &ndash; DONE)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          </tr>
          </tbody>
          </table></div>
          :
          hari=="KEDUA" ?
          <div>          <p><strong>&nbsp;</strong></p>

            <p style={{marginLeft:"30px",fontSize:"25px"}}><strong>DAY 2: Saturday, 11 December 2021</strong></p>
          <table style={{marginLeft:"30px"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>TIME</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>SESSION</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>Warm-Up </strong><strong>Session</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>CARDIOMETABOLIC SESSION</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE HEART FAILURE</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(08.00 &ndash; 08.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Diabetes Mellitus and Cardiovascular Outcome</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Door to Furosemide Time</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(08.20 &ndash; 08.40)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Metabolic Milieu in Diabetes Mellitus</strong></p>
          <p><em>Speaker:tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Help! I Can&rsquo;t Get The Fluids Out!</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(08.40 &ndash; 09.00)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiometabolic Drugs</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Failure of The Right-Sided Heart</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.00 &ndash; 09.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Morning Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PLENARY: CARDIO-ONCOLOGY- </strong><strong>IMMUNOLOGY</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PREVENTION AND REHABILITATION</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.10 &ndash; 09.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How The Heart is Affected?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Preventing Coronary Artery Disease through Lifestyle Modification</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.30 &ndash; 09.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Renal Ca: A-Z</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Physical Activity as Protection of Metabolic and Immunological Functions</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.50 &ndash; 10.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Pulmonary Ca: A-Z</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiovascular Rehabilitation: Current Practice and its Application during Pandemic</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.10 &ndash; 10.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Breast Cancer</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sports Recommendations in Heart Failure</strong></p>
          <p><strong>Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.30 &ndash; 10.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Lymphoma</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sports Recommendations in Coronary Artery Disease Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.50 &ndash; 11.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>BPJS: Rule and Regulations of Chemotherapy</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sports Recommendations in Permanent Pacemaker Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(11.10 &ndash; 11.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Mid-Day Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>IN-DEPTH SESSION IN CARDIO-ONCOLOGY</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ECHOCARDIOGRAPHY SESSION: LUNG ULTRASOUND IN THE DAILY USE</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist:</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(11.35 &ndash; 11.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Echocardiography and HS-Troponin Evaluation</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Seeing is Believing: The Next Handled </strong><strong>Diagnostic Tool</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(11.55 &ndash; 12.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Thrombus Burden Among Oncology Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Differentiating The Etiologies and Coexistence</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(12.15 &ndash; 12.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Anti-Thrombotic Use in Cardio-Oncology Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Lung Ultrasound (from Cardiologist Point of </strong><strong>View)</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(12.35 &ndash; 12.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiotoxic Regiments: What to Do?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Lung Ultrasound (from Pulmonologist Point of </strong><strong>View)</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(12.55 &ndash; 13.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p>
          <p><strong>&nbsp;</strong></p>
          <table style={{marginLeft:"30px"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Lunch Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE ISCHEMIC STROKE: THE ROLE OF </strong><strong>CARDIOLOGIST</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>CORONARY INTERVENTION</strong></p>
          <p><em>Chairman: tba </em><em>Panelist tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.05 &ndash; 13.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Types of Ischemic Stroke and The Role of Anti- Thrombotics</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Anatomical vs Functional PCI (in The Current Appropriateness Era)</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.25 &ndash; 13.45)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardiac Monitoring After Ischemic Stroke: Evidence and Clinical Practice</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Left Main PCI vs By-Pass Surgery</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.45 &ndash; 14.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>How Anti-Coagulation be Given in Embolic </strong><strong>Stroke?Bridging</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Chest Pain After PCI: What are The Possible Differential Diagnosis?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.05 &ndash; 14.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Blood Pressure Control in Acute Ischemic Stroke</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Anti-Thrombotic Drugs in Elective PCI</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.25 &ndash; 14.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>Afternoon Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ALL ABOUT STATINS</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>OUR BETA-BLOCKERS OF CHOICE</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.35 &ndash; 14.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>High Intensity Statins and Its Pleiomorphic Effects</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cardioselectivity in Betablockers</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(14.55 &ndash; 15.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Sooner, The Better</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Beta-blockers in Pregnancy : When and Which </strong><strong>is the safest</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(15.15 &ndash; 15.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Hard End-Points During Hospitalization: Should We Adjust The Dose?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>IV Metoprolol in Hypertensive Emergency</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.35 &ndash; 15.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Statin Toxicity and Nocebo Effects</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Metoprolol in Acute MI</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(15.55 &ndash; 16.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(16.10 &ndash; DONE)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p></div>
          : hari=="KETIGA" ?
          <div>          <p><strong>&nbsp;</strong></p><p style={{marginLeft:"30px",fontSize:"25px"}}><strong>DAY 3: Sunday, 12 December 2021</strong></p>
          <table style={{marginLeft:"30px"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>TIME</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Session</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p>&nbsp;</p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Warm-Up Session</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>EVALUATION OF CORONARY</strong></p>
          <p><strong>SYNDROME BY CARDIAC IMAGING</strong></p>
          <p><em>Chairman: Serahkan Imaging </em><em>Panelist:</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Acute Cardiac Care&ndash; 2: PPCI BY THE EXPERTS</strong></p>
          <p><em>Chairman: Dr Evit SpJP </em><em>Panelist:</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.00 &ndash; 08.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Plaque Imaging is The Beauty of Cardiac CT</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sequences Before Treating The Lesion (Access,</strong></p>
          <p><strong>Guiding, DCA, GW)</strong></p>
          <p><em>Speaker: Dr</em> <em>Yusuf Suseno</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.20 &ndash; 08.40)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Implementation of New CCS Guidelines in</strong></p>
          <p><strong>Cardiac CT</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Thrombus Aspiration: How Should It be Performed,</strong></p>
          <p><strong>When to Avoid and Stop</strong></p>
          <p><em>Speaker: Dr Samuel SpJP</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(08.40 &ndash; 09.00)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Functional Test by Cardiac MR</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Stenting: Direct/Defer/Pre-dilatation and stent of </strong><strong>choice</strong></p>
          <p><em>Speaker:Dr Bambang Makssar, SpJP</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.00 &ndash; 09.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Utilization of Cardiac MR in Coronary Heart </strong><strong>Disease</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Preventive Non-IRA Stenting</strong></p>
          <p><em>Speaker:Dr Christian/Dr Hendri</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.20 &ndash; 09.40)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Dobutamin Stress Echo Step by Step</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Cases of Complex PPCI: The Role of Imaging &amp;</strong></p>
          <p><strong>Functional test</strong></p>
          <p><em>Speaker: Dr Fauzi</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(09.40 &ndash; 09.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Morning Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ELECTROPHYSIOLOGY SESSION - 1</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Some Laboratory Findings in COVID-19: What The</strong></p>
          <p><strong>Expert Says? &ndash; 2</strong></p>
          <p><em>Chairman: Dr Wisnu SpJP </em><em>Panelist:</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(09.55 &ndash; 10.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sudden Cardiac Death (SCD) Prevention:</strong></p>
          <p><strong>When to Refer for ICD?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>HS-Troponin and Cardiac Injury</strong></p>
          <p><em>Speaker: Dr Daniel SpJP</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(10.15 &ndash; 10.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>NOAC in SPAF: A Practical Guideline</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>D</strong><em>-</em><strong>Dimer and Thrombosis Risks</strong></p>
          <p><em>Speaker: Prof Yusak</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.35 &ndash; 10.55)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>When to Implant Pacemaker in A Patient with</strong></p>
          <p><strong>Syncope?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Anti-Coagulation and Risk of Bleeding</strong></p>
          <p><em>Speaker: Dr Nadya SpJP</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(10.55 &ndash; 11.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>The Future of His Bundle Pacing</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Markers of Inflammation in Critically Ill COVID-19 </strong><strong>Patients</strong></p>
          <p><em>Speaker:Dr Wahyu SpAn</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(11.15 &ndash; 11.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Lunch Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ELECTROPHYSIOLOGY SESSION - 2</strong></p>
          <p><em>Chairman: tba</em></p>
          <p><em>Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ACUTE CARDIAC CARE &ndash; 2</strong></p>
          <p><em>Chairman: Dr Aan</em></p>
          <p><em>Panelist:</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(11.30 &ndash; 11.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>My Patient Has A Multiple PVC: What to Do </strong><strong>Next?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Hyperglycemia in Acute Heart Failure: Internist Cardiologist Perspective</strong></p>
          <p><em>Speaker: Dr Yongki SpPD</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(11.50 &ndash; 12.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Living Together with Arrythmia</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Pneumonia in Acute Heart Failure: A Very Common</strong></p>
          <p><strong>Co-Existing Finding</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(12.10 &ndash; 12.30)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PPM Evaluation, PIP Recommendation, PVC and PAC burden</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Acute Kidney Injury and Dilemmatic Renal Shut Down in Acute Heart Failure: The Detailed Attempts</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(12.30 &ndash; 12.50)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>AF: From CC to ABC</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Electrolyte Imbalance in Acute Heart Failure: Potassium &amp; Magnesium</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(12.50 &ndash; 13.10)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Syncope Evaluation</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Fluid and Nutrition in Cardiac Intensive Care Patients</strong></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p>
          <p><strong>&nbsp;</strong></p>
          <table style={{marginLeft:"30px"}}>
          <tbody>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>&nbsp;</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(13.10 &ndash; 13.20)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p><strong>Afternoon Symposium</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ADULT WITH CONGENITAL HEART DISEASE DURING COVID-19 PANDEMIC</strong></p>
          <p><strong>ARE THEY REALLY AT RISK?</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>CARDIOMYOPATHY : How the Cardiologist Handle it (multiple etiology)</strong></p>
          <p><em>Chairman: tba Panelist: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.25 &ndash; 13.45)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Adult with Congenital Heart Disease Risk</strong></p>
          <p><strong>Stratification for Complication in Covid-19</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ICM : Proven Intervention and Drugs</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(13.45 &ndash; 14.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Acute Respiratory Distress Syndrome (ARDS)</strong></p>
          <p><strong>in Covid-19 Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>DCM : Etiologies do matters</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p><strong>&nbsp;</strong></p>
          <p>(14.05 &ndash; 14.25)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Vaccine in Adult Congenital Heart Disease </strong><strong>Patients</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Sepsis &amp; Covid Induced CM : How often and what&rsquo;ve </strong><strong>we learned ?</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.25 &ndash; 14.45)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p>&nbsp;</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>ICD &amp; CRT : Risk Benefit &amp; Convenience</strong></p>
          <p><em>Speaker : tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(14.45 &ndash; 15.05)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p>&nbsp;</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>PPCM :Proven drugs and long term monitoring</strong></p>
          <p><em>Speaker: tba</em></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.05 &ndash; 15.15)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Discussion</strong></p>
          </td>
          </tr>
          <tr style={{border: "1px solid rgb(1,77,136)"}}>
          <td style={{backgroundColor: "rgb(1,77,136)", color:"white",paddingLeft:"15px"}} width="10%">
          <p>(15.25 &ndash; 15.35)</p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          <td width="40%" style={{paddingLeft:"15px"}}>
          <p><strong>Closing</strong></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p></div>
          : null
}
          </CRow>
        </CCardBody>
      </CCard>

</>
  )
}

export default Colors
