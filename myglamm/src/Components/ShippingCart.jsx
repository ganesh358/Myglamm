import React from 'react'
import '../css/checkout.css';

const ShippingCart = ({orders}) => {
  return (
    <div>
        <div className='main__heading margin__cart'>YOUR ORDER</div>
        <hr className='hr1'/>
        {
            orders.map(ele => {return <div className='checkoutCart__wrapper'>
                <div className='image__cart'><img src={ele.src} alt="Product Image"/></div>
                <div className='checkout__cart'>
                    <div className='cart__title'>{ele.name}</div>
                    <div className='cart__qty'>{ele.qty}</div>
                    <div className='cart__price'>{ele.price * ele.qty}</div>
                </div>
            </div>})
        }
    </div>
  )
}

export default ShippingCart