import { faCarTunnel } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = ({orders}) => {

    const [Totalprice, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [shipping, setShipping] = useState((Totalprice != 0)? 40 : 0)
    const [tp, setTp] = useState(0)
    const [code, setCode] = useState("")
    const [used, setUsed]= useState(false)

    const navigate = useNavigate();

    let total = 0;

    const total_Price = (total, orders)=>{
        for(let i=0; i<orders.length; i++){
            total += orders[i].price * orders[i].qty
        }
        return total;
    }

    const payble =(Totalprice, discount, shipping)=>{
        return(Totalprice-discount+shipping)
    }

    const handlePromo = (code)=>{
        if(code === "NEW100"){
            if(used === false){
            setDiscount(dis => dis+100)
            setUsed(true);
            setCode("");
            }
            else{
                alert("you have redeemed your promo code")
                setCode("")
            }
        }

        else{
            alert("Promo code is not valid");
        }
    }

    const handlePayment = () =>{
        navigate("/payment")
    } 


    useEffect(()=>{
        setPrice(()=>total_Price(total, orders))
        setTp(total_Price(total, orders)-discount+shipping)
    }, [orders.length, discount])
   
  return (
    <div>
        <div className='orderSummary__heading'>OrderSummary</div>
        <div className='summary__line'>
            <p>MRP</p>
            <p>₹ {Totalprice}</p>
        </div>
        <p className='bold code__text'>Apply Promo Code</p>
        <div className='promocode'>
            <input 
            type="text" 
            value={code}
            className='checkout__promocode' 
            placeholder='PROMO CODE'
            onChange={e=>setCode(e.target.value)}
            />
            <button 
            className='promo__button'
            onClick={()=>handlePromo(code)}
            >APPLY</button>
        </div>
        <div className='summary__line'>
            <p>Discount</p>
            <p> - ₹ {discount}</p>
        </div>
        <div className='summary__line'>
            <p>Shipping Charges</p>
            <p>₹ {shipping}</p>
        </div>
        <div className='summary__line'>
            <p className='bold'>Amount Payble</p>
            <p className='bold'>₹ {tp}</p>
        </div>
        <div className='summary__line'>
            <p>You Saved</p>
            <p>₹ {discount}</p>
        </div>
        <div className='summary__line'>
            <p>You will earn</p>
            <p>₹ {(Totalprice !== 0)? 50 : 0}</p>
        </div>
        <button className='pay__button' onClick={handlePayment}>PROCEED TO PAYMENT</button>
    </div>
  )
}

export default OrderSummary

// if(cartData.length !== 0 ){
//     navigate("/checkout")
// }