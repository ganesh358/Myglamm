import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

import { Box, Img, Text } from "@chakra-ui/react";

const data  = [
         {
          images:"https://files.myglamm.com/site-images/400x400/OTTP-(1).jpg",
          title:"MyGlamm LIT Liquid Matte Lipstick- OTP",
          dis:"Moringa Oil Enriched Matte Lipstick",
          rating:4.9,
          ratingcount:"15128 rating",
          price:"₹395",
         },
         {
            images:"https://files.myglamm.com/site-images/400x400/Soft-Matte-post-1-Poppy-Pink.jpg",
            title:"Manish Malhotra Soft Matte Lipstick - Po..",
            dis:"Hydrating Long-wear Lipstick",
            rating:4.9,
            ratingcount:"645 rating",
            price:"₹523",
           },
           {
            images:"https://files.myglamm.com/site-images/400x400/Facewash_3.jpg",
            title:"MyGlamm WIPEOUT Germ Killing Face Wash",
            dis:"Tea Tree Oil & Vitamin E-infused Face Wash",
            rating:4.9,
            ratingcount:"706 rating",
            price:"₹71",
           },
           {
            images:"https://files.myglamm.com/site-images/400x400/Hi-Shine-Post-1-Mauve-Struck.jpg",
            title:"Manish Malhotra Hi-Shine Lipstick - Mauve...",
            dis:"Lightweight, Long-wear Lipsticks",
            rating:4.9,
            ratingcount:"1379 rating",
            price:"₹523",
           },
           {
            images:"https://files.myglamm.com/site-images/400x400/Body-wash_4.jpg",
            title:"MyGlamm WIPEOUT Germ Killing Body Was...",
            dis:"Tea Tree Oil-infused Skin-regenerating Body Wash",
            rating:5,
            ratingcount:"129 rating",
            price:"₹159",
           },
           {
            images:"https://files.myglamm.com/site-images/400x400/Artboard-1-(1)-(1).jpg",
            title:"MyGlamm SUPERFOODS Kajal - Indigo - 0....",
            dis:"Long-Wear Smudge-Proof Kajal Infused With Sup..",
            rating:5,
            ratingcount:"1776 rating",
            price:"₹279",
           },
           {
            images:"https://files.myglamm.com/site-images/400x400/Rare-(1).jpg",
            title:"MyGlamm LIT Velvet Matte Liquid Lipstick...",
            dis:"Hydrating, Velvet Matte Liquid Lipcolour",
            rating:4.9,
            ratingcount:"2054 rating",
            price:"₹217",
           },
        
]


export default function Sliderthird() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        
      };
  
  return (
    <div  className={styles.container}>
  
     <div  style={{
    
     textAlign:"center",
     height:"30rem",
     width:"80rem",
      marginLeft:"2.5rem"
    

    }}>
        <Slide {...settings} easing="ease">
            {data.map((item) => <Box textAlign='center' bgColor='#ffffff' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'  ml='1rem' w='90%' borderRadius='10px'  > <Img p='.5rem' w='100%' h='17.4rem'  src={item.images} alt='image'/> <Text textAlign='center' fontSize='12.5px' fontWeight='700' color='black' mt='2rem'>{item.title}</Text><Text textAlign='center' fontSize='.7rem' color='gray' mt='.4rem' >{item.dis}</Text> <Text display='flex'  mt='1.3rem' ><Text ml='4rem'  pr='3' fontWeight='600'>{item.rating}<span style={{color:"#ff9797",marginLeft:".5rem"}}><i class="fa-sharp fa-solid fa-star"></i></span></Text>|<Text fontSize='.95rem' ml='1rem' fontWeight='600' >{item.ratingcount}</Text></Text><Text textAlign='center' mt='1rem' fontWeight='600' pb='5'>{item.price}</Text></Box>)}
         </Slide>
      
       
     </div>
    </div>
  );
}

