import React, { useState } from 'react'
import { 
Input,
Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import "./Video.css"

export const SearchBar = () => {
  const [search,setSearch]=useState("")

  


const onValueChange = (e) => {
  if(e.target.value!==Number)
  {
    setSearch(e.target.value);
  }
  // console.log(search);
}

const handleSearch=(e)=>{
if(e.keyCode===13)
{
  let lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let bag="";
  for(let i=0;i<search.length; i++)
  {
    for(let j=0; j<lower.length; j++)
    {
      if(search[i]===lower[j] || search[i]===upper[j])
      {
        bag=bag+lower[j];
      }
    }
  }
  
  
}
}




  return (
    <Box className='media'  display="flex" border={"1px solid #e8e8e9"} borderRadius="5px" >
   <Box w='2rem' fontSize='1.15rem'  pl='1rem' ml='.5rem'  p='.2rem'  bgColor="#f5f5f6" color='gray'>
   <SearchIcon/> 
    </Box>    
    <Input 
    
      value={search}
      onChange={onValueChange}
      onKeyUp={(e)=>handleSearch(e)}
      variant='unstyled' 
      // backgroundColor='rgb(245,245,246)'
      // borderRadius='0px 6px 6px 0px'
      // fontFamily={"Roboto"}
      // fontWeight={"400"} 
      // color='#333333'
      // width={{ sm: '200px',
      // md: '250',
      // lg: '300px',
      // xl: '350px',
      // '2xl': '400px',
      // }} 
      color='.8rem'
      p='.45rem'

      bgColor='#f5f5f6'
      placeholder='Find Lipstick, Eyeliner, Makeup Tutorial, etc'
    />
    </Box>
  )
}
