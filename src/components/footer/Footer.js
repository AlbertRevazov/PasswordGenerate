/* eslint-disable react/no-unknown-property */
import React from 'react'
import { MDBFooter, MDBContainer} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#022' }}>
    <MDBContainer className='p-4'></MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2022 Copyright:
      <a className='text-white' href='https://layout-gray.vercel.app/'>
        A.Revazov
      </a>
    </div>
  </MDBFooter>
  )
}

export {Footer};
