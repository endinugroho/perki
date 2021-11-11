import { useSelector, useDispatch } from 'react-redux'
import React, { lazy,useEffect,useState,useRef } from 'react'
import axios from 'axios';
import { Input,Select,DatePicker, Modal,Button, Space, Table} from 'antd';
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
// import "./video-react.css"; // import css
import CIcon from '@coreui/icons-react'
// import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player'
import {Image} from 'antd';
import { ImageMap } from "@qiuz/react-image-map";
import MainChartExample from '../charts/MainChartExample.js'
import { useHistory } from "react-router-dom";

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [anggota,setAnggota] = useState(false);
  const [file,setFile] = useState("");
  // const [playing,setPlaying] = useState(false);
  const dispatch = useDispatch()
  const [jadwal,setJadwal] = useState("none");
  const [pejet,setPejet] = useState("");
  const [pejet2,setPejet2] = useState("none");
  const [pejet3,setPejet3] = useState("none");
  const [pejet4,setPejet4] = useState("none");
  const [pejet5,setPejet5] = useState("none");
  const [layar1,setLayar1] = useState(0);
  const [layar2,setLayar2] = useState(0);
  const [layar3,setLayar3] = useState(0);
  const [idanggota,setIdanggota] = useState("");
  const [nama,setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota1,setAnggota1] = useState();
  const [paymentstatus,setPaymentstatus] = useState("PAY");
  const [workshopku,setWorkshopku] = useState("");


  let history = useHistory();
  // const vidRef = useRef(null);
  // const handlePlayVideo = () => {
  //   vidRef.current.play();
  // }
  useEffect(() => {
    dispatch({type: 'set', sidebarShow: false});
    const script = document.createElement("script");
    script.src = "/perki.js";
    script.async = true;
    if (localStorage.getItem("status")=="ANGGOTA") {
      setAnggota(true) } else setAnggota(false);

    document.body.appendChild(script);


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
        var temp1=data.data[0].paymentstatus;
        // setAnggota1(data.data[0]);
        setPaymentstatus(temp1);
        // setWorkshopku(data.data[0].workshop);
      })
      .catch(() => {
        console.log('Internal server error');
      });



    // axios({
    //   method: "POST",
    //   url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
    //   // url: "http://localhost/perki/kirimdata.php",
    //   data: {"var":"hallmp4","mtd":'CEKOPTION'},
    //   contentType: "application/json",
    // })
    //   .then((data) => {
    //     console.log(data.data.data);
    //     setFile(data.data.data);
    //     // setTimeout(() => {
    //     //   setPlaying(true);
    //     //   console.log("play");
    //     // }, 2000)
    //   })
    //   .catch(() => {
    //     console.log('Internal server error');
    //   });
      // handlePlayVideo();
  }, []);

  const openInNewTab = (url) => {
    window.location.href = url;
    // const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    // if (newWindow) newWindow.opener = null
  }

  const jadwalku = (value) => {
    setJadwal(value);
  }

  const onMapClick = (area, index: number) => {
    const tip = `click map${area.href || index + 1}`;
    // console.log(area.href);
    // if (index==16)
    // {
    //   openInNewTab("https://wa.me/6282232683785");
    // }

    // if (index==15)
    // {
    //   openInNewTab("https://wa.me/628165421216");
    // }

    // if (index==11)
    // {
    //   openInNewTab("https://wa.me/6281213030359");
    // }


    console.log(index);
    if (index==0) {
      setPejet("LOBBY");
      console.log("lobby");
    }
    if (index==1) {
      setPejet("SESSION");
      history.push('/theme/session');

    }
    if (index==2) {
      setPejet("EXHIBITION");
      history.push('/theme/exhibition');
    }
    if (index==3) {
      setPejet("EXIT");
      history.push('/theme/login');
    }
    if (index==4) {
      setPejet("AGENDA");
      history.push('/theme/symposium');
    }

    if (index==14) {
      history.push('/theme/faq');
    }

    if (index==5) {
      setPejet("ACCOUNT");
      console.log("akun");
      history.push('/theme/sponsor');
    }
    if (index==7) {
      console.log("exhibition")
      history.push('/theme/exhibition');

    }
    if (index==8) {
      history.push('/theme/symposium');

    }
  if (index==15) {
    history.push('/theme/workshop');

}

  if (index==13) {
      openInNewTab("https://wa.me/6282232683785");

  }


    // alert(tip);)
  };

  const mapArea: any[] = [
    {
      left: "32.2%",
      top: "80.8%",
      height: "15%",
      width: "6.5%",
      // href: "https://detik.com",
      style: { background: "rgba(255, 0, 0, 0.00)",zIndex: "8",cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
         {pejet=="LOBBY" ?
         <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/Lobby_Select.png" width="100%" />
         : null }
         </span>
      ),
    },
    {
      left: "28.5%",
      top: "78%",
      height: "17%",
      width: "8.2%",
      // href: "https://google.com",
      style: { background: "rgba(255, 0, 0, 0.0)",zIndex: "8", cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
         {pejet=="SESSION" ?
         <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/session.jpg" width="100%" />
         : null }
         </span>
      ),
    },
    {
      left: "36.6%",
      top: "76.8%",
      height: "19%",
      width: "9%",
      // href: "https://google.com",
      style: { background: "rgba(255, 0, 0, 0.0)",zIndex: "8", cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
         {pejet=="EXHIBITION" ?
         <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/exhibition.jpg" width="100%" />
         : null }
         </span>
      ),
    },
    {
      left: "70.2%",
      top: "78%",
      height: "17%",
      width: "8.1%",
      // href: "https://google.com",
      style: { background: "rgba(255, 0, 0, 0.0)",zIndex: "8", cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
         {/* {pejet=="EXIT" ?
         <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/exit.jpg" width="100%" />
         : null } */}
         </span>
      ),
    },
    {
      left: "45.5%",
      top: "77.7%",
      height: "17%",
      width: "8%",
      // href: "https://google.com",
      style: { background: "rgba(255, 0, 0, 0.0)",zIndex: "8", cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
         </span>
      ),
    },
    {
      left: "62.2%",
      top: "77.7%",
      height: "17%",
      width: "8%",
      // href: "https://google.com",
      style: { background: "rgba(255, 0, 0, 0.0)",zIndex: "8", cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
        {pejet=="ACCOUNT" ?
      <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/account.jpg" width="100%" />
      : null }
      </span>
      ),
    },
    {
      width: "70%",
      height: "20%",
      left: "10%",
      top: "2%",
      style: { background: "rgba(0, 255, 0, 0)",zIndex: "8",display:jadwal, cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
         {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal.png" width="100%" /> */}
        </span>
      ),
    },
    //exhibition
    {
      width: "8.8%",
      height: "13%",
      left: "28%",
      top: "33%",
      // href: "https://google.com",
      style: {
        background: "rgba(0, 0, 255, "+layar1+")",
        transform: 'rotate(2deg)',
        zIndex:"8",
        display:"block",
        cursor: "pointer",
      },
      onMouseOver: () => {setLayar1(0.3);setLayar2(0);setLayar3(0)},
      render: (area: any, index: number) => (
        <span>
        {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal.png" width="100%" /> */}
        </span>
      ),
    },
    //simposium
    {
      width: "10%",
      height: "14%",
      left: "45%",
      top: "32%",
      style: { background: "rgba(0, 0, 255, "+layar2+")",zIndex:"8",display:"block" , cursor: "pointer", },
      onMouseOver: () => {setLayar2(0.3);setLayar3(0);setLayar1(0);},
      render: (area: any, index: number) => (
        <span>
        {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal.png" width="100%" /> */}
        </span>
      ),
    },
    //workshop
    {
      width: "9.1%",
      height: "13%",
      left: "62.8%",
      top: "33%",
      // href: "https://google.com",
      style: { transform: 'rotate(-2deg)',cursor: "pointer", background: "rgba(0, 0, 255, "+layar3+")",zIndex:"8",display:"block" },
      onMouseOver: () => {setLayar3(0.3);setLayar2(0);setLayar1(0);},
      render: (area: any, index: number) => (
        <span>
        {/* <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/jadwal.png" width="100%" /> */}
        </span>
      ),
    },
    {
      width: "14.1%",
      height: "20.5%",
      left: "43%",
      top: "7.2%",
      style: { background: "rgba(0, 0, 255, 0)", zIndex: "8", cursor: "pointer", },
//      href: "https://google.com",
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
        {/* <Player
          playsInline
          playing
          loop
          autoPlay={false}
          volume={0.113}
          poster="/assets/poster.png"
          src="https://acsasurabaya2021.com/wp-content/plugins/perki/hall3.mp4"
          fluid={false}
          width={"100%"}
          height={"100%"}
        ><ControlBar autoHide={true} className="my-class" /></Player> */}
      <ReactPlayer
          className='react-player'
          url='https://acsasurabaya2021.com/wp-content/uploads/2021/10/movie.mp4'
          width='100%'
          height='100%'
          volume='0.2'
          playsInline
          playing
          loop
          controls={true}
          autoPlay={true}
              />
                </span>
      ),
    },
    {
      left: "23.5%",
      top: "60%",
      height: "8%",
      width: "5%",
      // href: "https://google.com",
      style: { background: "rgba(255, 255, 0, 0)",zIndex: "1", cursor: "pointer",},
      onMouseOver: () => {setPejet2("block");setPejet3("none");},
      render: (area: any, index: number) => (
        <span>
      </span>
      ),
    },
    {
      left: "30.2%",
      top: "60.2%",
      height: "7%",
      width: "4%",
      // href: "https://google.com",
      style: { background: "rgba(255, 255, 255, 0)",zIndex: "1", cursor: "pointer", },
      onMouseOver: () => {setPejet3("block");setPejet2("none");},
      render: (area: any, index: number) => (
        <span>
        {/* {pejet=="ACCOUNT" ?
      <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/account.jpg" width="100%" />
      : null } */}
      </span>
      ),
    },
    {
      left: "24%",
      top: "60%",
      height: "7%",
      width: "4%",
      // href: "https://google.com",
      style: { background: "rgba(255, 255, 0, 0.0)",zIndex: "8", cursor: "pointer", },
      onMouseOver: () => {setPejet4("block");setPejet2("none");setPejet3("none");setPejet5("none");},
      render: (area: any, index: number) => (
        <span>
      <div style={{display:pejet2}}>
      <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/WA_Select.png" width="100%" />
      </div>
      </span>
      ),
    },
    {
      left: "28.7%",
      top: "60.2%",
      height: "5%",
      width: "5%",
      href: "https://google.com",
      style: { background: "rgba(0, 255, 0, 0)",zIndex: "8", cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
      <div style={{display:pejet3}}>
      <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/FAQ_Select.png" width="100%" />
      </div>
      </span>
      ),
    },
    {
      left: "53.7%",
      top: "76.8%",
      height: "19%",
      width: "8.5%",
      href: "https://google.com",
      style: { background: "rgba(0, 255, 0, 0)",zIndex: "8", cursor: "pointer", },
      onMouseOver: () => console.log("map onMouseOver"),
      render: (area: any, index: number) => (
        <span>
      </span>
      )
    }
  ];

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={"https://acsasurabaya2021.com/wp-content/plugins/perki/HALL_DASHBOARD.jpg"}
        map={mapArea}
        onMapClick={onMapClick}
        />
    ),
    // ["https://acsasurabaya2021.com/wp-content/plugins/perki/hallnew.jpg"]
    // [img]
  );

  return (
    <>
<div>
  {(anggota && paymentstatus=="PAY") ?
      <ImageMap
        className="usage-map"
        src={"https://acsasurabaya2021.com/wp-content/plugins/perki/HALL_DASHBOARD3.jpg"}
        map={mapArea}
        style={{
            width:"90%",
            position: 'relative',
            left: '50%',
            zIndex: 1,
            transform: 'translate(-50%, -24px)',
          }}
        onMapClick={onMapClick}
        />
         : (anggota && paymentstatus!="PAY") ?
         <div style={{fontSize:"25px",marginLeft:"15px"}}>Mohon klik <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor">di sini</a> - Next - Pay untuk melakukan pembayaran untuk mengaktifkan akun. Klik <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/login">di sini</a> untuk exit. </div>

        : (!anggota) ?
    <div style={{fontSize:"25px",marginLeft:"15px"}}>Mohon klik <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/theme/sponsor">di sini</a> untuk menambah anggota. Klik <a href="https://acsasurabaya2021.com/wp-content/plugins/perki/build/#/login">di sini</a> untuk exit.</div> : null
  }


{/* <div style={{height:"26%", width:"21%",position:"absolute",left:"39.6%",top:"26.5%"}}>
  <Player
    playsInline
    playing
    loop
    poster="/assets/poster.png"
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    fluid={false}
    width={"100%"}
    height={"100%"}
  />
</div> */}


</div>
  {/* <Player
    playsInline
    poster="/assets/poster.png"
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    fluid={false}
    width={"100%"}
    height={"100%"}
  /> */}
{/* </div> */}
    {/* <img src="/hall.jpg" style={{width:"100%"}} usemap="#workmap" />
    <map id="map" name="workmap">
  <area shape="rect" coords="225,221,321,308" alt="Computer" onClick={()=>alert("Exebition")} href="https://detik.com" />
</map> */}
   </>
  )
}

export default Dashboard
