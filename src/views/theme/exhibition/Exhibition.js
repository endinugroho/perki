import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";
import { RollbackOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { ImageMap } from "@qiuz/react-image-map";

import PlatinumBooth from "./PlatinumBooth";
import SilverBooth from "./SilverBooth";
import styles from "./Button.module.css";


const Colors = () => {
  let history = useHistory();
  const [layar1, setLayar1] = useState(0);
  const [layar2, setLayar2] = useState(0);
  const [phase, setPhase] = useState("GATE");  
  const [masterPhase, setMasterPhase] = useState("GATE");
  const [dataBooth, setDataBooth] = useState(null);    

  const onMapGateClick = (area, index) => {
    const tip = `click map${area.href || index + 1}`;
    console.log(index);
    if (index == 16) {
      openInNewTab("https://wa.me/6282232683785");
    }

    if (index == 0) {
      setPhase("PLATINUM");
      setMasterPhase("PLATINUM");
    }

    if (index == 1) {
      setPhase("SILVER");
      setMasterPhase("SILVER");
    }
  };

  const onMapPlatinum = (area, index) => {
    if (index == 0) {      
      fetchDataBooth("BOOTH007", "MISTUBISHI");
    }
    if (index == 1) {
      fetchDataBooth("BOOTH009", "VASCULAR");      
    }
    if (index == 2) {
      fetchDataBooth("BOOTH014", "YKMA");            
    }
    if (index == 3) {
      fetchDataBooth("BOOTH010", "IAKAS");                  
    }
    if (index == 4) {
      fetchDataBooth("BOOTH003", "MERIL");                              
    }
    if (index == 5) {
      fetchDataBooth("BOOTH001", "ASTRA");                              
    }
    if (index == 6) {
      fetchDataBooth("BOOTH002", "BOSTON");      
    }
    if (index == 7) {
      fetchDataBooth("BOOTH004", "NOVARTIS");      
    }
    if (index == 8) { 
      fetchDataBooth("BOOTH005", "OTSUKA");      
    }
    if (index == 9) {
      fetchDataBooth("BOOTH006", "SERVIER");      
    }
    if (index == 10) {
      fetchDataBooth("BOOTH011", "PERKI");      
    }
    if (index == 11) {
      fetchDataBooth("BOOTH012", "IDI");      
    }
    if (index == 12) {
      fetchDataBooth("BOOTH013", "UNAIR");            
    }
    if (index == 13) {
      fetchDataBooth("BOOTH016", "UADCVM");            
    }
    if (index == 14) {
      fetchDataBooth("BOOTH015", "DRSUTOMO");                  
    }
  };

  const onMapSilverAndGold = (area, index) => {   
    if (index == 0) {      
      fetchDataBooth("BASIC001", "DARYA");
    }
    if (index == 1) {
      fetchDataBooth("BASIC002", "BAYER");      
    }
    if (index == 2) {
      fetchDataBooth("BASIC003", "PRODIA");      
    }
    if (index == 3) {
      fetchDataBooth("BASIC004", "INDOMED");            
    }
    if (index == 4) {
      fetchDataBooth("BASIC005", "UPJOHN");            
    }
    if (index == 5) {
      fetchDataBooth("BASIC006", "TERUMO");            
    }
    if (index == 6) {
      fetchDataBooth("BASIC007", "IDSMED");                  
    }
    if (index == 7) {
      fetchDataBooth("BASIC008", "FERRON");                  
    }
    if (index == 8) {
      fetchDataBooth("BASIC009", "SIEMENS");                  
    }
    if (index == 9) {
      fetchDataBooth("BASIC010", "MEDTRONIK");                        
    }
    if (index == 10) {
      fetchDataBooth("BASIC011", "MERCK");                        
    }
    if (index == 11) {
      fetchDataBooth("BOOTH017", "ABBOT");                        
    }
    if (index == 12) {
      fetchDataBooth("BOOTH008", "PFIZER");                        
    }
  };

  const fetchDataBooth = (boothCode, boothName) => {
    axios
      .get(
        "https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php?function=getboothdetil&code=" +
          boothCode
      )
      .then((res) => {
        console.log(res);
        if (res.data.status == 0) {
          alert(res.data.message);
        } else {
          setDataBooth(res.data);
          setPhase(boothName);
        }
      })
      .catch((err) => console.log(err));
  };

  const openInNewTab = (url) => {
    window.location.href = url;
  };

  const mapArea = [
    {
      width: "16%",
      height: "30%",
      left: "20.5%",
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
      width: "16%",
      height: "30%",
      left: "63.6%",
      top: "36%",
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

  const mapPlatinum = [
    //0
    {
      width: "6%",
      height: "12%",
      left: "26%",
      top: "27%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
        setLayar1(0.3);
        setLayar2(0);
      },
      render: (area: any, index: number) => (
        <span>
          
        </span>
      ),
    },
    //1
    {
      width: "6%",
      height: "12%",
      left: "37%",
      top: "27%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //2
    {
      width: "6%",
      height: "12%",
      left: "47%",
      top: "27%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //3
    {
      width: "6%",
      height: "12%",
      left: "58%",
      top: "26%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //4
    {
      width: "7%",
      height: "12%",
      left: "68%",
      top: "28%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //5
    {
      width: "7%",
      height: "16%",
      left: "22%",
      top: "42%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>
          
        </span>
      ),
    }, 
    //6   
    {
      width: "7%",
      height: "16%",
      left: "34.5%",
      top: "42%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //7
    {
      width: "7%",
      height: "16%",
      left: "46.5%",
      top: "42%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //8
    {
      width: "7%",
      height: "16%",
      left: "59%",
      top: "42%",
      // href: "https://detik.com",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>
          {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/lobby.jpg" width="100%" /> */}
        </span>
      ),
    },
    //9
    {
      width: "8%",
      height: "16%",
      left: "71%",
      top: "42%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //10
    {
      width: "9%",
      height: "21%",
      left: "16%",
      top: "63%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //11
    {
      width: "8%",
      height: "21%",
      left: "32%",
      top: "63%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //12
    {
      width: "8%",
      height: "20%",
      left: "46%",
      top: "63%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //13
    {
      width: "8%",
      height: "20%",
      left: "60.5%",
      top: "63%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //14
    {
      width: "8%",
      height: "20%",
      left: "75%",
      top: "63%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
  ];

  const mapSilverAndGold = [
    //0
    {
      width: "7%",
      height: "15%",
      left: "26%",
      top: "26%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //1
    {
      width: "7%",
      height: "14%",
      left: "34%",
      top: "26%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //2
    {
      width: "7%",
      height: "15%",
      left: "42%",
      top: "26%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //3
    {
      width: "6%",
      height: "13%",
      left: "51%",
      top: "27%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //4
    {
      width: "7%",
      height: "14%",
      left: "59%",
      top: "27%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //5
    {
      width: "7%",
      height: "14%",
      left: "67%",
      top: "27%",      
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {        
      },
      render: (area: any, index: number) => (
        <span>          
        </span>
      ),
    },
    //6
    {
      width: "7%",
      height: "17%",
      left: "27%",
      top: "43%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area: any, index: number) => (
        <span>
        </span>
      ),
    },
    //7
    {
      width: "7%",
      height: "17%",
      left: "37%",
      top: "43%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area: any, index: number) => (
        <span>
        </span>
      ),
    },
    //8
    {
      width: "7%",
      height: "16%",
      left: "46.5%",
      top: "43%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area: any, index: number) => (
        <span>
        </span>
      ),
    },
    //9
    {
      width: "7%",
      height: "17%",
      left: "56%",
      top: "43%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area: any, index: number) => (
        <span>
        </span>
      ),
    },
    //10
    {
      width: "7%",
      height: "17%",
      left: "66%",
      top: "43%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area: any, index: number) => (
        <span>
        </span>
      ),
    },
    //11
    {
      width: "8%",
      height: "19%",
      left: "40%",
      top: "66%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area: any, index: number) => (
        <span>
        </span>
      ),
    },
    //12
    {
      width: "9%",
      height: "18%",
      left: "52%",
      top: "66%",
      style: { background: "rgba(69, 147, 255, 0)", zIndex: "8", cursor: "pointer" },
      onMouseOver: () => {
      },
      render: (area: any, index: number) => (
        <span>
        </span>
      ),
    },
  ];

  const backBeforeImg = () => {
    // console.log(phase)
    if (phase == "PLATINUM" || phase == "SILVER") {
      setPhase("GATE");
      setMasterPhase("GATE");
    }
    if (phase != "PLATINUM" && phase != "SILVER" && phase != "GATE") {
      setPhase(masterPhase);
    }
  };

  return (
    <>    
      {phase != "GATE" && (
        <RollbackOutlined
          className={styles.back}
          onClick={() => backBeforeImg()}
        />
      )}
      {/* GATE AND BOOTHS */}
      {phase == "GATE" ? (
        <ImageMap
          className="usage-map"
          src={"./New Img/002 Gate (1).jpg"}
          map={mapArea}
          onMapClick={onMapGateClick}
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
          src={"./New Img/001 Booth Venue platinum.jpg"}
          map={mapPlatinum}
          onMapClick={onMapPlatinum}
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
          src={"./New Img/001 Booth Venue silver.jpg"}
          map={mapSilverAndGold}
          onMapClick={onMapSilverAndGold}
          style={{
            width: "75%",
            position: "relative",
            zIndex: "1",
            left: "50%",
            transform: "translate(-50%, -23px)",
          }}
        />
      ) : null}

      {/* BOOTHS PLATINUM */}
      <PlatinumBooth phase={phase} dataBooth={dataBooth}/>
      
      {/* BOOTHS SILVER */}
      <SilverBooth phase={phase} dataBooth={dataBooth}/>
    </>
  );
};

export default Colors;
