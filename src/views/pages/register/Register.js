import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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
import {Modal,Button, Space, Input} from 'antd';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';

const Register = () => {
const [user,setUser] = useState({nama:"",username:"",email:"",password:"",confirmpassword:""});
let history = useHistory();

const simpan = () => {
  var userku = "";
  if (user.nama==="") userku=userku+"nama,";
  if (user.username==="") userku=userku+"username,";
  if (user.email==="") userku=userku+"email,";
  if (user.password==="") userku=userku+"password,";
  if (user.confirmpassword==="") userku=userku+"confirm password,";

  // axios.get(`https://primavisiglobalindo.net/demo/conference1/wp-content/plugins/perki/test.php`)
  //     .then(res => {
  //       const persons = res.data;
  //       // this.setState({ persons });
  //       console.log(persons);
  //     })
//   axios({
//     method: "POST",
//     url: "https://primavisiglobalindo.net/demo/conference1/wp-content/plugins/perki/kirimdata.php",
//     data: {"username":user.username,"email":user.email,"password":user.password,"mtd":'ADDSPONSOR'},
//     contentType: "application/json",
//     success: function (result) {
//       console.log(result);
//       Modal.info({
//         title: 'This is a notification message',
//         content: (
//           <div>
//             <p>{"Data sudah tersimpan"}</p>
//           </div>
//         ),
//         onOk() {},
//       });
//     },
//     error: function (result, status) {
//       console.log(result);
//       // alert("data sudah tersimpan dan dikirim via email");
//     }
//  });

 axios({
  method: "POST",
  url: "https://acsasurabaya2021.com/wp-content/plugins/perki/kirimdata.php",
  // url: "http://localhost/perki/kirimdata.php",
  data: {"nama":user.nama,"username":user.username,"email":user.email,"password":user.password,"mtd":'ADDSPONSOR'},
  contentType: "application/json",
})
  .then((data) => {

    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>{"Data sudah tersimpan"}</p>
        </div>
      ),
      onOk() {
        history.push('/signin');

      },
    });
})
  .catch(() => {
    console.log('Internal server error');
  });




}


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
          <img src="https://acsasurabaya2021.com/wp-content/uploads/2019/05/Logo-atas.png" width="200" />
            <CCard className="mx-4" >
              <CCardBody className="p-4">
              <img src="https://acsasurabaya2021.com/wp-content/plugins/perki/register.png" width="300" style={{float:"right"}} />
                <CForm>
                  {/* {JSON.stringify(user)} */}
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" onChange={(e)=>setUser({...user,username:e.target.value})} value={user.username} />
                  </CInputGroup> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Company  / Personal Group name" autoComplete="nama" onChange={(e)=>setUser({...user,nama:e.target.value})} value={user.nama} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" onChange={(e)=>setUser({...user,email:e.target.value})} value={user.email}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    {/* <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend> */}
                    <Input.Password  addonBefore="PW" type="password" placeholder="Password" autoComplete="new-password" onChange={(e)=>setUser({...user,password:e.target.value})} value={user.password} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    {/* <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend> */}
                    <Input.Password addonBefore="PW" type="password" placeholder="Password Confirm" autoComplete="new-password" onChange={(e)=>setUser({...user,confirmpassword:e.target.value})} value={user.confirmpassword} />
                  </CInputGroup>
                  {/* <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" onChange={(e)=>setUser({...user,confirmpassword:e.target.value})} value={user.confirmpassword} />
                  </CInputGroup> */}
                  <CButton color="success" block onClick={()=>simpan()}>Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
