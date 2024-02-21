/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useStateContext } from "../tensizcontext/tensiz";

import "./tensizes.css"
function Ten() {
    const {text, setText, newText, setNewText, newes, removes, arr, rans,restart } = useStateContext()
   
    return (
        <div className="container">
            <div className="topText">
                <h1>Tenzies</h1>
            </div>
            <div className="paraText">
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rools.</p>
                
            </div>
            <div className="dice">
                <div className="insidedice">
                {text.map((data,id) => (
                    
                    <button onClick={() => arr.includes(data.id) ? removes(data.id) : newes(data)} value={data} className={`${arr.includes(data.id) ? "h2" : "h1"}`}>{arr.includes(data.id) ?
                        newText.map((datas, ids) => (
                            data.id === datas.id ? datas.num :""
                        ))
                        : data.num}</button>
                        
                    
                ))}
                    </div>
            </div>
            <div>
                
                <button className="roll" onClick={newText.length === 10 ? restart : rans}>{newText.length === 10 ?"Restart":"Roll"}</button>
                
                
            </div>
        </div>
    )
}
export default Ten;