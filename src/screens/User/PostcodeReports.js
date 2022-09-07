import React from 'react'
import Sidebar from '../../components/Header/Sidebar'
import '../css/Card.css'

import '../../screens/css/table.css'

const PostcodeReports = () => {

   

    return (
        <div style={{ display: 'flex' }}>

            <Sidebar active='sites' />

            <div style={{ width: '100%', padding: 40 }}>

                <div className='card'>
                    <div className='card-body'>

                        <div className='card-title'>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontSize: '22.5px' }}>Postcode Reports</div>
                                <div className='form-inline'>

                                </div>
                            </div>

                        </div>

                        <div style={{paddingTop: '10px',fontSize:'12px' }}>
                            Postcode
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px 0' }}>


                            <input  type='text' className='search-input' 
                            style={{borderLeft:'1px solid lightgray',}} />
                            <div className='search-icon-container' 
                            style={{color:'white',backgroundColor:'#209FCA',border:'1px solid #209FCA'}}>
                                Generate Code
                            </div>

                        </div>








                    </div>
                </div>

            </div>

        </div>
    )
}

export default PostcodeReports