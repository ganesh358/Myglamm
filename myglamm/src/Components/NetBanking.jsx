import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const NetBanking = ({amountPayble}) => {
    const data = useSelector((state) => state.auth.finalPrice)
    const [bank, setBank] = useState();

    amountPayble = amountPayble || 0

    const navigate = useNavigate();

    const handleClick = ()=>{
        if(!bank){
            alert("Choose your Bank")
        }
        else{
       
        navigate("/successful")
        }
    }

  return (
    <div className='upi__component'>
        <div className='upi__amount'>
            <div className='amount__payble'>Amount Payble</div>
            <div className='amount__payble'>₹ {data-100}</div>
        </div>
    
    <div>
        <div className='net__button'>
            <select name="Bank" id="banks" onChange={e=>setBank(e.target.value)}>
                <option value="">Choose Your Bank</option>
                <option value="SBI">state Bank Of India</option>
                <option value="Canara Bank">Canara Bank</option>
                <option value="Bandhan Bank">Bandhan Bank</option>
                <option value="Bank of Baroda">Bank of Baroda</option>
                <option value="Bank of India">Bank of India</option>
                <option value="Punjab National Bank">Punjab National Bank</option>
            </select>
            <button onClick={handleClick}>₹{amountPayble}</button>
        </div>
        <div></div>
        
    </div>
</div>
  )
}

export default NetBanking