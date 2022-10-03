import React from 'react';
// import Footer from '../components/Footer';
import { Box, Collapse } from '@chakra-ui/react';
import {Routes,Route} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Dashcheck from "../Components/Dashcheck";
import Address from "../Components/Address";
import Payment from "../Components/Payment";
import Checkout from "../Components/Checkout";
import { useSelector } from 'react-redux';
import HomePage from "../Pages/HomePage"

import { MakeUp } from '../Components/MakeUp';
import { MakeUpSinglePage } from '../Components/MakeUpSinglePage';
import Cart from '../Components/Cart';
import { Sanitizing } from '../Components/SaniTisingCare';
import { HairCare } from '../Components/HairCare';
import { SkinCare } from '../Components/SkinCare';
import { Collection } from '../Components/Collection';
import SuccessFull from '../Components/OrderSuccess';




// import Cart from '../Components/Cart';


const AllRoutes = () => {
  const {isAuth}=useSelector((state)=>state.auth);
  console.log(isAuth)
  return (
    <Box>
        <Routes>

            {/* <Route path='/' element={  <> <Navbar/></>}></Route> */}
           {/* { !isAuth &&  <Route path="/dashcheck" element={ <Dashcheck />}></Route> } */}

            <Route path='/' element={ <HomePage/>}/>
           { isAuth &&  <Route path="/dashcheck" element={ <Dashcheck />}></Route> }
           <Route path="/makeup" element={<MakeUp/>}/>
           <Route path="/makeup/:id" element={<MakeUpSinglePage/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/address" element={<Address/>}/>
           <Route path="/checkout" element={<Checkout/>}/>
           <Route path="/payment" element={<Payment/>}/>
           <Route path="/sanitising" element={<Sanitizing/>}/>
           <Route path="/haircare" element={<HairCare/>}/>
           <Route path="/skincare" element={<SkinCare/>}/>
           <Route path="/collection" element={<Collection/>}/>

            <Route path='/successful' element={<SuccessFull/>}/>
           


        </Routes>
    </Box>
  )
}

export default AllRoutes