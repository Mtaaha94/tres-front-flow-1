import React from 'react'
import simon from '../layout/simon.png'
import laptop from './laptop.png'
const friends = () => {
    return (
        <div>
            <div >
                <img src={simon} style={{alignSelf:'center', display:'flex', alignItems:'center'}} color='inherit'/>
                <span style={{lineHeight:'2',fontWeight:'500' ,backgroundColor:'white'}}>Simmon Bradley</span>  
            </div>
            <img src={laptop} />
        </div>
    )
}

export default friends