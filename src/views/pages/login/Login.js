import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import { useState,useEffect} from 'react';
import { Image,Modal,Button, Space} from 'antd';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';


const Login = () => {
  let history = useHistory();

  const [myform,setMyform] = useState({email:"",password:""});

  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      // return <Completionist />;
    } else {
      // Render a countdown
      // return <div style={{width:"300px"}}>Live in {hours} hours {minutes} minutes  {seconds} seconds</div>;
    }
  };

  const loginklik = () => {
    console.log("masuk sini");

    const payload = {
      email:myform.email,
      // user:myform.username,
      password:myform.password,
      mtd:"SIGNIN"
    }
    axios({
      // url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
      url: "http://localhost/PHP-Native/kirimdata.php",
      // url: "http://localhost/perki/kirimdata.php",
      data: payload,
      contentType: "application/json",
      method: 'POST',
    })
      .then((data) => {
        var temp = data.data;
        console.log(temp);
          localStorage.setItem("loginid",temp.data);
          localStorage.setItem("nama",temp.nama);
          if (temp.status=="ANGGOTA") {
            localStorage.setItem("status",temp.status);
          } else {
            localStorage.setItem("status","");

          }

          if (temp.sukses==="OK") {
            history.push('/dashboard');
          } else {
            alert("user atau password salah");
          }

      })
      .catch(() => {
        console.log('Internal server error');
      });

  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
          <a href="https://acsasurabaya2021.com"><Image preview={false} src="https://acsasurabaya2021.com/wp-content/uploads/2019/05/Logo-atas.png" width="200px" /></a>
            <CCardGroup >
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                  {/* {JSON.stringify(myform)} */}
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" autoComplete="username" onChange={e =>setMyform({...myform,email:e.target.value})} value={myform.username} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={e =>setMyform({...myform,password:e.target.value})} value={myform.password} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={()=>loginklik()}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="6">
                        {/* <CButton color="primary" className="px-4" onClick={()=>loginklik()}>Login</CButton> */}
                        {/* <Countdown
    date={Date.now()+1000}
    intervalDelay={0}
    precision={3}
    renderer={renderer}
  /> */}
                      </CCol>
                      <CCol xs="6" className="text-right">
                        {/* <CButton color="link" className="px-0">Forgot password?</CButton> */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5 d-md-down-none" style={{ width: '44%',backgroundColor:"rgb(0,70,129)" }}>
                <CCardBody className="text-center">
                  <div style={{backgroundColor:"rgb(0,70,129)"}}>
                    <h2 style={{color:"white"}}>Sign up</h2>
                    <p>Registration for sponsor and personal group.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1} style={{backgroundColor:"rgb(0,70,129)"}}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
            <div class="visibledevice">
            <CCardGroup >
              <CCard className="text-white py-5" style={{ width: '100%',backgroundColor:"rgb(0,70,129)" }}>
                <CCardBody className="text-center">
                  <div style={{backgroundColor:"rgb(0,70,129)"}}>
                    <h2 style={{color:"white"}}>Sign up</h2>
                    <p>Registration for sponsor and personal group.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1} style={{backgroundColor:"rgb(0,70,129)"}}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
            </div>
            <Image preview={false} src="https://acsasurabaya2021.com/images/login.jpg" />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
