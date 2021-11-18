import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import {
  HomeOutlined,
  RollbackOutlined
} from '@ant-design/icons';
import CIcon from '@coreui/icons-react'
import { Image} from 'antd';

// routes config
import routes from '../routes'
import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const asideShow = useSelector(state => state.asideShow)
  const darkMode = useSelector(state => state.darkMode)
  const sidebarShow = useSelector(state => state.sidebarShow)
  let history = useHistory();

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
        <a onClick={() => history.push('/dashboard')}>
          <HomeOutlined style={{position:"absolute",fontSize:"32px",marginTop:"11px",marginLeft:"30px"}}/>
        </a>
      {/* <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      /> */}
      <CHeaderBrand className="mx-auto">
        <a onClick={() => history.push('/dashboard')}>
          <Image  preview={false} src="https://acsasurabaya2021.com/wp-content/plugins/perki/Logo-atas2.png" width="200px" />
        </a>
      </CHeaderBrand>

      {/* <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" > */}
          {/* <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink> */}
        {/* </CHeaderNavItem>
        <CHeaderNavItem  className="px-3"> */}
          {/* <CHeaderNavLink to="/users">Users</CHeaderNavLink> */}
        {/* </CHeaderNavItem>
        <CHeaderNavItem className="px-3"> */}
          {/* <CHeaderNavLink>Settings</CHeaderNavLink> */}
        {/* </CHeaderNavItem>
      </CHeaderNav> */}

      {/* <CHeaderNav className="px-3"> */}
        {/* <CToggler
          inHeader
          className="ml-3 d-md-down-none c-d-legacy-none"
          onClick={() => dispatch({type: 'set', darkMode: !darkMode})}
          title="Toggle Light/Dark Mode"
        >
          <CIcon name="cil-moon" className="c-d-dark-none" alt="CoreUI Icons Moon" />
          <CIcon name="cil-sun" className="c-d-default-none" alt="CoreUI Icons Sun" />
        </CToggler> */}
        {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/> */}
        {/* <TheHeaderDropdown/> */}
        {/* <CToggler
          inHeader
          className="d-md-down-none"
          onClick={() => dispatch({type: 'set', asideShow: !asideShow})}
        >
          <CIcon className="mr-2" size="lg" name="cil-applications-settings" />
        </CToggler> */}
      {/* </CHeaderNav> */}

      {/* <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter className="border-0 c-subheader-nav m-0 px-0 px-md-3" routes={routes} />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink>
            <CLink
              className="c-subheader-nav-link"
              aria-current="page"
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink>
            <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink>
          </div>          
      </CSubheader> */}              
    </CHeader>
  )
}

export default TheHeader
