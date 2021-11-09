import React, { useState,useEffect} from 'react';
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import axios from 'axios';
import { Input,Select,DatePicker, Modal,Button, Space, Table} from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { ImageMap } from "@qiuz/react-image-map";
const { Option } = Select;



const Typography = () => {
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

  const [workshopprice,setWorkshopprice] = useState([{profession:"Medical Student",price:"IDR 125,000"},
  {profession:"GP",price:"IDR 150,000"},
  {profession:"Cardiologist",price:"IDR 400,000"},
  {profession:"Other Specialists",price:"IDR 400,000"},
  {profession:"Nurse or Paramedics",price:"IDR 125,000"}]);

    const [datas,setDatas] = useState([]);
  const [dataanggota,setDataanggota] = useState({});
  const [dataworkshop,setDataworkshop] = useState([]);
  const [dataworkshopku, setDataworkshopku]=useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myrecord,setMyrecord] = useState({});
  const [tanggal, setTanggal] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [nama, setNama] = useState("");
  const [belumterbayar, setBelumterbayar] = useState(0);
  const [orderidbelumterbayar, setOrderidbelumterbayar] = useState(0);
  const [anggota,setAnggota] = useState(false);
  const [idsponsor,setIdsponsor] = useState(0);
  const [professionselect, setProfessionselect] = useState('Cardiologist');
  const [hargatotal, setHargatotal] = useState(0);
  const [hargaworkshop, setHargaworkshop] = useState(0);
  const [macamworkshop, setMacamworkshop] = useState([]);
  const [halaman, setHalaman] = useState("HAL1");
  const [width, setWidth] = useState(window.innerWidth);


  function handleWindowSizeChange() {
          setWidth(window.innerWidth);
      }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
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
          console.log(data.data);
          setDatas(data.data);
          setDataanggota(data.data[0]);
          setDataworkshop(data.data[0].workshop);
          var temp = [];
          workshopprof.filter(ch => ch.profession === data.data[0].profession).map((item) => {
             if (data.data[0].workshop.indexOf(item.name)==-1) {
                temp.push(item);
             }
          });
          setDataworkshopku(temp);
          console.log("ws",data.data[0].workshop);
          var belumbayar=0;
          // var temp = [];
          // for (const x of data.data)
          // {
          //   console.log(x.firstname);
          //   console.log(x.lastname);
          //   temp.push({
          //     firstname:x.firstname,
          //     lastname:x.lastname
          //   })
          // }
          var orderid="";
          {data.data.filter(data => (data.paymentstatus==null || data.paymentstatus=="" )).map(data => {
            console.log('masuk bro');

            belumbayar = belumbayar+parseInt(data.total);
              orderid=orderid+data.orderid+",";
          })}          // console.log(JSON.parse(data.data));
            // localStorage.setItem("loginid",temp.data);
          setBelumterbayar(belumbayar);
          setOrderidbelumterbayar(orderid);
          workshopprice.filter(ch => ch.profession === data.data[0].profession).map((item) =>
          setHargaworkshop(item.price.replace("IDR ","").replace(",",""))
        );

        })
        .catch(() => {
          console.log('Internal server error');
        });
        return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
        }

        // loadkategori();
}, []);

const onFileChange = event => {

  // Update the state
  // this.setState({ selectedFile: event.target.files[0] });
  setSelectedFile(event.target.files[0]);

};


const handleOk = () => {
  const payload = {
    tambahanworkshop : macamworkshop ,
    totaltambahan : hargatotal,
    id : dataanggota.id,
    mtd:"UPDATETAMBAHANWS"
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
    })
    .catch(() => {
      console.log('Internal server error');
    });

  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

