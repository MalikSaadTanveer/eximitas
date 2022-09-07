import React from 'react'
import './BreadCrumb.css'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
const BreadCrumb = ({text}) => {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate(-1)
  }
  return (
    <div className='breadcrumb-bar'>
        <div onClick={handleNavigate}
        style={{ display: 'flex',alignItems: 'center',marginRight: '10px',cursor:'pointer',color:'#005D8E',fontSize:'13px',fontWeight:'bold' }}>
        <IoArrowBackCircleOutline size={15} style={{marginRight:'3px'}}/>
          <div>
          Back
          </div>
        </div>
        <div style={{fontSize:'13px'}}>{text} / Create</div>
    </div>
  )
}

export default BreadCrumb