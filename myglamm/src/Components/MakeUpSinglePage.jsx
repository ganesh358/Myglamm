import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../App.css"
// import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { addCart, addToCart, makeupfecth } from '../reducer/AuthReducer/action';
import { FaFacebookF, FaPinterestP, FaShoppingCart, FaStar, FaTwitter } from 'react-icons/fa';
import Navbar from "./Navbar.jsx"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import Footer from './Footer';


export const MakeUpSinglePage = () => {
    const {id}=useParams();
    const dispatch=useDispatch();    
    const Single_Makeup=useSelector((store)=>store.auth.isMakeup)||[];
    const Store=useSelector((store)=>store)
    console.log(Store)
    const [data,setData]=useState([]);

    //created by pallavee start

    const handleAdd = ()=>{
        
        dispatch(addCart(data))
       
            alert("product is added to your cart")
       
    }

    // craeted by pallavee end

    useEffect(()=>{
        if(id && Single_Makeup.length===0){
            dispatch(makeupfecth())
            }
    },[dispatch])


    useEffect(()=>{
        if(id){
            const currentMusic=Single_Makeup.find(album=>album.id==id)
            setData(currentMusic)
        }
    },[])
  
    console.log(data)

  return (
    <Box>
      
         <Navbar/>
      
       <div className='navbar_makeup'>
        
       <hr />

        <p style={{padding:"10px",textAlign:'center'}}>HOME / MAKEUPEYE MAKEUPEYELINER / <b>MYGLAMM LIT GLOSSY LIQUID EYELINER - BLACK PART</b></p>
        <hr />
        <br />
       

       
             <Box sx={{margin:"auto",width:"80%"}}>
        
            <div className='sidebar'>
                <img src={data.src} alt="error" height/>
                <p style={{display:"flex",justifyContent:"space-evenly",marginTop:"25px"}}><FaFacebookF/>  <FaTwitter/> <FaPinterestP/></p>
            </div>
             <div className='content_bar' style={{textAlign:'left',paddingLeft:"5px"}}>
            <p className='content_bar_content'>{data.description}</p> 
            <br />
            <p className='content_bar_content_1'>{data.name}</p> 
            <br />
            <p style={{display:"flex",gap:"6px"}}>  5  <FaStar/> |  1072  ratings</p> <br />
            <p className='content_bar_content_2'>{data.price}</p>
            <p>(MRP incl. of all taxes)</p><br />
            <p className='content_bar_content_3'>Shade | 
                <select name="" className='content_bar_select'>
                    <option value="Peach Play">Peach Play</option>
                    <option value="StraBerry Rush">StraBerry Rush</option>
                    <option value="CranBery Kick">CranBery Kick</option>
                    <option value="Plum Promise">Plum Promise</option>
                    <option value="RasBery Pop">RasBery Pop</option>
                </select> 
            </p>
            <div className='shade_div' style={{display:"flex",gap:"10px",padding:"10px"}}>
                <img src="https://files.myglamm.com/site-images/original/-0002-Plum--promise.png" alt="er" /><img src="https://files.myglamm.com/site-images/original/-0005-berry-bliss.png" alt="er" /><img src="https://files.myglamm.com/site-images/original/cranbv-(1)_1.png" alt="er" /><img src="https://files.myglamm.com/site-images/original/raspop-(1).png" alt="er" /><img src="https://files.myglamm.com/site-images/original/-0004-Peach-Play.png" alt="er" />
            </div>
            <br />
            {/* <Link to={`/cart/${data.id}`}> */}
            <button onClick={handleAdd} className="content_bar_button"><FaShoppingCart/>  ADD TO BAG</button>
            {/* </Link> */}
            

            <p className='content_bar_content_4'>You will receive <b>cashback worth ₹50 </b> as myglammPOINTS on this purchase</p><hr />
            <br /><br />

<Menu>
  <MenuButton sx={{background:"none",borderBottom:"7px black solid"}} as={Button} rightIcon={<ChevronDownIcon />}>
    WHAT IT IS
  </MenuButton>
  <Box sx={{lineHeight:"45px"}}>
    <p>Raven is an intense black shade.</p>
    <b>Give It To Me</b>
    <li>Contains nourishing avocado oil extracts</li>
    <li>Enriched with Vitamin E & sunflower seed oil</li>
    <li>Long-lasting; for upto 12 hours</li>
    <li>Intense, smooth pigment</li>
    <li>Easy glide on application</li>
    <li>Suitable for contact lens wearers</li>
    <li>Ophthalmologically & dermatologically tested</li>
    <li>Safe to use on waterline</li>
    <b>Icons</b>
    <p>✓ Cruelty-free ✓ Vegan ✓ Paraben-free ✓ Phthalate-free ✓ SLS-free ✓ Alcohol-free </p>
    <p>✓ Mineral oil-free ✓ Gluten-free ✓ Contains natural extracts</p>
    <b>Tell Me More</b>
    <p>Supercharge your makeup routine with the MyGlamm SUPERFOODS Kajal!</p>
    <Box sx={{lineHeight:"25px"}}>
        <p>Supercharge your makeup routine with the MyGlamm SUPERFOODS Kajal!

Say hello to the kajal you’ve always wanted, with a wholesome new twist. Power-packed with the goodness of avocado oil, it’s the only kajal that delivers long-lasting colour in a single stroke while soothing and protecting your eyes. Contains sunflower seed oil, Vitamin E and goji berry extract as well, which have antioxidant properties.

You won’t step out without it. Slip it into your bag and you can transform your entire look with just a flick of your wrist. This retractable kajal pencil is bold, dark, and applies like a dream. Through humid afternoons, bad breakups, irritating contact lenses, sappy movies and rainy days, it’ll always have your back. With upto 12 hours of waterproof, tear-proof wear,  it’s the BFF that’s seen you through it all.
Available in 3 blendable yet smudge-proof shades. </p>
    </Box>
   <b>benefits</b> 
   <li><b>Nourishes eyes :</b><Box sx={{lineHeight:"25px"}}>
   Contains superfood extracts. Avocado oil & sunflower seed oil hydrate and soothe eyes, and goji berry extract has an antioxidant effect.
    </Box></li>

    <li><b>Safe For Contact lens wearers :</b><Box sx={{lineHeight:"25px"}}>
    Ophthalmologically tested, this kajal’s natural extracts make it safe to use on the waterline without experiencing any irritation.
    </Box></li>

    <li><b>Guides on Smoothy :</b><Box sx={{lineHeight:"25px"}}>
    A creamy formula that glides on effortlessly without tugging at eyes.
    </Box></li>

    <li><b>Long Testing :</b><Box sx={{lineHeight:"25px"}}>
    Our MyGlamm SUPERFOODS Kajal lasts through the day for upto 12 hours.
    </Box></li>

    <li><b>Non Transfer :</b><Box sx={{lineHeight:"25px"}}>
    This kajal is smudge-proof, waterproof and transfer-proof.
    </Box></li>

    <Box sx={{lineHeight:"25px"}}>
    MyGlamm SUPERFOODS was created for Indian women who wanted beauty products formulated with natural ingredients, and free from unnecessary chemical additives. The range harnesses the power of some of nature’s best superfoods, with absolutely no nasties! Handpicked for their efficiency and natural goodness, these skin-friendly superstar ingredients are infused to give you skin and hair that’s healthy and nourished.
    </Box>

    <b></b>
  </Box>
</Menu>

{/* <Menu>
  <MenuButton sx={{background:"none",borderBottom:"7px black solid"}} as={Button} rightIcon={<ChevronDownIcon />}>
    HOW TO USE
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton sx={{background:"none",borderBottom:"7px black solid"}} as={Button} rightIcon={<ChevronDownIcon />}>
    WHAT IN IT
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton sx={{background:"none",borderBottom:"7px black solid"}} as={Button} rightIcon={<ChevronDownIcon />}>
  FAQ'S
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu> */}
             </div>
             
       
         </Box>

       </div>


   <div className='navbar_div'>
   <Footer/>
   </div>
   
    </Box>
  )
}
