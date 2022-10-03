import {
  Modal,
  Divider,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  Select,
  Input,
  ModalFooter,
  Flex,
  Image,
  Text,
  Box,

} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineUser} from "react-icons/ai";
import OtpChakra from "./OtpChakra";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle  } from "react-icons/fc"

function SignupChakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
const [mobile,setMobile]=useState();
 
  return (
    <>
      <AiOutlineUser onClick={onOpen} style={{color: 'black', fontSize: '30px'}}/>
      <Modal
        width="500px"
        height="1000px"
        border="1px solid red"
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideleft"
      >
        <ModalOverlay />
        <ModalContent height={"650px"} width={"850px"} padding={"20px"}>
          <Box marginTop="40px">
            <Text width={"100%"} textAlign="center" margin="auto">
              Get 15% Good Points back on every order
            </Text>
          </Box>
          <Image
            margin={" 20px 100px 20px 100px"}
            width="200px"
            src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
          ></Image>
          <Text
            marginLeft="80px"
            paddingBottom="value"
            borderBottomStyle="solid"
            fontWeight="bold"
            fontSize="14px"
          >
            *Mobile Number
          </Text>
          <Divider borderColor={"black"}></Divider>
          <ModalCloseButton />
          <ModalBody marginTop="40px">
            <Flex>
              <Select width={"150px"}>
                <option value="91">IND +91</option>
                <option value="971">UAR +971</option>
                <option value="44">UK +44</option>
                <option value="1">US +1</option>
              </Select>
              <Input type="text" value={mobile}  onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile Number" />
            </Flex>
          </ModalBody>
          <ModalFooter display={"flex"} alignItems={"center"}>
            {mobile?.length===10 && <OtpChakra cursor="pointer" onClickClose={onClose} />}
          </ModalFooter>
          <Flex><Text fontSize={"12px"} margin={"0px 0px 20px 60px"} >or continue with</Text></Flex>
           <Flex justifyContent={"space-between"}><Box display={"flex"} border={"1px solid black"}>
            <BsFacebook  style={{ height:"25px" , width:"20px"}}/><Text>Continue with Facebook</Text></Box>
             <Box display={"flex"} border={"1px solid black"} padding={"3px"}>
             <FcGoogle style={{ height:"25px" , width:"20px"}} /><Text>Continue with Google</Text>
              </Box></Flex>
           <Flex><Text fontSize={"12px"} margin={"0px 0px 20px 60px"} marginTop={"5px"} >By Signing up you agree to our<span  style={{fontWeight:"bold", cursor:"pointer"}} >Term {"&"} Conditions</span></Text></Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignupChakra;
