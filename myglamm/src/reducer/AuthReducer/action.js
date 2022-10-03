import { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./types";

import * as types from "./types"

import axios from "axios"


export const loginuser=(payload)=>(dispatch)=>{

dispatch({type:AUTHENTICATION_REQUEST});
dispatch({type:AUTHENTICATION_SUCCESS , payload:payload});

}

export const logoutuser=()=>(dispatch)=>{
dispatch({type:LOGOUT_REQUEST});
dispatch({type:LOGOUT_SUCCESS});
}

export const makeupfecth=()=>(dispatch)=>{
    dispatch({type:types.MAKEUP_REQUEST})
    return axios.get("http://localhost:8080/makeup")
    .then((res)=>{dispatch({type:types.MAKEUP_SUCCESS,payload:res.data})})
    .catch((err)=>{dispatch({type:types.MAKEUP_FAILURE})})
}

export const skincarefecth=()=>(dispatch)=>{
    dispatch({type:types.MAKEUP_REQUEST})
    return axios.get("http://localhost:8080/skincare")
    .then((res)=>{dispatch({type:types.MAKEUP_SUCCESS,payload:res.data})})
    .catch((err)=>{dispatch({type:types.MAKEUP_FAILURE})})
}

export const haircarefecth=()=>(dispatch)=>{
    dispatch({type:types.MAKEUP_REQUEST})
    return axios.get("http://localhost:8080/shampoo")
    .then((res)=>{dispatch({type:types.MAKEUP_SUCCESS,payload:res.data})})
    .catch((err)=>{dispatch({type:types.MAKEUP_FAILURE})})
}

//created by pallavee
export const addToCart =(payload)=> (dispatch)=>{
    dispatch({type:types.ADDTOCART_REQUEST})
    return axios.post("http://localhost:8080/cartData",payload).then((res)=>{
        dispatch({type:types.ADDTOCART_SUCCESS})
        .catch((err)=>{
            dispatch({type:types.ADDTOCART_FAILURE})
        })
    })
}

export const addCart = (data)=>(dispatch)=>{
    dispatch({type:types.ADDTOCART_SUCCESS,payload:data})
}

export const getCartData = ()=>(dispatch)=>{
    dispatch({type:types.GETCARTDATA_REQUEST})
    return axios.get("http://localhost:8080/cartData").then(res=>{
        dispatch({type:types.GETCARTDATA_SUCCESS,payload:res.data})
    }).catch(err=>{
        dispatch({type:types.GETCARTDATA_FAILURE})
    })
}

export const updateCartQty = (id,newQty) =>(dispatch)=>{
    return axios.patch(`http://localhost:8080/cartData/${id}`,{qty:newQty}).then(res=>{
        dispatch({type:types.UPDATECARTDATA_SUCCESS})
    })
    .catch(err=>{
        dispatch({type:types.UPDATECARTDATA_FAILURE})
    })
}

export const finalPrice = (finalprice) => (dispatch)=>{
    dispatch({type:types.STOREFINALPRICE_SUCCESS,payload:finalprice})
}