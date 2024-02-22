/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useStateContext } from "../tensizcontext/tensiz";

import "./tensizes.css"
function Ten() {
    const {text, setText, newText, setNewText,timer, newes, removes, arr, rans,restart,bole,count,setCount,Count } = useStateContext()
//    console.log(newText)
    return (
        <div className="container">
            <div className="topText">
                <h1>Tenzies</h1>
            </div>
            <div className="paraText">
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rools.</p>
                
            </div>
            <div className="dice">
                <div className="">
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
                
                <button className="roll" onClick={newText.length === 10 ?bole===true ? restart : console.log("omg") : rans}>{newText.length === 10 ? bole===true ?"Restart":"Wrong dice":"Roll"}</button>
                {/* <button className="roll" onClick={Count}>ssss</button> */}
               
            </div>
            <div className="times">
                <h1 className="timeres">{`Your rolls: ${count}`}</h1>
                <h1 className="timeres">{`Time : ${timer}`}</h1>
            </div>
        </div>
    )
}
export default Ten;