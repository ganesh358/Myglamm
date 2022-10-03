import { Box, Text } from "@chakra-ui/react";



import '../App.css';



function UserLogo(){
   
    return (
        <div>
         
            <Box id='usel' zIndex='1' overflow='hidden' bgColor='#ff9797' boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' mt='26.5rem' ml='80rem' position='fixed' borderRadius='50%' h='3.6rem' w='3.6rem' alignItems='center' display='flex' justifyContent='center'  >
                <Box id='usel1' fontWeight='900' color='#ff9797' bgColor='#ffffff' display='flex' fontSize='.5rem' gap='.2rem' p='.35rem'  borderRadius='50% 50% 50% 0' h='1.6rem' w='1.6rem'  >
                         <Text >o</Text><Text>o</Text>
                       
                </Box>
            </Box>
         
        </div>
    )
}
export default UserLogo;