const handleChange5 = (value) => {

  console.log("data=",JSON.stringify(dataanggota.workshop));
  // if (dataanggota.workshop.indexOf())
  var arrworkshop = dataanggota.workshop.split(",");
  // {profession:"Cardiologist",name:"WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)"},
  // {profession:"Cardiologist",name:"WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)"},
  // {profession:"Cardiologist",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)"},
  // {profession:"Cardiologist",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)"},
  // {profession:"Cardiologist",name:"WS Indovasc 2 (Vascular Doppler US)"},
  // {profession:"Cardiologist",name:"WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)"},

  if (value=="WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)" || value =="WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)") {
    var arrworkshop = dataanggota.workshop.split(",");
    if (arrworkshop.indexOf("WS Indovasc 2 (Vascular Doppler US)")>-1) {
      alert("WS Indovasc 2 has already exist");
      return;
    }

  }

  if (value=="WS 15 (Cardiomyopathy Evaluation by Cardiac MR)" || value =="WS 16 (Cardiac CT in Coronary Artery and Beyond)") {
    var arrworkshop = dataanggota.workshop.split(",");
    if (arrworkshop.indexOf("")>-1) {
      alert("WS Indovasc 3 has already exist");
      return;
    }
  }

  if (value=="WS Indovasc 2 (Vascular Doppler US)") {
    var arrworkshop = dataanggota.workshop.split(",");
    if (arrworkshop.indexOf("WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)")>-1 || arrworkshop.indexOf("WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)")>-1) {
      alert("WS 12 or WS 14 has already exist");
      return;
    }
  }

  if (value=="WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)") {
    var arrworkshop = dataanggota.workshop.split(",");
    if (arrworkshop.indexOf("WS 15 (Cardiomyopathy Evaluation by Cardiac MR)")>-1 || arrworkshop.indexOf("WS 16 (Cardiac CT in Coronary Artery and Beyond)")>-1) {
      alert("WS 15 or WS 16 has already exist");
      return;
    }


  }

  setHargatotal(value.length*hargaworkshop);
  setMacamworkshop(value);


};

const openInNewTab = (url) => {
//  const newWindow = window.open(url+"&desktop=OK", '_blank', 'noopener,noreferrer')
window.location.href = url+"&desktop=OK";
  if (width <= 768) {
  // newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    window.location.href = url;
  }
  // if (newWindow) newWindow.opener = null
}

function paddy(num, padlen, padchar) {
  var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
  var pad = new Array(1 + padlen).join(pad_char);
  return (pad + num).slice(-pad.length);
}

function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const mapArea: any[] = [
  {
    left: "14.8%",
    top: "36.8%",
    height: "5%",
    width: "57%",
    style: { background: "rgba(255, 0, 0, 0.0)" },
    onMouseOver: () => console.log("map onMouseOver"),
    render: (area: any, index: number) => (
      <div style={{fontSize:"20px"}}>
        {dataanggota.fullnamecert}
        </div>
    ),
  },
  {
    left: "14.8%",
    top: "44.3%",
    height: "5%",
    width: "57%",
    style: { background: "rgba(255, 0, 0, 0.00)" },
    onMouseOver: () => console.log("map onMouseOver"),
    render: (area: any, index: number) => (
      <div style={{fontSize:"20px"}}>
        {dataanggota.mobilephone}
        </div>
    ),
  },
  {
    left: "14.8%",
    top: "51.5%",
    height: "5%",
    width: "57%",
    style: { background: "rgba(255, 0, 0, 0.0)" },
    onMouseOver: () => console.log("map onMouseOver"),
    render: (area: any, index: number) => (
      // <span >
      <div style={{fontSize:"20px"}}>
        {dataanggota.email}
      </div>
      // </span>
      ),
  },
];

