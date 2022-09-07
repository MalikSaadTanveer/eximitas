import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import {IoNotificationsOutline,IoSettingsOutline,IoCaretDown} from 'react-icons/io5'
// import {FiSettings} from 'react-icons/fi'
const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header-logo'>
          <img src={Logo}  alt='logo' className='logo'/>
        </div>
        <div className='header-right'>
          <div className='items'>
            <IoNotificationsOutline size={18}/>
          </div>
          <div>|</div>
          <div className='items'>
            <IoSettingsOutline size={18}/>
          </div>
          <div>|</div>
          <div className='items'>
            Rashid Dev <IoCaretDown size={12} />
          </div>
        </div>

      </div>



    

      

    </div>
  )
}

export default Header