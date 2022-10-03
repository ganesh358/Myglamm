import React, { useState } from 'react'
import '../css/payment.css'
import {FaInternetExplorer, FaAmazonPay} from 'react-icons/fa';
import {BsCreditCard, BsCashCoin} from 'react-icons/bs'
import {AiOutlineWallet} from 'react-icons/ai';
import UPI from './UPI';
import NetBanking from './NetBanking';
import CreditCard from './CreditCard';
import Wallet from './Wallet';
import COD from './COD';
import { Show } from '@chakra-ui/react';

const Payment = () => {

const [method, setMethod] = useState("upi")

const methodHandler = (text)=>{
    setMethod(text)
}

const show = (method)=>{
    switch(method){
        case "upi":
            return <UPI/>
        case "net":
            return <NetBanking/>
        case "card":
            return <CreditCard/> 
        case "pe":
            return <Wallet/>
        case "cash":
            return <COD/>
        default:
            return <UPI/> 
    }
}

  return (
    <div>
        <div className='heading__payment'>Payment</div>
        <div className='payment__container'>
            
            <div className='payMethods__wrapper'>
                <div className='payment__methods'>
                    <div className='main__heading1'>PAYMENT METHOD</div>
                    <div className='pay__methods' onClick={()=>methodHandler("upi")}>
                        <div className='pay__icon'><FaAmazonPay/></div>
                        <div className='pay__text'>Google Pay / PhonePe / UPI</div>
                    </div>
                    <div className='pay__methods' onClick={()=>methodHandler("net")}>
                        <div className='pay__icon'><FaInternetExplorer/></div>
                        <div className='pay__text'>Net Banking</div>
                    </div>
                    <div className='pay__methods' onClick={()=>methodHandler("card")}>
                        <div className='pay__icon'><BsCreditCard/></div>
                        <div className='pay__text'>Credit or Debit Card</div>
                    </div>
                    <div className='pay__methods' onClick={()=>methodHandler("pe")}>
                        <div className='pay__icon'><AiOutlineWallet/></div>
                        <div className='pay__text'>Wallets</div>
                    </div>
                    <div className='pay__methods' onClick={()=>methodHandler("cash")}>
                        <div className='pay__icon'><BsCashCoin/></div>
                        <div className='pay__text'>Cash on Delivery</div>
                    </div>
                </div>
                <div className='payment__data'>
                    {
                        show(method)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment