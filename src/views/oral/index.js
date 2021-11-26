import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import axios from 'axios'

const Index = () => {  
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, [data]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}?function=getOralZoom`)
      .then((res) => {
        // console.log(res);
        let dataRes = res.data.data
        setData(dataRes)
        openZoom(dataRes.zoom_room_id, dataRes.passcode)
      })
      .catch((err) => console.log(err));
  };

  function openZoom(meetingId, passcode = null){
    if(passcode != null){
      passcode = "?pwd="+passcode;        
    }else{
      passcode = ""
    }
    window.open(`https://us04web.zoom.us/j/${meetingId}${passcode}`);
  }

  return (
    <>        
      <CCard>
        <CCardHeader style={{ fontSize: "25px" }}>
          <span className="badge badge-info">Oral Presentation</span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              {data ? (
                <>
                  <h4>
                    {data.name}                    
                  </h4>
                  <p>{data.desc}</p>
                  <small><i>If zoom not opened please refresh this web or contact admin</i></small>
                </>                                  
              ) : (
                <h4>Please wait</h4>
              )}
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Index;
