import { Heading,Button,Image,Box,Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import style from "../css/Cart.module.css"
import { finalPrice, getCartData, makeupfecth, updateCartQty } from '../reducer/AuthReducer/action'
import Footer from './Footer'
import Navbar from './Navbar'

// import style from "../css/Cart.module.css"

const Cart = () => {

    const navigate = useNavigate();
//    const [data,setData]=useState([]) 
 
  const dispatch=useDispatch();    
  const data = useSelector(store=>store.auth.cartData);
//   const Single_Makeup=useSelector((store)=>store.auth.isMakeup)||[];


  useEffect(()=>{
    dispatch(getCartData())
},[])


// useEffect(()=>{
//     if(id){
//         const currentMusic=Single_Makeup.find(album=>album.id==id)
//         setData(currentMusic)
//     }
// },[])
// console.log(data)
   

    // const cartdatas = [
        // {
        //     id: 1,
        //     image: "https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
        //     price: 258,
        //     title: "Twist It Mascara",
        //     qty: 1
        // },
        // {
        //     id: 2,
        //     image: "https://files.myglamm.com/site-images/800x800/BLCKPRTY-(1).jpg",
        //     price: 268,
        //     title: "Twist It Eye",
        //     qty: 1
        // },
        // {
        //     id: 3,
        //     image: "https://files.myglamm.com/site-images/800x800/cranbv-(1).jpg",
        //     price: 268,
        //     title: "Twist It Compact",
        //     qty: 1
        // },
        // {
        //     id: 4,
        //     image: "https://files.myglamm.com/site-images/800x800/Noir-(1).jpg",
        //     price: 268,
        //     title: "Twist It Kajal",
        //     qty: 1
        // }


    // ];

    // const data = useSelector(store=>store.AppReducer.cartdata);


    const [cartdata, setcartdata] = useState(data);
    // const [hack,setHack] = useState(0);

    console.log(cartdata)

    const [total, setTotal] = useState(0);

    const handleCheckout = ()=>{
        
        const final = cartdata.reduce((sum,el)=>{
            return sum+(el.qty*el.price)
        },0)
        dispatch(finalPrice(final))
        navigate("/address")
    }



    const handleDelete = (id) => {
        let update = cartdata.filter((el) => {
            return el.id !== id;
        })
        setcartdata(update)
    }

    
    const handlequantity = (id,amount) => {
        let updatedData = cartdata.map(el => {
            if (el.id == id) {
                return {
                    ...el,
                    qty: el.qty + amount
                }
            }
            else {
                return el;
            }
        })
        setcartdata(updatedData)

        // dispatch(updateCartQty(id,newQty))
        
    }


    useEffect(() => {
        // console.log(hack)
        let totalprice = cartdata.reduce((sum, el) => {
            return sum + (el.price * el.qty)
        }, 0)
        setTotal(totalprice)
        // dispatch(getCartData())
    }, [cartdata])

    return (

        <Box>
            <Navbar/>
            <Text textAlign="center" className={style.my}>MY BAG ({cartdata.length}) </Text>
            <Box className={style.box1}>
                Congrats You're eligible for free gift Please select
            </Box>

            {
                cartdata.map((el) => {

                    return (
                    <Box key={el.id} className={style.container}>



                      <Box className={style.box2}>
                        <Image className={style.image} src={el.src} alt="" />
                       
                        <Text className={style.twist}>{el.name}</Text>
                        </Box>

                        <Box className={style.boxprice}>
                        <Text className={style.qunatity}> ₹ {el.price*el.qty} </Text >
                        <Box className={style.btn}>
                            <Box className={style.one}>
                            <Text>{el.qty}</Text >
                          </Box>

                            <Box className={style.plus}>
                                    <Button onClick={() =>
                                        {
                                        handlequantity(el.id,+1)
                                        // dispatch(getCartData())
                                        // setHack(prev=>prev+1)
                                        }}>
                                    <i class="fa-solid fa-arrow-up"></i>
                                    </Button>
                                    
                                    <Button disabled={el.qty === 1} onClick={() => {
                                        handlequantity(el.id,-1)
                                        // dispatch(getCartData())
                                        // setHack(prev=>prev-1)
                                        }}>
                                    <i class="fa-solid fa-arrow-down"></i>
                                    </Button>
                            </Box>

                        </Box>


                        <Text className={style.qunatity}>₹ {el.price*el.qty} </Text>

                        <Box cursor='pointer' onClick={() => { handleDelete(el.id) }}>
                        <i class="fa-regular fa-circle-xmark"></i>
                        </Box>
         
                 </Box>

                    </Box>

                    )

                })
            }

<Box className={style.lastbox}>

<Text className={style.lastbox1}>You will earn  ₹ 100 Good Points as cashback on this order</Text>
<Text className={style.lastbox1}>GRAND TOTAL: ₹ {total}</Text>




</Box>



{/* <Link to="#" > */}

    <Box onClick={handleCheckout} cursor='pointer' className={style.proceed} pt='-1rem' pl='5rem'>PROCEED TO CHECKOUT</Box>
{/* </Link> */}

<Text textAlign='center'>© MyGlamm</Text>


<Footer/>
        </Box>
    
    )
}

export default Cart
