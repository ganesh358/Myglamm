import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreditCard = ({amountPayble}) => {

    const [no, setNo] = useState("");
    const [name, setName] = useState("");
    const [mm, setMM] = useState("");
    const [yy, setYY] = useState("");
    const [cvv, setCvv] = useState("");
    const data = useSelector((state) => state.auth.finalPrice)

    amountPayble = amountPayble || 0

    const navigate = useNavigate();

    const handleClick = ()=>{
        console.log(no, name, mm, yy, cvv, "Hello")
        if(no && name && mm && yy && cvv){
        
        navigate("/successful")}
        else{
            alert("Please fill the all fielss")
        }
    }

  return (
        <div className='upi__component'>
            <div className='upi__amount'>
                <div className='amount__payble'>Amount Payble</div>
                <div className='amount__payble'>₹ {data-100}</div>
            </div>
        <p className='new__card'>New Card</p>
        <div className='card__container'>
            <p>Card Number:</p>
            <input type="text" placeholder='XXXX-XXXX-XXXX-XXXX'
            onChange={e=>setNo(e.target.value)}
            />
        </div>
        <div className='card__container'>
            <p>Card Holder's Name:</p>
            <input type="text" placeholder='eg. Pushpendra Kumar'
            onChange={e=>setName(e.target.value)}
            />
        </div>
            <div className='card__container'>
                <p>Validity</p>
                <div className='pay__validity'>
                    <div className='pay__validity'>
                        <input type="text" placeholder='MM'
                        onChange={e=>setMM(e.target.value)}
                        />
                        <input type="text" placeholder='YY'
                        onChange={e=>setYY(e.target.value)}
                        />
                    </div>
                    <div className='pay__validity'>
                        <p className='text__right'>CVV</p>
                        <input type="password" placeholder='***'
                        onChange={e=>setCvv(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        <button className='payCard__btn' onClick={handleClick}>Pay ₹{amountPayble}</button>
    </div>
  )
}

export default CreditCard