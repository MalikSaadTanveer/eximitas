import React, { useEffect } from "react";
import Sidebar from "../../components/Header/Sidebar";




function EmployeeMap() {
  useEffect(() => {

  }, [])

  return (


    <div style={{ display: 'flex' }}>

      <Sidebar active='employee map' />

      <div style={{ width: '100%', padding: 40 }}>

        <div className='card'>
          <div className='card-body'>

            <div className='card-title'>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '22.5px' }}>Employee Map</div>
                <div className='form-inline'>
                </div>
              </div>

            </div>

            <img src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png" alt="maps"
              style={styles.img} />

          </div>
        </div>

      </div>

    </div>



  );
}

const styles = {
  img: {
    width: '100%',
    height: '500px',
    padding: '10px',
    cursor:'pointer',
  }
}

export default React.memo(EmployeeMap)