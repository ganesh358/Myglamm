import { FormErrorIcon } from '@chakra-ui/react';
import {useSelector} from 'react-redux'
import Footer from './Footer';
import Navbar from './Navbar';
import OrderSummary from './OrderSummary';
import ShippingAddress from './ShippingAddress'
import ShippingCart from './ShippingCart';

const Checkout = () => {

  const order = useSelector(store=>store.auth.cartData);

  const userData = useSelector(store => store.auth.user);

  console.log(userData);
//   const userData = {
//     name:"Pushpendra Kumar",
//     pin:"282001",
//     city:"Agra",
//     add:"111/A New Place 112002 Delhi",
//     mobile: "8273554487",
//     state:"UttarPradesh",
//     email: "kumarpushp1992@gmail.com",
//     type:"home",
// };


  return (
    <div >
      <Navbar/>
      <h2 className='heading__checkout'>Checkout</h2>
      <div className='checkout__wraper'>
      <div className="shipping__details">
        <ShippingAddress userData={userData}/>
        <ShippingCart orders={order}/>
      </div>
      <div className='money__details'>
        <OrderSummary orders ={order}/>
      </div>
       
    </div>
    <Footer/>
    </div>
  )
}

export default Checkout