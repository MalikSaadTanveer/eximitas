import React, { useState } from 'react'
import Sidebar from '../../components/Header/Sidebar'
import './UserCreate.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'
// import { paths } from '../../utils/path'
const UserCreate = () => {
    const navigate =  useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const options = ['Administrator', 'Client', 'Manager', 'INTEX247'];
    const options1 = ['Male', 'Female'];
    const options2 = ['Pakistan', 'USA', 'England', 'New Zealand', 'India', 'Sri Lanka'];
    const options3 = ['Yes', 'No'];
    const defaultOption = options3[1];
    const options4 = ['Passport', 'ID Card'];
    const options5 = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
    const options6 = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleNavigate = ()=>{
        navigate(-1)
      }
    return (
        <div style={{ display: 'flex' }}>

            <Sidebar
            // active='users' 
            />


            <div style={{ width: '100%', }}>
                <BreadCrumb text='User' />
                <div style={{ width: '100%', padding: 40 }}>

                    <div className='card'>
                        <div className='card-body'>

                            <div className='card-title'>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontSize: '18px' }}>Create User</div>

                                </div>

                            </div>



                            <div className='user-index-table'>

                                <div style={{ borderBottom: '1px solid lightgray', }}>

                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='role'>Role</label>
                                        <Dropdown options={options} placeholder=" _" className='dropdown-item' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='first_name'>First Name</label>
                                        <input type='text' placeholder='Enter first name' className='create-input' id='first_name' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='last_name'>Last Name</label>
                                        <input type='text' placeholder='Enter last name' className='create-input' id='last_name' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='email'>Email Address</label>
                                        <input type='email' placeholder='Enter email address' className='create-input' id='email' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='password'>Password</label>
                                        <input type='password' placeholder='Enter password' className='create-input' id='password' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='cpassword'>Confirm Password</label>
                                        <input type='password' placeholder='Confirm password' className='create-input' id='cpassword' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='dob'>Date of Birth</label>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='create-input' id='dob' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='gender'>Gender</label>
                                        <Dropdown options={options1} placeholder="Select an option" className='dropdown-item' id='gender' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='nationality'>Nationality</label>
                                        <Dropdown options={options2} placeholder="_" className='dropdown-item' id='nationality' />
                                    </div>



                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '-10px' }}>
                                        <div style={{ width: '48%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='mobile'>Mobile Number</label>
                                            <input type='text' placeholder='Enter mobile number' className='create-input' id='mobile' />
                                        </div>
                                        <div style={{ width: '50%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='phone'>Other Phone Number (optional)</label>
                                            <input type='text' placeholder='Enter other phone number' className='create-input' id='phone' />
                                        </div>

                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '-10px' }}>
                                        <div style={{ width: '48%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='pob'>Place of Birth - City</label>
                                            <input type='text' placeholder='Enter place of birth' className='create-input' id='pob' />
                                        </div>
                                        <div style={{ width: '50%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='pobcc'>Place of Birth - Country Code</label>
                                            <Dropdown options={options2} placeholder="_" className='dropdown-item' id='pobcc' />
                                        </div>

                                    </div>

                                </div>





                                <div style={{ margin: '20px 0' }} >
                                    <div style={{ margin: '0px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='access_ph'>Has Access to Phone</label>
                                        <Dropdown options={options3} placeholder="_" value={defaultOption} className='dropdown-item' id='access_ph' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='access_ld'>Has Access Lock Down</label>
                                        <Dropdown options={options3} placeholder="_" value={defaultOption} className='dropdown-item' id='access_ld' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='access_p'>Has Access Pin</label>
                                        <input type='text' placeholder='9354' className='create-input' id='access_p' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='hdl'>Has Driving Licence</label>
                                        <Dropdown options={options3} placeholder="_" value={defaultOption} className='dropdown-item' id='hdl' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='hca'>Has Car Access</label>
                                        <Dropdown options={options3} placeholder="_" value={defaultOption} className='dropdown-item' id='hca' />
                                    </div>

                                </div>





                                <div style={{ margin: '20px 0' }} >
                                    <div className='card-title'>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ fontSize: '16px' }}>ID Card</div>

                                        </div>

                                    </div>

                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='ict'>ID Card Type</label>
                                        <Dropdown options={options4} placeholder="Passport" value={options4[0]} className='dropdown-item' id='ict' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='icdn'>ID Card Document Number</label>
                                        <input type='text' placeholder='Enter ID card document number' className='create-input' id='icdn' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='icid'>ID Card Issue Date</label>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='create-input' id='icid' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='iced'>ID Card Expiry Date</label>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='create-input' id='iced' />
                                    </div>

                                </div>





                                <div style={{ margin: '20px 0' }} >
                                    <div className='card-title'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ fontSize: '16px' }}>Visa Information</div>
                                        </div>
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='ict'>Visa Required?</label>
                                        <Dropdown options={options3} placeholder="_" className='dropdown-item' id='ict' />
                                    </div>
                                </div>


                                <div style={{ margin: '20px 0' }} >
                                    <div className='card-title'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ fontSize: '16px' }}>Holiday Details</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
                                        <div style={{ width: '48%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='hsd'>Holiday Start Date</label>
                                            <div style={{ display: 'flex', width: '100%', }}>
                                                <Dropdown options={options5} placeholder="_" value={options5[0]} className='dropdown-item' id='hsd' />
                                                <Dropdown options={options6} placeholder="_" value={options6[0]} className='dropdown-item' />
                                            </div>
                                        </div>
                                        <div style={{ width: '50%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='hpr'>Holiday Pay Rate</label>
                                            <input type='number' min={1} placeholder='1.00' className='create-input' id='hpr' />
                                        </div>

                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
                                        <div style={{ width: '32%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='ahh'>Available Holiday (Hours)</label>
                                            <input type='number' min={1} placeholder='1.00' className='create-input' id='ahh' />

                                        </div>
                                        <div style={{ width: '32%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='hac'>Holiday Accrual Rate (Minutes per hour worked)</label>
                                            <input type='number' min={10} placeholder='10' className='create-input' id='hac' />
                                        </div>
                                        <div style={{ width: '33%', margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                            <label htmlFor='mhr'>Minimum Holiday Hours</label>
                                            <input type='number' min={10} placeholder='' className='create-input' id='mhr' />
                                        </div>

                                    </div>
                                </div>








                                <div style={{ margin: '20px 0' }} >
                                    <div className='card-title'>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ fontSize: '16px' }}>Taxpayer Reference</div>

                                        </div>

                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='utr'>Unique Taxpayer Reference</label>
                                        <input type='text' placeholder='Enter unique taxpayer reference' className='create-input' id='utr' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='tc'>Tax Code</label>
                                        <input type='text' placeholder='Enter tax code' className='create-input' id='tc' />
                                    </div>
                                    <div style={{ margin: '10px 0', fontSize: '12.6px', display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor='nin'>National Insurance Number</label>
                                        <input type='text' placeholder='Enter national insurance number' className='create-input' id='nin' />
                                    </div>


                                </div>


                                <div style={{display: 'flex',justifyContent: 'space-between'}}>
                                    <div onClick={handleNavigate} className='cancel-btn'>
                                        Cancel
                                    </div>
                                    <div onClick={handleNavigate} className='submit-btn'>
                                        Submit
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserCreate