import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { ImageMap } from "@qiuz/react-image-map";
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Jadwal = () => {
  const [workshopprof,setWorkshopprof] = useState([
    {profession:"GP",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",jadwal:"28 Nov 2021"},
    {profession:"GP",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",jadwal:"4 Dec 2021"},
    {profession:"GP",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",jadwal:"4 Dec 2021"},
    {profession:"GP",name:"WS 7 (Comprehensive CV Risk Stratification)",jadwal:"5 Dec 2021"},
    {profession:"GP",name:"WS 9 (Practical Approach in Emergency Arrythmias)",jadwal:"10 Dec 2021"},
    {profession:"GP",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)",jadwal:"10 Dec 2021"},
    {profession:"GP",name:"WS 11 (Rapid Echocardiography in Emergency Setting)",jadwal:"11 Dec 2021"},
    {profession:"GP",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)",jadwal:"11 Dec 2021"},
    {profession:"Cardiologist",name:"WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)",jadwal:"27 Nov 2021"},
    {profession:"Cardiologist",name:"WS 2 (Perioperative Cardiac Consultation)",jadwal:"27 Nov 2021"},
    {profession:"Cardiologist",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",jadwal:"28 Nov 2021"},
    {profession:"Cardiologist",name:"WS 4 (Cardiac Injury in Chemotherapy Patient)",jadwal:"28 Nov 2021"},
    {profession:"Cardiologist",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",jadwal:"4 Dec 2021"},
    {profession:"Cardiologist",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",jadwal:"28 Nov 2021",jadwal:"4 Dec 2021"},
    {profession:"Cardiologist",name:"WS 7 (Comprehensive CV Risk Stratification)",jadwal:"28 Nov 2021",jadwal:"5 Dec 2021"},
    {profession:"Cardiologist",name:"WS 8 (Practical approach to non-invasive ventilation in acute heart failure)",jadwal:"5 Dec 2021"},
    {profession:"Cardiologist",name:"WS 12 (Diagnostic Modalities in Congenital Heart Disease : Focus on VSD and TOF)",jadwal:"11 Dec 2021"},
    {profession:"Cardiologist",name:"WS 14 (How to Deal with Heavy Coronary Calcified Lesion in PCI?)",jadwal:"11 Dec 2021"},
    {profession:"Cardiologist",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)",jadwal:"12 Dec 2021"},
    {profession:"Cardiologist",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)",jadwal:"12 Dec 2021"},
    {profession:"Cardiologist",name:"WS Indovasc 1 (Early Detection of Chronic Venous Insufficiency)",jadwal:"10 Dec 2021"},
    {profession:"Cardiologist",name:"WS Indovasc 2 (Vascular Doppler US)",jadwal:"11 Dec 2021"},
    {profession:"Cardiologist",name:"WS Indovasc 3 (A - Z Peripheral Management : From Patient Selection to Therapy)",jadwal:"12 Dec 2021"},
    {profession:"Other Specialists",name:"WS 1 (Pregnancy and Heart Disease: What is the Most Common Cardiovascular Problem on It?)",jadwal:"27 Nov 2021"},
    {profession:"Other Specialists",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",jadwal:"28 Nov 2021"},
    {profession:"Other Specialists",name:"WS 4 (Cardiac Injury in Chemotherapy Patient)",jadwal:"28 Nov 2021"},
    {profession:"Other Specialists",name:"WS 7 (Comprehensive CV Risk Stratification)",jadwal:"5 Dec 2021"},
    {profession:"Other Specialists",name:"WS 8 (Practical approach to non-invasive ventilation in acute heart failure)",jadwal:"5 Dec 2021"},
    {profession:"Other Specialists",name:"WS 9 (Practical Approach in Emergency Arrythmias)",jadwal:"10 Dec 2021"},
    {profession:"Other Specialists",name:"WS 11 (Rapid Echocardiography in Emergency Setting)",jadwal:"11 Dec 2021"},
    {profession:"Other Specialists",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)",jadwal:"11 Dec 2021"},
    {profession:"Other Specialists",name:"WS 15 (Cardiomyopathy Evaluation by Cardiac MR)",jadwal:"12 Dec 2021"},
    {profession:"Other Specialists",name:"WS 16 (Cardiac CT in Coronary Artery and Beyond)",jadwal:"12 Dec 2021"},
    {profession:"Nurse or Paramedics",name:"Ws 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",jadwal:"28 Nov 2021"},
    {profession:"Nurse or Paramedics",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskular di Lini Terdepan: Fokus pada Terapi Trombolitik)",jadwal:"10 Dec 2021"},
    {profession:"Medical Student",name:"WS 3 (Stay Fit, Dont Quit: Cardiovascular Exercise Prescription in Covid-19 Pandemic)",jadwal:"28 Nov 2021"},
    {profession:"Medical Student",name:"WS 5 (AF Management in the ER, Consultant Cardiologist do their jobs)",jadwal:"4 Dec 2021"},
    {profession:"Medical Student",name:"WS 6 (Cardiovascular Evaluation in Hajj Pilgrim)",jadwal:"4 Dec 2021"},
    {profession:"Medical Student",name:"WS 7 (Comprehensive CV Risk Stratification)",jadwal:"5 Dec 2021"},
    {profession:"Medical Student",name:"WS 9 (Practical Approach in Emergency Arrythmias)",jadwal:"10 Dec 2021"},
    {profession:"Medical Student",name:"WS 10 (Asuhan Medis dan Keperawatan pada Kegawatan Kardiovaskulardi Lini Terdepan: Fokus pada Terapi Trombolitik)",jadwal:"10 Dec 2021"},
    {profession:"Medical Student",name:"WS 11 (Rapid Echocardiography in Emergency Setting)",jadwal:"11 Dec 2021"},
    {profession:"Medical Student",name:"WS 13 (Advanced in Diagnosing Acute Heart Failure)",jadwal:"11 Dec 2021"},


  ]);
  const [dataanggota,setDataanggota] = useState({});
  const [idsponsor,setIdsponsor] = useState(0);
  const [dataws, setDataws] = useState([]);


  const mapArea: any[] = [
    {
      left: "11.8%",
      top: "10.8%",
      height: "65%",
      width: "80%",
      style: { background: "rgba(255, 0, 0, 0.00)" },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span >

        </span>
      ),
    },
  ];

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={"https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal.png"}
        map={mapArea}
        />
    ),
    ["https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal.png"]
    // [img]
  );

  useEffect(() => {
    var idsponsor = localStorage.getItem("loginid");
    setIdsponsor(idsponsor);

    axios({
    url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
    // url: "http://localhost/perki/kirimdata.php",
    data: {mtd: "ANGGOTA2",idsponsor:idsponsor},
    contentType: "application/json",
    method: 'POST',
  })
    .then((data) => {
      // var temp = data.data;
      setDataanggota(data.data[0]);
      var ws1 = [];
      var xx=(data.data[0].workshop == null ) ? 0:data.data[0].workshop.split("WS ").length;
      console.log("xx",xx);
      if (xx>0) {
        var ws2=data.data[0].workshop.split("WS ");

        for (var x=1;x<xx;x++) {
          ws1.push("WS "+ws2[x]);
        }
      }
      console.log("---1");
      xx=(data.data[0].tambahanworkshop == null ) ? 0:data.data[0].tambahanworkshop.split("WS ").length;
      console.log("xx",xx);
      if (xx>0) {
        var ws2=data.data[0].tambahanworkshop.split("WS ");
        for (var x=1;x<xx;x++) {
          ws1.push("WS "+ws2[x]);
        }

      }
      // for (var x=1;x<data.data[0].tambahanworkshop.split("WS ").length;x++) {
      //   ws1.push("WS "+data.data[x].tambahanworkshopworkshop.split("WS "));
      // }
      setDataws(ws1);
      console.log(ws1);
      var belumbayar=0;

    })
    .catch(() => {
      console.log('Internal server error');
    });
  }, []);


  return (
    <>
      <CCard>
        <CCardHeader>
          Jadwal
        </CCardHeader>
        <CCardBody>
        {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal3.png" width="100%" /> */}
        {idsponsor!=0 ?
        <ImageMap
        className="usage-map"
        src={"https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal5.png"}
        map={mapArea}
        />
        :null }
        </CCardBody>
      </CCard>
    </>
  )
}

export default Jadwal
