import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://primavisiglobalindo.com/" target="_blank" rel="noopener noreferrer">PT Primavisi Globalindo</a>
        <span className="ml-1">&copy; 2021 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://acsasurabaya2021.com/" target="_blank" rel="noopener noreferrer">ACSA 2021 Surabaya</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
