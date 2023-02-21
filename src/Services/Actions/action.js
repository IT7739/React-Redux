import {ADD_TO_CART} from '../Constants';


export default function addToCart(data){
    console.log("Action Data",data)
    return{
        data:data,
        type: ADD_TO_CART
    }
}


// export default function removeToCart(data){
//     return{
//         data:data,
//         type: 'REMOVE_TO_CART'
//     }
// }