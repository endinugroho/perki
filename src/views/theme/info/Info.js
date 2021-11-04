import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Info = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Informasi
        </CCardHeader>
        <CCardBody>
          <p>Jadwal</p>
          <p>Workshop</p>
          <p>Simposium</p>
          <p>Zoom</p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Info
