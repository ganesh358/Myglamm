import React from 'react'
import '../css/checkout.css';
import {BsFillTelephoneFill} from 'react-icons/bs' 
import {HiOutlineMail} from 'react-icons/hi';
import {TbTruckDelivery} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';

const ShippingAddress = ({userData}) => {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let eDay = (day+5)>30?5:day+5;
    let eMonth = (day+5)>30 ? (month+1)>11?1:month+1 :month+1;
    let eYear = (month+1)>11?year+1:year;

    const navigate = useNavigate()

    const handleChange = () =>{
      navigate("/address")
    }

  return (

    <div>
        <div className='main__heading'>SHIPPING ADDRESS</div>
        <hr className='hr1'/>
        <p className='address__details bold'>{userData.name}</p>
        <p className='address__details'>{userData.add}</p>
        <p className='address__details'>{userData.city} {userData.pin}</p>
        <p className='address__details'>{userData.state}</p>
        <div className='address__details detail__icon'><BsFillTelephoneFill/> {userData.mobile}</div>
        <div className='address__details detail__icon'><HiOutlineMail/> {userData.email}</div>
        <button className='btn__1' onClick={handleChange}>CHANGE</button>
        <p className='address__details detail__icon'><TbTruckDelivery/> <span className='bold'>Expected Delivery Date</span>&nbsp; {eDay}/{eMonth}/{eYear}</p>
    </div>
  )
}

export default ShippingAddress