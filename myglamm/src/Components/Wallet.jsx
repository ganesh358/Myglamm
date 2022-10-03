import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Wallet = ({amountPayble}) => {
  const data = useSelector((state) => state.auth.finalPrice)
  amountPayble = amountPayble || 0

  const navigate = useNavigate();

  const handleClick = (text)=>{
     
      navigate("/successful")
  }
  return (
    <div className='upi__component'>
        <div className='upi__amount'>
            <div className='amount__payble'>Amount Payble</div>
            <div className='amount__payble'>₹ {data-100}</div>
        </div>
        <div className='logo__wallet'>
          <div className='img__container' onClick={()=>handleClick("PayTm")}><img src="https://files.myglamm.com/site-images/original/ic-Paytm.png" alt="" /></div>
          <div className='img__container' onClick={()=>handleClick("Freecharge")}><img src="https://s3.ap-south-1.amazonaws.com/files.myglamm.net/myglamm-alpha/original/ic_Freecharge.png" alt="" /></div>
          <div className='img__container' onClick={()=>handleClick("Ola Money")}><img src="https://s3.ap-south-1.amazonaws.com/files.myglamm.net/myglamm-alpha/original/ic_OlaMoney.png" alt="" /></div>
          <div className='img__container' onClick={()=>handleClick("PayZap")}><img src="https://s3.ap-south-1.amazonaws.com/files.myglamm.net/myglamm-alpha/original/ic_Payzapp.png" alt="" /></div>
          <div className='img__container' onClick={()=>handleClick("PhonePe")}><img src="https://files.myglamm.com/site-images/original/ic-PhonePe_1.png" alt="" /></div>
          <div className='img__container' onClick={()=>handleClick("MobiQuick")}><img src="https://s3.ap-south-1.amazonaws.com/files.myglamm.net/myglamm-alpha/original/ic_Mobikwik.png" alt="" /></div>
        </div>
  </div>
  )
}

export default Wallet