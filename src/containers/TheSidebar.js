import React, {useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CNavItem,
  CProgress,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import navigation from './_nav'

// sidebar nav config


const TheSidebar = () => {
  const dispatch = useDispatch()
  const [idanggota,setIdanggota] = useState("");
  const [nama,setNama] = useState("");
  const [idsponsor, setIdsponsor] = useState("");
  const [anggota,setAnggota] = useState("");
  const [workshopku,setWorkshopku] = useState("");
  const [_nav,set_nav] = useState([]);
  //anggota
  const _nav1 = [
    {
      _tag: 'CSidebarNavTitle',
      _children: ['ACSA Surabaya 2021']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Lobby',
      to: '/dashboard',
      icon: 'cil-home',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Session',
      to: '/theme/session',
      icon: 'cil-list',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Exhibition',
      to: '/theme/exhibition',
      icon: 'cil-layers',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Symposium',
      to: '/theme/symposium',
      icon: 'cil-cloud-download',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Workshop',
      to: '/theme/workshop',
      icon: 'cil-puzzle',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Agenda',
      to: '/theme/jadwal',
      icon: 'cil-speedometer',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Account',
      to: '/theme/sponsor',
      icon: 'cil-people',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Exit',
      to: '/login',
      icon: 'cil-arrow-right',
    },

  ];
  //anggota belum bayar
  const _nav2 = [
    {
      _tag: 'CSidebarNavTitle',
      _children: ['ACSA Surabaya 2021']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Account',
      to: '/theme/sponsor',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Exit',
      to: '/login',
      icon: 'cil-user',
    },

  ]
  const _nav3 = [
    {
      _tag: 'CSidebarNavTitle',
      _children: ['ACSA Surabaya 2021']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Lobby',
      to: '/dashboard',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Session',
      to: '/theme/session',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Exhibition',
      to: '/theme/exhibition',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Symposium',
      to: '/theme/symposium',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Workshop',
      to: '/theme/workshop',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Agenda',
      to: '/theme/jadwal',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Account',
      to: '/theme/sponsor',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Exit',
      to: '/login',
      icon: 'cil-user',
    },

  ];


  var show = useSelector(state => state.sidebarShow)
  // const [show,setShow] = useState(false)
  // const forceUpdate: () => void = React.useState()[1].bind(null, {})  // see NOTE below

  // const logout = () => {
  //   console.log("logout");
  //   localStorage.removeItem("loginid");
  //   localStorage.removeItem("nama");
  //   localStorage.removeItem("status");
  //   history.push('/signin');
  //   dispatch({type: 'set', sidebarShow: false});

  // }


  useEffect(() => {
    // show = false;
    // forceUpdate();
    // console.log("masuk sini show"+show);
    var idsponsor = localStorage.getItem("loginid");
    setIdsponsor(idsponsor);
    var anggotast = localStorage.getItem("status");
    if (anggotast=="ANGGOTA") {
      setAnggota(true) } else setAnggota(false);
    setNama(localStorage.getItem("nama"))

  var mtd2 ="";
  if (anggotast=="ANGGOTA") {
    mtd2 = "ANGGOTA2";
    // console.log("anggota2");
  } else
  {
    mtd2 = "ANGGOTA";
    set_nav(_nav2);
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
        // console.log(data.data[0]);
        setAnggota(data.data[0]);
        if (data.data[0].paymentstatus=="PAY") {
          set_nav(_nav1);
          // console.log("nav1");
        } else {
          set_nav(_nav2);
          // console.log("nav2");

        }
        // setWorkshopku(data.data[0].workshop);
      })
      .catch(() => {
        // console.log('Internal server error');
      });
    }, [])

  return (
    <CSidebar
      show={show}
      // unfoldable
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
      </CSidebarBrand>
      <CSidebarNav  style={{backgroundColor:"rgb(1,77,136)"}}>

        <CCreateElement
          items={_nav}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />

        <CSidebarNavDivider />
        {/* <CSidebarNavTitle>System Utilization</CSidebarNavTitle>
        <CNavItem className="px-3 d-compact-none c-d-minimized-none">
          <div className="text-uppercase mb-1"><small><b>CPU Usage</b></small></div>
          <CProgress size="xs" value={25} color="info" />
          <small className="text-muted">348 Processes. 1/4 Cores.</small>
        </CNavItem>
        <CNavItem className="px-3 d-compact-none c-d-minimized-none">
          <div className="text-uppercase mb-1"><small><b>Memory Usage</b></small></div>
          <CProgress size="xs" value={70} color="warning" />
          <small className="text-muted">11444GB/16384MB</small>
        </CNavItem>
        <CNavItem className="px-3 mb-3 d-compact-none c-d-minimized-none">
          <div className="text-uppercase mb-1"><small><b>SSD 1 Usage</b></small></div>
          <CProgress size="xs" value={95} color="danger" />
          <small className="text-muted">243GB/256GB</small>
        </CNavItem> */}
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
