import React, { useState } from 'react'
import {MdErrorOutline} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UPI = ({amountPayble}) => {
   const data = useSelector((state) => state.auth.finalPrice)
   console.log("Price",data)
    const [upiID, setupiID] = useState("");

    amountPayble = amountPayble || 0

    const navigate = useNavigate();

    const handleClick = ()=>{
        if(!upiID){
            alert("Enter your upiID");
        }
        else{
        
        navigate("/successful")
        }
    }
  return (
    <div className='upi__component'>
        <div className='upi__amount'>
            <div className='amount__payble'>Amount Payble</div>
            <div className='amount__payble'>₹ {data - 100}</div>
        </div>
        <div className='upiError__container'>
            <div className='upi__error'>
                <img src="https://files.myglamm.com/site-images/original/downtime-warning.png" alt="" /> 
                <span>UPI is currently experiencing low success rates, please use an alternate payment method.</span>
            </div>
            <div></div>
            
        </div>
        <div className='upiError__container'>
            <div className='upiError__container upi__button'>
                <input type="text" 
                placeholder='Enter your UPI ID'
                onChange={e=>setupiID(e.target.value)}
                />
                <button onClick={handleClick}>REQUEST</button>
            </div>
            <div></div>
            
        </div>
    </div>
  )
}

export default UPI