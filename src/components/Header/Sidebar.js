import React from 'react'
// import { FaRegNewspaper } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { sidebarItems } from '../../utils/sidebarItems'

const Sidebar = ({active}) => {
    return (
        <div>

            <div className='sidebar'>
                <div className='sidebar-inner'>
                    {
                        sidebarItems.map((item, index) => (
                            <div key={index}>
                                <div className='sidebar-header'>
                                    {item.title}
                                </div>
                                {
                                    item.item.map((item1, index) => (
                                        <NavLink key={index} className='sidebar-items' to={item1.to}
                                            style={{backgroundColor:active === item1.name.toLowerCase() && '#209FCA'}}
                                        >
                                            {item1.icon}
                                            {item1.name}
                                        </NavLink>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Sidebar