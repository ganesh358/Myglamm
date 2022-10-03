import { CheckIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";



 function SuccessFull(){
    return (
        <div style={{display:"flex", justifyContent:"center"}}> 
            <Box display='flex' fontSize='2.5rem' ml='2rem' bgColor='green.600' color='white' justifyContent='center' pt='4rem'  borderRadius='50%' w='10rem' h='10rem' mt='10rem' >
                   <CheckIcon/>
            </Box>
            <Box>
            <Text ml='-16rem' mt='20rem' color='green' fontSize='2rem'>Purchase was successful</Text>
            <Link to="/">
            <button style={{backgroundColor:'black',color:"White",height:"2rem",marginLeft:"-9.7rem",padding:".2rem"}}>Continue Shopping..</button>
            </Link>
            </Box>
        </div>
    )
}

export default SuccessFull;