import { Box, Flex, Grid, Img, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slideshow from "../Components/Slider";

import { getCartData } from "../reducer/AuthReducer/action";

import Slider2 from "../Components/Slider2";
import Video from "../Components/Video";

import "../Components/Slider.css"
import UserLogo from "../Components/userlogo";




function HomePage(){
   //created by pallavee start
   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(getCartData())
  },[])

  //created by pallavee end
    return (
        <div>
            <Navbar/>
            <UserLogo/>
              <Grid h='3.4rem' bgColor='fffff'></Grid>
            <Grid id='home'  bgColor='#f4f4f4' >
                <Box display='flex' justifyContent='center'>
                <Text id='headline' color='#333333' fontSize='22px' fontStyle='normal'  letterSpacing='-2px' fontWeight='600' h='33.5px' w='11.5rem' bgGradient='linear-gradient(180deg,transparent 60%,#ff9797 30px)' >IN THE SPOTLIGHT</Text>
                </Box>
                
              <Grid  id="spot" p='1.5rem 2.6rem 2rem 2.6rem' h='20.2rem' gridGap='1.8rem' gridTemplateColumns='repeat(3,1fr)'>
                <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' objectFit='cover' backgroundSize='contain' backgroundImage={`url(https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg)`} >
                <Box bgColor='whiteAlpha.700'  p='.75rem' mt='14.89rem'>
                   <Text fontWeight='600' fontSize='17px'>Makeup Under ₹399</Text>
                   </Box>
                </Box>
                <Box  boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'objectFit='cover' backgroundSize='contain' backgroundImage={`url(https://files.myglamm.com/site-images/original/700x488sf.gif)`} >
                <Box  bgColor='whiteAlpha.700'  p='.75rem' mt='14.89rem'>
                   <Text fontWeight='600' fontSize='17px'>Superfood Onion moringa range</Text>
                   </Box>
                </Box>
                <Box  boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' objectFit='cover' backgroundSize='contain' backgroundImage={`url(https://files.myglamm.com/site-images/original/700x488wpo_1.gif)`}>
                    <Box bgColor='whiteAlpha.700'  p='.75rem' mt='14.89rem'>
                    <Text  fontWeight='600' fontSize='17px'  >Shop Ultimatte Liquid Lipstick</Text>
                    </Box>
                </Box>
              </Grid>
              <Box id='img1' p='2.55rem'>
                <Img src='https://files.myglamm.com/site-images/original/2240x614mg.jpg' alt='cover image'/>
             </Box>
             <Box display='flex' justifyContent='center' mt='2rem'>
                <Text  id='headline2' color='#333333' fontSize='22px' fontStyle='normal'  letterSpacing='-2px' fontWeight='600' h='33.5px' w='18.5rem' bgGradient='linear-gradient(180deg,transparent 60%,#ff9797 30px)' >LATEST GLAMM LAUNCHES</Text>
                </Box>
                
              <Grid id='box4' p='1.5rem 2.6rem 2rem 2.6rem'  gridGap='1.8rem' gridTemplateColumns='repeat(4,1fr)'>
                <Box  h='13rem'  boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' objectFit='cover' backgroundSize='contain' backgroundImage={`url(https://files.myglamm.com/site-images/original/700X488_2.gif)`} >
                <Box bgColor='whiteAlpha.700'  p='.75rem' mt='9.9rem'>
                   <Text fontWeight='600' fontSize='17px'>Pucker up lip balm kit</Text>
                   </Box>
                </Box>
                <Box  h='13rem' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' objectFit='cover' backgroundSize='contain' backgroundImage={`url(https://files.myglamm.com/site-images/original/mg700x488.jpg)`} >
                <Box  bgColor='whiteAlpha.700'  p='.75rem' mt='9.9rem'>
                   <Text fontWeight='600' fontSize='17px'>LIT Lip & Cheek Rouge</Text>
                   </Box>
                </Box>
                <Box  h='13rem' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' objectFit='cover' backgroundSize='contain' backgroundImage={`url(https://files.myglamm.com/site-images/original/Strobing-Cream-700x488.png)`}>
                    <Box bgColor='whiteAlpha.700'  p='.75rem' mt='9.9rem'>
                    <Text  fontWeight='600' fontSize='17px'  >Glowing Skin Essential</Text>
                    </Box>
                </Box>
                <Box h='13rem' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' objectFit='cover' backgroundSize='contain' backgroundImage={`url(https://files.myglamm.com/site-images/original/700x488lgl_1.jpg)`}>
                    <Box bgColor='whiteAlpha.700'  p='.75rem' mt='9.9rem'>
                    <Text  fontWeight='600' fontSize='17px'  >LIT Matte About It Lip Color</Text>
                    </Box>
                </Box>
              </Grid>
              <Box p='2.55rem'>
                <Img src='https://files.myglamm.com/site-images/original/Community-Banner-2240-x-344_1.jpg' alt='cover'/>
              </Box>
             
            </Grid>
            <Box bgColor='#f4f4f4' border='1px solid #f4f4f4'>
            <Box  mt='1rem'>
              <Slideshow/>
             </Box>
             <Box mt='4.5rem'>
              <Slideshow/>
             </Box>
             </Box>
            <Grid id='home' bgColor='#f4f4f4'>
          
             <Box display='flex' justifyContent='center' mt='2rem'>
                <Text  id='headline' color='#333333' fontSize='22px' fontStyle='normal'  letterSpacing='-2px' fontWeight='600' h='33.5px' w='10.5rem' bgGradient='linear-gradient(180deg,transparent 60%,#ff9797 30px)' >WALLET OFFERS</Text>
             </Box>

             <Grid p='1.5rem 2.6rem 2rem 2.6rem'  gridGap='1.8rem' gridTemplateColumns='repeat(4,1fr)'>
                <Box  h='3rem'  boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' objectFit='cover' backgroundSize='contain'  >
                <Box height='1.5rem' ></Box>
                     <Box height='1.5rem'  objectFit='contain' backgroundSize='cover'  backgroundImage={`url(https://files.myglamm.com/site-images/original/paytm-3360x279_3.jpg)`}></Box>
                    <Box bgColor='whiteAlpha.700'  p='.75rem' mt='-3rem'>
                   <Text fontWeight='600' fontSize='16px'>Paytm</Text>
                   </Box>
                </Box>
                <Box  h='3rem' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' objectFit='cover'  >
                <Box height='1.5rem' ></Box>
                     <Box height='1.5rem'  objectFit='contain' backgroundSize='cover'  backgroundImage={`url(https://files.myglamm.com/site-images/original/CRED-Pay-3360x279_5.jpg)`}></Box>
                    <Box bgColor='whiteAlpha.700'  p='.75rem' mt='-3rem'>
                   <Text fontWeight='600' fontSize='16px'>CRED</Text>
                   </Box>
                </Box>
                <Box  h='3rem' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' objectFit='cover' backgroundSize='contain' >
                <Box height='1.5rem' ></Box>
                     <Box height='1.5rem'  objectFit='contain' backgroundSize='cover'  backgroundImage={`url(https://files.myglamm.com/site-images/original/mobikwik-3360x279_5.png)`}></Box>
                    <Box bgColor='whiteAlpha.700'  p='.75rem' mt='-3rem'>
                    <Text  fontWeight='600' fontSize='16px'  >Mobikwik Wallet</Text>
                    </Box>
                </Box>
                <Box h='3rem' boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' objectFit='cover' backgroundSize='contain' >
                     <Box height='1.5rem' ></Box>
                     <Box height='1.5rem'  objectFit='contain' backgroundSize='cover'  backgroundImage={`url(https://files.myglamm.com/site-images/original/simpl-3360x279_5.jpg)`}></Box>
                    <Box bgColor='whiteAlpha.700'  p='.75rem' mt='-3rem'>
                    <Text  fontWeight='600' fontSize='16px'  >Simpl Offer</Text>
                    </Box>
                   
                </Box>

                
                
                </Grid>

                <Flex justifyContent='center' mt='6'>
                 <Text  id='headline' color='#333333' fontSize='22px' fontStyle='normal'  letterSpacing='-2px' fontWeight='600' h='33.5px' w='9.2rem' bgGradient='linear-gradient(180deg,transparent 60%,#ff9797 30px)' >BESTSELLERS</Text>

                </Flex>

                <Flex mt='2rem' h='30rem'  justifyContent='center'>
                    <Slider2/>
                </Flex>

                <Flex justifyContent='center' mt='8'>
                 <Text  id='headline' color='#333333' fontSize='22px' fontStyle='normal'  letterSpacing='-2px' fontWeight='600' h='33.5px' w='10rem' bgGradient='linear-gradient(180deg,transparent 60%,#ff9797 30px)' >BANK PARTNER</Text>

                </Flex>
                <Box  h='18rem' pt='1.5rem'>
                    <Box boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;' bgColor='#ffffff' ml='2.55rem'  h='10rem' w='27rem'>
                      <Img src='https://files.myglamm.com/site-images/original/IDFC-offer-3360x279_5.jpg' alt='IDFC bank'/>
                      <Text textAlign='center' mt='1.5rem' fontSize='.9rem' fontWeight='600'>Au Small Finance Bank</Text>
                        <Text textAlign='center' mt='.8rem' fontSize='.8rem' fontWeight='500'>Au Small Finance Bank</Text>
                        
                    </Box>
                </Box>

                <Flex justifyContent='center' mt='8'>
                 <Text  id='headline' color='#333333' fontSize='22px' fontStyle='normal'  letterSpacing='-2px' fontWeight='600' h='33.5px' w='12rem' bgGradient='linear-gradient(180deg,transparent 60%,#ff9797 30px)' >WATCH LOVE SHOP</Text>

                </Flex>

                <Flex h='3rem' justifyContent='space-between' p='2.55rem'>
                  <Box >
                      <Text fontWeight='600'>Show your look</Text>
                  </Box>
                  <Box fontSize='.8rem' >
                     <Text>Upload your favorite makeup looks on instagtam with</Text>
                     <Text display='flex' ml='10'> <span><Text color='#ff9797'>#myglamm </Text></span>  for a chance to featured!</Text>

                  </Box>
                  <Box  fontSize='.8rem'>
                     <Text>Follow us on Instagtam</Text>
                     <Text color='#ff9797' textAlign='right'>#myglamm</Text>
                  </Box>
                </Flex>
               
                  <Flex textAlign='center'   h='15rem' justifyContent='space-evenly' p='1.8rem'>
                     <Box pl='4.5rem' pt='5rem' w='11rem' h='11rem'  backgroundSize='cover'  backgroundImage={`url(https://m.photoslurp.com/vt360/pslurpmedia.s3.amazonaws.com/manual/pk41666652_0.mp4.jpg)`}>
                            <Text w='2.5rem' h='2rem' bgColor='blackAlpha.700' color='white' fontSize='1.5rem'><span><ion-icon name="play-outline"></ion-icon></span></Text>
                     </Box>
                     <Box p='5rem' w='11rem' h='11rem'  backgroundSize='cover'  backgroundImage={`url(https://m.photoslurp.com/i/fit?width=360&height=360&url=https%3A%2F%2Fpslurpmedia.s3.amazonaws.com%2Fmanual%2Fpk41666640_0.jpg)`}>
                     <Text w='2.5rem' h='2rem' bgColor='blackAlpha.700' color='white' fontSize='1.5rem'><span><ion-icon name="play-outline"></ion-icon></span></Text>
                     </Box>
                     <Box p='5rem' w='11rem' h='11rem'  backgroundSize='cover'  backgroundImage={`url(https://m.photoslurp.com/vt360/pslurpmedia.s3.amazonaws.com/manual/pk41666532_0.mp4.jpg)`}>
                     <Text w='2.5rem' h='2rem' bgColor='blackAlpha.700' color='white' fontSize='1.5rem'><span><ion-icon name="play-outline"></ion-icon></span></Text>
                     </Box>
                     <Box p='5rem' w='11rem' h='11rem'  backgroundSize='cover'  backgroundImage={`url(https://m.photoslurp.com/vt360/pslurpmedia.s3.amazonaws.com/manual/pk41666502_0.mp4.jpg)`}>
                     <Text w='2.5rem' h='2rem' bgColor='blackAlpha.700' color='white' fontSize='1.5rem'><span><ion-icon name="play-outline"></ion-icon></span></Text>
                     </Box>
                     <Box p='5rem' w='11rem' h='11rem'  backgroundSize='cover'  backgroundImage={`url(https://m.photoslurp.com/vt360/pslurpmedia.s3.amazonaws.com/instagram-business/17958651245047014_0.mp4.jpg)`}>
                     <Text w='2.5rem' h='2rem' bgColor='blackAlpha.700' color='white' fontSize='1.5rem'><span><ion-icon name="play-outline"></ion-icon></span></Text>
                     </Box>
                     <Box p='5rem' w='11rem' h='11rem'  backgroundSize='cover'  backgroundImage={`url(https://m.photoslurp.com/vt360/pslurpmedia.s3.amazonaws.com/instagram-business/18000033826502299_0.mp4.jpg)`}>
                     <Text w='2.5rem' h='2rem' bgColor='blackAlpha.700' color='white' fontSize='1.5rem'><span><ion-icon name="play-outline"></ion-icon></span></Text>
                     </Box>
                     <Box pl='2rem' pt='5rem' w='5.5rem' h='11rem' backgroundSize='cover'  backgroundImage={`url(https://m.photoslurp.com/vt360/pslurpmedia.s3.amazonaws.com/instagram-business/17947582760087820_0.mp4.jpg)`}>
                     <Text w='2.5rem' h='2rem' bgColor='blackAlpha.700' color='white' fontSize='1.5rem'><span><ion-icon name="play-outline"></ion-icon></span></Text>
                     </Box>
                  </Flex>
                  <Box p='2.55rem'>
                     <Img src='https://files.myglamm.com/site-images/original/disclaimer-mgp_1.png' alt="cover page"/>
                  </Box>

                  <Box border='1px solid black'>
                     <Video/>
                  </Box>
              </Grid>
              
            <Box id='home' mt='13rem'>
                <Footer/>
            </Box>
            
 
        </div>
    )
}

export default HomePage;
