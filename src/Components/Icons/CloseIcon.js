import React, { Fragment } from 'react'
import {BiWindowClose} from "react-icons/bi";
import { Link } from 'react-router-dom';

const CloseIcon = () => {
  return (
    <Fragment>
      <Link to="/repos/"><BiWindowClose style={{width:30, height:30,paddingTop:5, paddingLeft:10, color:"white"}}/></Link>
    </Fragment>
  )
}

export default CloseIcon
