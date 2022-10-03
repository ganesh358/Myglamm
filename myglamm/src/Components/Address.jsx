import React, { useState } from 'react';
import styles from '../css/address.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

const Address = () => {

    const user = useSelector(state => state.auth.user)

    const [name, setName]= useState(user.name);
    const [mobile, setMobile] = useState(user.mobile);
    const [pin, setPin]= useState(user.pin)
    const [city, setCity] = useState(user.city);
    const [state, setState] = useState(user.state);
    const [add, setAdd] = useState(user.add);
    const [type, setType] = useState("Home")
    const [email, setEmail] = useState(user.email);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleType = (text) =>{
        setType(text);
    }

    const handleBack = ()=>{
        navigate("/cart")

    }

    const handleNext = ()=>{
        if(name && mobile && pin && city && state && add && type && email){
            dispatch({type:"address",payload:{name,mobile,pin,city,state,add,type,email}})
            navigate("/checkout")
        }
        else{
            alert("Please fill the all fields")
        }
    }

  return (
    <div className='container__address'>
        <div className='main__heading'>ADD NEW ADDRESS</div>
        <hr className='hr1__line'/>
        <div className='sub__heading1'>Contact</div>
        <div className='contact__info'>
            <div>
                <div className='input__holder'>
                    <input type="text" className='input__form'
                    onChange={e=>setName(e.target.value)}
                    />
                </div>
                <p className='input__text'>Name *</p>
            </div> 
            <div className='mobile__country'>
                <div>
                    <div className='input__holder'>
                        <input type="text" className='input__form' value="+91" readonly/>
                    </div>
                    <p className='input__text'>Country *</p>
                </div> 
                <div>
                    <div className='input__holder'>
                        <input type="number" className='input__form'
                        onChange={e=>setMobile(e.target.value)}
                        />
                    </div>
                    <p className='input__text'>Mobile *</p>
                </div> 
            </div>
            <div>
                <div className='input__holder'>
                    <input type="text" className='input__form'
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <p className='input__text'>Email *</p>
            </div> 
        </div>
        <hr className='hr2__line'/>

        <div className='sub__heading1'>Address</div>
        <div className='contact__info'>
            <div>
                <div className='input__holder'>
                    <input type="text" className='input__form'
                    onChange={e=>setPin(e.target.value)}
                    />
                </div>
                <p className='input__text'>Pincode *</p>
            </div> 
            <div>
                <div className='input__holder gray__background'>
                    <input type="text" className='input__form gray__background'
                    onChange={e=>setCity(e.target.value)}
                    />
                </div>
                <p className='input__text'>City *</p>
            </div> 
            <div>
                <div className='input__holder gray__background'>
                    <input type="text" className='input__form gray__background'
                    onChange={e=>setState(e.target.value)}
                    />
                </div>
                <p className='input__text'>State *</p>
            </div> 
        </div>
        <div className='contact__info address__input'>
            <div>
                <div className='input__holder'>
                    <input type="text" className='input__form'
                    onChange={e=>setAdd(e.target.value)}
                    />
                </div>
                <p className='input__text'>Address *</p>
            </div>
        </div>

        <div className='sub__heading1 sub__heading2 gray__text'>Type ofAddress</div>
        <div className='address__btn'>
            <button className='btn__1'onClick={()=>handleType("home")}>Home</button>
            <button className='btn__1__simple margin__left' onClick={()=>handleType("office")}>Office</button>
        </div>

        <div className="checkbox__wrapper">
            <label>
            <input type="checkbox" />&nbsp;&nbsp; 
            <span>Set as default adderess</span>
            </label>
        </div>

        <div className='bottom_btn'>
            <button className='back__btn' onClick={handleBack}>BACK</button>
            <button className='ship__btn' onClick={handleNext}>SHIP TO THIS ADDRESS</button>
        </div>


        {/* 
        <div>
            <div className='input__holder'>
                <input type="text" className='input__form'/>
            </div>
            <p className='input__text'>Text *</p>
        </div> 
        */}
        <Footer/>
        
    </div>
  )
}

export default Address