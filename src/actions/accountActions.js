import { ActionTypes } from "../constans";

export const Depositar=(cantidad)=>{
    return{
        type:ActionTypes.DEPOSITAR,
        payload:cantidad,
    }
}
export const Retirar=(cantidad)=>{
    return{
        type:ActionTypes.RETIRAR,
        payload:cantidad,
    }
}