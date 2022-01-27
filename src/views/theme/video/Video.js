import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from "axios";
import { Modal, DatePicker, Input, Form, Radio, Select, Button } from "antd";
import Countdown from "react-countdown";
import { element } from "prop-types";
import 'antd/dist/antd.css';
import { useParams } from "react-router-dom";

const Index = () => {
  const [data, setData] = useState(null);
  const [full, setFull] = useState("FULL");
  const { id } = useParams();
  const [video,setVideo] = useState("");
  useEffect(() => {
    if (data == null) {
      fetchData();
    }
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    console.log(id);
    if (id=="1-1") {
        setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%201.mp4");
    }
    if (id=="1-2") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%202.mp4");
    }
    if (id=="1-3") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%203.mp4");
    }
    if (id=="1-4") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%204.mp4");
    }
    if (id=="1-5") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%205.mp4");
    }
    if (id=="1-6") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%206.mp4");
    }
    if (id=="1-7") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%207.mp4");
    }
    if (id=="1-8") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%208.mp4");
    }
    if (id=="1-9") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%209.mp4");
    }
    if (id=="1-10") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%2010.mp4");
    }
    if (id=="1-11") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%2011.mp4");
    }
    if (id=="1-12") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%2012.mp4");
    }
    if (id=="1-13") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%2013.mp4");
    }
    if (id=="1-14") {
      setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%2014.mp4");
    }

 if (id=="2-1") {
      setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2001.mp4");
  }
  if (id=="2-2") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2002.mp4");
  }
  if (id=="2-3") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2003.mp4");
  }
  if (id=="2-4") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2004.mp4");
  }
  if (id=="2-5") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2005.mp4");
  }
  if (id=="2-6") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2006.mp4");
  }
  if (id=="2-7") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2007.mp4");
  }
  if (id=="2-8") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2008.mp4");
  }
  if (id=="2-9") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2009.mp4");
  }
  if (id=="2-10") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2010.mp4");
  }
  if (id=="2-11") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2011.mp4");
  }
  if (id=="2-12") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2012.mp4");
  }
  if (id=="2-13") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2013.mp4");
  }
  if (id=="2-14") {
    setVideo("https://acsasurabaya2021.com/video/hari2/sympo%2014.mp4");
  }

//=======================
if (id=="3-1") {
  setVideo("https://acsasurabaya2021.com/video/hari3/sympo%2001.mp4");
}
if (id=="3-2") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%2002.mp4");
}
if (id=="3-3") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%2003.mp4");
}
if (id=="3-4") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%204.mp4");
}
if (id=="3-5") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%205.mp4");
}
if (id=="3-6") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%206.mp4");
}
if (id=="3-7") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%207.mp4");
}
if (id=="3-8") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%208.mp4");
}
if (id=="3-9") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%209.mp4");
}
if (id=="3-10") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%2010.mp4");
}
if (id=="3-11") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%2011.mp4");
}
if (id=="3-12") {
setVideo("https://acsasurabaya2021.com/video/hari3/sympo%2012.mp4");
}


    // switch(id) {
    //   case '11':
    //     setVideo("https://acsasurabaya2021.com/video/hari1/sympo%20sesi%201.mp4");
    //   case '12':
    //     setVideo("");
    // }
    // alert(id);
  }, [data]);

  // componentDidMount() {
    // document.addEventListener('contextmenu', (e) => {
    //   e.preventDefault();
    // });
    // console.log("hallo");
  // };

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getOralZoom`)
      .then((res) => {
        // console.log(res);
        if (res.data.status == 1) {
          let dataRes = res.data.data;
          if (dataRes.zoom_room_id != "") {
            setData(dataRes);
          } else {
            setData([]);
            // alert("this Feature is not active");
          }
        } else {
          setData([]);
          // alert("this Feature is not active");
        }
      })
      .catch((err) => console.log(err));
  };

  function openZoom(meetingId, passcode = null) {
    if (passcode != null) {
      passcode = "?pwd=" + passcode;
    } else {
      passcode = "";
    }
    window.open(`https://us04web.zoom.us/j/${meetingId}${passcode}`);
  }

  const hideelement = () => {
    console.log("hide");
    var elem = document.getElementsByClassName("ytp-impression-link");
    console.log(elem);
    // elem.remove();

  }

  return (
    <>
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">VIDEO</span>
        </CCardHeader>
        <CCardBody>
        <div>
        <CRow>
          <CCol sm={12}>
          {/* <p><iframe title="ACSA" src={"http://54.169.143.108:3050/?"+localStorage.getItem("nama")} allowfullscreen="allowfullscreen" width="100%" height="700px"></iframe></p> */}
          {/* <div><Button type="primary" onClick={()=>setFull("FULL")}>Full Screen</Button></div> */}

          {/* <iframe src="https://drive.google.com/file/d/1PJg3KGk5uvG03MuBFVuUjUOXnVtkHz93/preview" width="100%" height="500px" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe> */}
          {/* <video><source src="https://acsasurabaya2021.com/video/hari1/sympo%20sesi%201.mp4" type="video/mp4" /></video> */}
          <video width="100%" height="500" controls>
  <source src={video} type="video/mp4" />
  {/* <source src="movie.ogg" type="video/ogg"> */}
  Your browser does not support the video tag.
</video>
{/* <embed width="100%" height="700" src="https://drive.google.com/file/d/1PJg3KGk5uvG03MuBFVuUjUOXnVtkHz93/preview"></embed> */}
          </CCol>
        </CRow>
</div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Index;
