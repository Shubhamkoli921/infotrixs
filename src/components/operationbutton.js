import { ACTIONS } from "./calc"
import '../css/style.css'

export default function OperationButton ( {dispatch,operation}){
    return <button className="operation"
    onClick={ ()=>dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation}})}
    >
    {operation}
    </button>
}