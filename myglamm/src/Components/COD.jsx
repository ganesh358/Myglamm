import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const COD = ({amountPayble}) => {
  const data = useSelector((state) => state.auth.finalPrice)
    amountPayble = amountPayble || 0

    const navigate = useNavigate();

    const handleClick = ()=>{
       
        navigate("/successful")
    }
  return (
    <div className='upi__component'>
        <div className='upi__amount'>
            <div className='amount__payble'>Amount Payble</div>
            <div className='amount__payble'>₹ {data-100}</div>
        </div>
        <div className='cod__text'>
        By selecting cash on delivery, you are choosing to pay cash to the agent when you receive your order.
        </div>
        <button className='cod__btn' onClick={handleClick}>CONFIRM & PLACE ORDER</button>
    </div>
  )
}

export default COD