const mapArea1: any[] = [
  {
    left: "14.8%",
    top: "10.8%",
    height: "72%",
    width: "76%",
    style: { background: "rgba(255, 0, 0, 0)" },
    onMouseOver: () => console.log("map onMouseOver"),
    render: (area: any, index: number) => (
      <div>
                  <div>
         <div style={{textAlign:"right"}}><a href={'https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/edit/'+dataanggota.id} ><Button type="primary">Edit Data</Button></a> {dataanggota.paymentstatus!="PAY" ? <Button onClick={() => openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/midtrans/examples/snap/checkout-process2.php?orderid='+dataanggota.orderid+'&total='+dataanggota.total+'&judul='+dataanggota.firstname+'-'+dataanggota.profession+'-'+dataanggota.pilih+'-'+dataanggota.mobilephone+"&snap="+dataanggota.snap)} type="primary">Pay</Button> : null }
 </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Full Name Cert</div>
           <b>{dataanggota.fullnamecert}</b>
           {/* {JSON.stringify(dataanggota)} */}
          </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Mobile Phone</div>
           <b>{dataanggota.mobilephone}</b>
          </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Address</div>
           <b>{dataanggota.address}</b>
          </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Email</div>
           <b>{dataanggota.email}</b>
          </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Profession</div>
          <b>{dataanggota.profession}</b>
          </div>
           </div>
        </div>
    ),
  },
];

const mapArea2: any[] = [
  {
    left: "14.8%",
    top: "10.8%",
    height: "72%",
    width: "76%",
    style: { background: "rgba(255, 0, 0, 0)" },
    onMouseOver: () => console.log("map onMouseOver"),
    render: (area: any, index: number) => (
      <div>


          <div>
         <div style={{textAlign:"right"}}><a href={'https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/edit/'+dataanggota.id} ><Button type="primary">Edit Data</Button></a> {dataanggota.paymentstatus!="PAY" ? <Button onClick={() => openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/midtrans/examples/snap/checkout-process.php?orderid='+dataanggota.orderid+'&total='+dataanggota.total+'&judul='+dataanggota.firstname+'-'+dataanggota.profession+'-'+dataanggota.pilih+'-'+dataanggota.mobilephone)} type="primary">Pay</Button> : null }
        </div>


          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Category</div>
          <b>{dataanggota.pilih}</b>
          </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Simposium</div>
          <b>{dataanggota.simposium}</b>
          </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Workshop</div>
          <b>{JSON.stringify(dataanggota.workshop)}</b>
           </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Total</div>
           <b>{"Rp"+currencyFormat(parseInt(dataanggota.total))}</b>
          </div>
          <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <div class="labelatas">Payment Status</div>
          <b>{dataanggota.paymentstatus=="PAY" ? "PAID" : "NOT YET PAID"}</b>
          </div>
       </div>
        </div>
    ),
  },
];

const mapArea3: any[] = [
  {
    left: "14.8%",
    top: "10.8%",
    height: "72%",
    width: "76%",
    style: { background: "rgba(255, 0, 0, 0)" },
    onMouseOver: () => console.log("map onMouseOver"),
    render: (area: any, index: number) => (
      <div>
                  <div>
         {dataanggota.totaltambahan==null ?
         <div class="labeldaninput" style={{marginLeft:"15px"}}>
          <Button type="primary" onClick={()=>setIsModalVisible(true)}>Add Workshop</Button>
         </div>
          : null }
         <div class="labeldaninput" style={{marginLeft:"15px"}}>
         <div class="labelatas">Additional Workshop</div>
         <b>{dataanggota.tambahanworkshop}</b>
         </div>
         <div class="labeldaninput" style={{marginLeft:"15px"}}>
         <div class="labelatas">Addtional Total</div>
          <b>{dataanggota.totaltambahan==null ? "Rp0":"Rp"+currencyFormat(parseInt(dataanggota.totaltambahan))}</b>
         </div>
         <div class="labeldaninput" style={{marginLeft:"15px"}}>
         <div class="labelatas">Payment Status Additional Workshop</div>
          <b>{dataanggota.paymentstatustambahan=="PAY" ? "PAID":"NOT YET PAID"}</b>
         </div>
         {dataanggota.paymentstatustambahan=="PAY" || dataanggota.totaltambahan==null ? null:
         <Button onClick={() => openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/midtrans/examples/snap/checkout-process.php?orderid='+dataanggota.orderid+"-TAMBAHAN"+'&total='+dataanggota.total+'&judul='+dataanggota.firstname+'-'+dataanggota.profession+'-'+dataanggota.pilih+'-'+dataanggota.mobilephone)} type="primary">Pay Additional Workshop</Button>
        }
       </div>
        </div>
    ),
  },
];

const bulkpay = () => {
  const current = new Date();
  const idkirim = "bulk"+paddy(current.getDate(),2)+paddy(current.getMonth()+1,2)+paddy(current.getFullYear(),4)+paddy(current.getHours(),2)+paddy(current.getMinutes(),2)+paddy(current.getSeconds(),2)+parseInt(Math.random()*100);
  var orderidbelumterbayar2=orderidbelumterbayar.substring(0,orderidbelumterbayar.length-1);
  var re = new RegExp('SP-'+idsponsor+'-A-', 'g');
  var re2 = new RegExp(',', 'g');
  orderidbelumterbayar2 = orderidbelumterbayar2.replace(re, '');
  orderidbelumterbayar2="'"+orderidbelumterbayar2+"'";
  orderidbelumterbayar2 = orderidbelumterbayar2.replace(re2,"','");
  console.log(orderidbelumterbayar2);
  console.log(idkirim);
  axios({
    url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
    // url: "http://localhost/perki/kirimdata.php",
    data: {mtd:'UPDATEBULKCODE',kode:idkirim,idku:orderidbelumterbayar2},
    contentType: "application/json",
    method: 'POST',
  })
    .then((data) => {
      console.log(data);
      if (data.data.sukses=="OK") {

        openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/midtrans/examples/snap/checkout-process2.php?orderid='+idkirim+'&total='+belumterbayar+'&judul='+orderidbelumterbayar)

      }
    })
    .catch(() => {
      console.log('Internal server error');
    });

}

const upload = (value) => {
  setIsModalVisible(true);setMyrecord(value);
}

const columns = [
  {
    title: "Invoice ID",
    dataIndex: "orderid",
    key: "orderid",
  },
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
  },
  {
    title: "Pro",
    dataIndex: "profession",
    key: "profession",
    responsive: ["sm"],
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    align:"right",
    render: (text, record) => (
      "Rp"+currencyFormat(parseInt(record.total))
    )
  },
  {
    title: "Select",
    dataIndex: "pilih",
    key: "pilih",
    responsive: ["sm"],
  },
  {
    title: "Simposium",
    dataIndex: "simposium",
    key: "simposium",
    responsive: ["sm"],
  },
  {
    title: "Workshop",
    dataIndex: "workshop",
    key: "workshop",
    responsive: ["sm"],
  },
  {
    title: "Package",
    dataIndex: "package",
    key: "package",
    responsive: ["sm"],
  },
  {
    title: "PS",
    dataIndex: "paymentstatus",
    key: "paymentstatus",
    render: (text, record) => (
      <div>
{(record.paymentstatus ==="PAY" || record.paymentstatus ==="FREE")?
"PAID"
:
<Button onClick={() => openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/midtrans/examples/snap/checkout-process2.php?orderid='+record.orderid+'&total='+record.total+'&judul='+record.firstname+'-'+record.profession+'-'+record.pilih+'-'+record.mobilephone+"&snap="+record.snap)} type="primary">Pay</Button>

},

      </div>

    ),
//       </div>

//     ),
},
{
  title: "",
  dataIndex: "action",
  key: "action",
  // responsive: ["sm"],
  render: (text, record) => (
    <div><a href={'https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/edit/'+record.id} ><Button type="primary"><EditOutlined /></Button></a></div>
  )
},
//   {
//     title: "Upload",
//     dataIndex: "file",
//     key: "file",
//     render: (text, record) => (
//       <div>
// {(record.file ==="" || record.file===undefined)?
// <Button onClick={()=>upload(record)} >Upload</Button>
// :
// "PAID"
// }

//       </div>

//     ),
// },
];
  // {
  //   title: "firstname",
  //   dataIndex: "firstname",
  //   key: "firstname",
  // },
  // {
  //   title: "firstname",
  //   dataIndex: "firstname",
  //   key: "firstname",
  // },
  // {
  //   title: "firstname",
  //   dataIndex: "firstname",
  //   key: "firstname",
  // },


  return (
    <>
      <CCard>
        <CCardHeader style={{color:'rgb(1,77,136)',fontSize:"25px"}}>
        {!anggota ?
          "Sponsor : "+nama
          : "Anggota : "+nama

          }
        </CCardHeader>

        {/* <CCardBody style={{backgroundImage: "url('https://acsasurabaya2021.com/wp-content/plugins/perki/background3.png')"}}> */}
        <CCardBody>
        {!anggota ?
        <a href="/wp-content/plugins/perki/build/#/theme/perki"><Button type="primary" style={{marginBottom:"20px"}}>Add Participant</Button></a>
        : null }
        {!anggota ?
        <Table columns={columns} dataSource={datas} />
         :
          <div>
        <div class="visibledevice">
         {halaman=="HAL1" ? <ImageMap
          className="usage-map"
          src={"https://acsasurabaya2021.com/wp-content/plugins/perki/contact.jpeg"}
          map={mapArea}
          />
          : halaman=="HAL2" ?
          <ImageMap
          className="usage-map"
          src={"https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal5.png"}
          map={mapArea1}
          /> : halaman=="HAL3" ?
          <ImageMap
          className="usage-map"
          src={"https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal5.png"}
          map={mapArea2}
          /> :
          <ImageMap
          className="usage-map"
          src={"https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal5.png"}
          map={mapArea3}
          /> }
          <div style={{textAlign:"right"}}>
          <Button type="primary" onClick={()=>halaman=="HAL1" ? setHalaman("HAL2"):halaman=="HAL2" ? setHalaman("HAL3"):halaman=="HAL3" ? setHalaman("HAL4"):setHalaman("HAL1")}>Next</Button>

          </div>
      </div>
         <div class="visibledesktop">
         {halaman=="HAL1" ? <ImageMap
          className="usage-map"
          src={"https://acsasurabaya2021.com/wp-content/plugins/perki/contact2.jpg"}
          style={{width:"400px",marginLeft:"100px"}}
          map={mapArea}
          />
          : halaman=="HAL2" ?
          <ImageMap
          className="usage-map"
          src={"https://acsasurabaya2021.com/wp-content/plugins/perki/jadwalnew.png"}
          style={{width:"100%",marginLeft:"0px"}}
          map={mapArea1}
          /> : halaman=="HAL3" ?
          <ImageMap
          className="usage-map"
          src={"https://acsasurabaya2021.com/wp-content/plugins/perki/jadwalnew.png"}
          style={{width:"100%",marginLeft:"0px"}}
          map={mapArea2}
          /> :
          <ImageMap
          className="usage-map"
          src={"https://acsasurabaya2021.com/wp-content/plugins/perki/jadwalnew.png"}
          style={{width:"100%",marginLeft:"0px"}}
          map={mapArea3}
          /> }
          <div style={{textAlign:"right"}}>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/register.png" /> */}
          <Button type="primary" onClick={()=>halaman=="HAL1" ? setHalaman("HAL2"):halaman=="HAL2" ? setHalaman("HAL3"):halaman=="HAL3" ? setHalaman("HAL4"):setHalaman("HAL1")}>Next</Button>
          </div>
      </div>
      </div>
         //         <div>
//         <div style={{textAlign:"right"}}><a href={'https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/edit/'+dataanggota.id} ><Button type="primary">Edit Data</Button></a> {dataanggota.paymentstatus!="PAY" ? <Button onClick={() => openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/midtrans/examples/snap/checkout-process.php?orderid='+dataanggota.orderid+'&total='+dataanggota.total+'&judul='+dataanggota.firstname+'-'+dataanggota.profession+'-'+dataanggota.pilih+'-'+dataanggota.mobilephone)} type="primary">Pay</Button> : null }
// </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Full Name Cert</div>
//           <b>{dataanggota.fullnamecert}</b>
//           {/* {JSON.stringify(dataanggota)} */}
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Mobile Phone</div>
//           <b>{dataanggota.mobilephone}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Address</div>
//           <b>{dataanggota.address}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Email</div>
//           <b>{dataanggota.email}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Profession</div>
//          <b>{dataanggota.profession}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Category</div>
//          <b>{dataanggota.pilih}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Simposium</div>
//          <b>{dataanggota.simposium}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Workshop</div>
//          <b>{JSON.stringify(dataanggota.workshop)}</b>
//           </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Total</div>
//           <b>{"Rp"+currencyFormat(parseInt(dataanggota.total))}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Payment Status</div>
//          <b>{dataanggota.paymentstatus=="PAY" ? "PAID" : "NOT YET PAID"}</b>
//          </div>
//         {dataanggota.totaltambahan==null ?
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//           <Button type="primary" onClick={()=>setIsModalVisible(true)}>Add Workshop</Button>
//          </div>
//           : null }
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Additional Workshop</div>
//          <b>{dataanggota.tambahanworkshop}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Addtional Total</div>
//           <b>{dataanggota.totaltambahan==null ? "Rp0":"Rp"+currencyFormat(parseInt(dataanggota.totaltambahan))}</b>
//          </div>
//          <div class="labeldaninput" style={{marginLeft:"15px"}}>
//          <div class="labelatas">Payment Status Additional Workshop</div>
//           <b>{dataanggota.paymentstatustambahan=="PAY" ? "PAID":"NOT YET PAID"}</b>
//          </div>
//          {dataanggota.paymentstatustambahan=="PAY" || dataanggota.totaltambahan==null ? null:
//          <Button onClick={() => openInNewTab('https://acsasurabaya2021.com/wp-content/plugins/perki/midtrans/examples/snap/checkout-process.php?orderid='+dataanggota.orderid+"-TAMBAHAN"+'&total='+dataanggota.total+'&judul='+dataanggota.firstname+'-'+dataanggota.profession+'-'+dataanggota.pilih+'-'+dataanggota.mobilephone)} type="primary">Pay Additional Workshop</Button>
//         }
//        </div>

      }
         {!anggota ?
        <div>
        <Space>
        <div>Unpaid : {"Rp"+currencyFormat(parseInt(belumterbayar))}</div><Button onClick={() => bulkpay()} type="primary" disabled={belumterbayar===0} >Pay</Button>
        </Space>
        <div>Total GP, Nurse or Paramedic, Medical Student (for claim bonus)</div>
        <Space style={{marginBottom:"5px"}}>
        <div>Total Simposium: <b>{datas.filter(ch => (ch.pilih == "simposium" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length}</b>, claimed : <b>{datas.filter(ch => (ch.pilih == "simposium" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length}</b></div>{(datas.filter(ch => (ch.pilih == "simposium" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length-datas.filter(ch => (ch.pilih == "simposium" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length)/10-datas.filter(ch => (ch.pilih == "simposium" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length>=1 ? <a href={"/wp-content/plugins/perki/build/#/theme/perki2/GP-simposium"}><Button type="primary">Claim for free</Button></a>:null }
        </Space>
        <div></div>
        <Space style={{marginBottom:"5px"}}>
        <div>Total Workshop: <b>{datas.filter(ch => (ch.pilih == "workshop" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length}</b>, claimed : <b>{datas.filter(ch => (ch.pilih == "workshop" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length}</b></div>{(datas.filter(ch => (ch.pilih == "workshop" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length-datas.filter(ch => (ch.pilih == "workshop" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length)/10-datas.filter(ch => (ch.pilih == "workshop" || ch.pilih == "simposium,workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length>=1 ? <a href="/wp-content/plugins/perki/build/#/theme/perki2/GP-workshop"><Button type="primary">Claim for free</Button></a>:null }
        </Space>
        <div></div>
        <Space style={{marginBottom:"5px"}}>
        <div>Total Package Silver: <b>{datas.filter(ch => ch.pilih == "packagesilver" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length}</b>, claimed : <b>{datas.filter(ch => ch.pilih == "packagesilver" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length}</b></div>{(datas.filter(ch => ch.pilih == "packagesilver" &&
(ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length-datas.filter(ch => ch.pilih == "packagesilver" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length)/5-
datas.filter(ch => ch.pilih == "packagesilver" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length>=1 ? <a href="/wp-content/plugins/perki/build/#/theme/perki2/GP-packagesilver"><Button type="primary">Claim for free</Button></a>:null }
        </Space>
        <div></div>
        <Space style={{marginBottom:"5px"}}>
        <div>Total Package Gold: <b>{datas.filter(ch => ch.pilih == "packagegold" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length}</b>, claimed : <b>{datas.filter(ch => ch.pilih == "packagegold" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length}</b></div>{(datas.filter(ch => ch.pilih == "packagegold" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length-datas.filter(ch => ch.pilih == "packagegold" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length)/5-datas.filter(ch => ch.pilih == "packagegold" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length>=1 ? <a href="/wp-content/plugins/perki/build/#/theme/perki2/GP-packagegold"><Button type="primary">Claim for free</Button></a>:null }
        </Space>
        <div></div>
        <Space style={{marginBottom:"5px"}}>
        <div>Total Package Platinum: <b>{datas.filter(ch => ch.pilih == "packageplatinum" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length}</b>, claimed : <b>{datas.filter(ch => ch.pilih == "packageplatinum" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length}</b></div>{(datas.filter(ch => ch.pilih == "packageplatinum" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.paymentstatus=="PAY")).length-datas.filter(ch => ch.pilih == "packageplatinum" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length)/5-datas.filter(ch => ch.pilih == "packageplatinum" && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics")  && (ch.status=="BONUS")).length>=1 ? <a href="/wp-content/plugins/perki/build/#/theme/perki2/GP-packageplatinum"><Button type="primary">Claim for free</Button></a>:null }
        </Space>
        </div>
        : null }




        {/* <div>Bonus 1 : 10 get 1 for GP Nurse Medical Student take workshop / simposium, current total : <b>{datas.filter(ch => (ch.pilih == "simposium" || ch.pilih == "workshop") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics") ).length}</b></div>
        <div>Bonus 2 : 5 get 1 for GP Nurse Medical Student take package, current total <b>{datas.filter(ch => (ch.pilih == "package") && (ch.profession=="GP" || ch.profession=="Medical Student" || ch.profession=="Nurse or Paramedics") ).length}</b> </div> */}
        {/* <div>data={datas.filter(ch => ch.pilih == "simposium").length}</div> */}
        {/* }

        {kota.filter(character => character.propinsi === propinsiselect).map((item) =>(

<Option value={item.kota}>{item.kota}</Option>

          ))} */}
        </CCardBody>
      </CCard>

      <Modal title="Additional Workshop" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div class="labeldaninput" style={{marginLeft:"0px"}}>
          <div class="labelatas">Macam Workshop </div>
        <Select mode="multiple"  style={{width:"100%"}} onChange={(e)=>handleChange5(e)} >
         {dataworkshopku.map((item) =>
            // console.log(item.name);
            // console.log(dataworkshop);
            // if (dataworkshop.indexOf(item.name)==-1) (
            (
            <Option value={item.name}>{item.name}</Option>
            )

         )  }

        </Select>
        </div>
        <div class="labeldaninput" style={{marginLeft:"0px"}}>
          <div class="labelatas" style={{display:"flex"}}>Package price</div>
          <Input addonBefore="IDR" placeholder="harga package" value={hargatotal} />
      </div>


      </Modal>
      </>
  )
}

export default Typography
