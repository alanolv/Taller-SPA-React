import { useDispatch, useSelector } from "react-redux";
import NavbarApp from "../../components/Navbar";
import {Depositar,Retirar} from "../../actions/accountActions"
function Bank(){
    const dispatch=useDispatch();
    const counter = useSelector((state)=>state.account);
    return(
        <>
        <button onClick={
            ()=>{dispatch(Depositar(100))}
        }>depositar</button>
        <div className="white-text">{counter}</div>
        <button onClick={
            ()=>{dispatch(Retirar(100))}
        }>retirar</button>
        </>
    )
}
export default Bank;