import React from 'react'
import { 
Spacer,
Flex,
Box,
Text
// Input
 } from '@chakra-ui/react'
import { Logo } from './Logo'
import { MenuBar } from './MenuBar'
import { SearchBar } from './SearchBar'

import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";




import "./Slider.css"
import '../App.css';
import SignupChakra from '../signup/SignupChakra'
import { useSelector } from 'react-redux/es/exports'
import Profile from '../signup/Profile'

import { Link } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  // const navigate=useNavigate()
const {isAuth}=useSelector((state)=>state.auth);
console.log(isAuth);
const data = useSelector(store=>store.auth.cartData);
console.log("DAta",data.length)

  return   (
    <Box className='navbar-sticky' id='home'    width='100%' >

 <Box width="100%" height="40px" bg="#fee8e8"><Flex marginLeft="40px" marginRight="40px" justifyContent="space-between">
  <Flex ml='-.5rem' marginTop="10px"><AiFillGift style={{ height:"20px" , width: "32px"}} color='#ff9797' /><Text fontWeight='500' mt='.2rem' fontSize="12px">Pick Any Product at Rs.199</Text>
  <Text fontSize='.75rem' fontWeight='700' letterSpacing='-1px' ml='1.6rem' color='#ff9797'>SHOP NOW</Text>
  </Flex>
  <Flex  marginTop="10px"><BiHomeHeart style={{ height:"22px" , width: "35px",marginTop:'-.2rem'}} /><Text fontSize='.8rem' color='#000000' fontWeight='500'>MyGlamm Store</Text></Flex></Flex></Box>

    <Flex width='80%' direction='row' height='60px' ml='15rem' pt='19px'  >
      <Box ml='-12.5rem' w='15rem'> <Logo/> </Box>
      <Box bgColor='#fafafa' boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'  className='searchbar' ml='-3rem' w='37rem' h='2.6rem' borderRadius='3px' > <SearchBar/> </Box>
      <Spacer/>

      <Flex justifyContent={"space-between"} pt='2'  pr='.5rem' width="7.5rem" ml='5rem'  >

      <Box cursor={"pointer"} fontWeight='400' ><Link to='/cart'> <HiOutlineShoppingBag style={{color: 'black', border:'1px', fontSize: '28px'}}/></Link><Box border='1px solid black' color='white' bgColor='black' pl='.37rem' borderRadius='50%' fontSize='.8rem' fontWeight='600'  w='1.3rem' mt='-2.5rem' ml='1rem'>{data.length}</Box> </Box>
        <Box borderLeft='1px solid #C8C8C8' h='2rem'></Box>

    


      <Box cursor={"pointer"} > {isAuth ? <Profile/>:<SignupChakra/>} </Box>


      </Flex>
    </Flex>
    <MenuBar/>

    
  </Box>
   )

}
 



export default Navbar;