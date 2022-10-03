import { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./types"
import * as types from "./types"

const init={
    isAuth:false,
    token:'',
    isLoading:false,
    isError:false,
    isMakeup:[],
    cartData:[],
    finalPrice:0,
    user : {}
}


export const authReducer=(state=init,{type,payload})=>{
   
switch(type){
    case AUTHENTICATION_REQUEST:{
        return{...state , isLoading : true};
    }
    case AUTHENTICATION_SUCCESS:{
        localStorage.setItem("userData",payload);
        return {...state , isLoading:false , isAuth : true}
    }
    case LOGOUT_REQUEST:{
        return{...state,isLoading:true};
    }
    case LOGOUT_SUCCESS:{
        localStorage.removeItem("userData");
        return{...state , isLoading : false, isAuth : false}
    }

    case types.MAKEUP_REQUEST : {
        return {
            ...state,
            isLoading:true
        }
    }
    case types.MAKEUP_SUCCESS:{
        return {
            ...state,
            isMakeup:payload
        }
    }
    case types.MAKEUP_FAILURE:{
        return {
            ...state,
            isError:true
        }
    }
    // case types.GETCARTDATA_SUCCESS:{
    //     return {
    //         ...state,
    //         cartData:payload
    //     }
    // }

    case types.ADDTOCART_SUCCESS:{
        console.log(state)
        return {
            ...state,
           cartData: [...state.cartData,payload]
        }
    }

    case types.STOREFINALPRICE_SUCCESS:{
        return {
            ...state,
            finalPrice:payload
        }
    }
    case "address":
        return{
            ...state,
            user:{...state.user, ...payload}
        }

    default:{
        return state
    }
}
}

export default init;