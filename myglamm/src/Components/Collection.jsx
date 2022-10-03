import { Box, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "../App.css"
import { Grid, GridItem } from '@chakra-ui/react'
import { makeupfecth } from '../reducer/AuthReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export const Collection = () => {
const dispatch=useDispatch();    
const makeup=useSelector((store)=>store.auth.isMakeup)||[];



useEffect(()=>{
    if(makeup.length===0){
        dispatch(makeupfecth())
        }
},[dispatch])


  return (
    <Box>
      <Navbar/>
      <br />
        <hr />
       <p>HOME / <b>COLLECTION</b></p>
       <hr />
       <br />
       <p className='makeup_title' >COLLECTION</p> <br /><br />
        
       <Grid w="90%" sx={{margin:"auto",textAlign:"left"}} templateColumns='repeat(3, 1fr)' gap={8}>
        {makeup.length>0 && makeup.map((elem)=>(
          <Link to={`/makeup/${elem.id}` }  key ={elem.id}>
          <div className='makeup_content_div'>
          <GridItem sx={{shadow:"5px",padding:"5px"}} w='100%' h='auto' >
           <img src={elem.src} alt="" />
           <h3 className='griditem_name' >{elem.name}</h3>
           <p>{elem.description}</p>
         
        <p> {elem.shade_count}</p>
        <br />
        <p className='elem_shared_div' > {`₹ ${elem.price}`}</p>
          </GridItem >
          </div>
         
          
          </Link>
        

       ))
       }
       </Grid>
    

   <Footer/>
    </Box>
  )
}
