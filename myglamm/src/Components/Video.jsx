
import {
  
    Text ,
    Button,
    Img,
    Modal,
    ModalBody,
   
    ModalContent,

    useDisclosure,
  
   
  } from "@chakra-ui/react";

import "./Video.css"
import "./Slider.css"

function Video(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <div>
            <video src='https://www.myglamm.com/images/TellMyGlammWhatYouWant.mp4' loop muted autoPlay>
                
            </video>
            <div  style={{backgroundColor:"rgba(0, 0, 0, 0.5)",color:"#f1f1f1",marginTop:'-29rem',textAlign:"center"}}>
                <Text id="vid" letterSpacing='-2px' fontSize='5xl' >BRAND STORY</Text>
                <p style={{width:"70%",fontSize:".9rem",marginLeft:"10rem"}}>Backed by one of Europe's largest natural beauty companies, MyGlamm collaborated with global experts and makeup artists to bring about exciting innovation in makeup to accomplish our single, focused goal – make looking glamorous effortless!</p>
                <Text color='yellow.600'>Know More</Text>

               <>
               <Button h='8rem' w='8rem' borderRadius='50%' _hover={{background:"whiteAlpha.200"}} background={'blackAlpha.100'} onClick={onOpen}><Img onClick={onOpen}   src='https://files.myglamm.com/site-images/original/ico-play.png' alt='play btn'/></Button>
  
                <Modal isOpen={isOpen} onClose={onClose} >
                
                <ModalContent mt='10rem' position='fixed'>
                    <ModalBody   >
                    <div id='video1'>
                    
                        <iframe width="86rem" height="315" src="https://www.youtube.com/embed/GdcxfyKNiDg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </div>
                    </ModalBody>
                </ModalContent>
                </Modal>
               </>
                </div>
                
               
        </div>
                
    )
}

export default Video;