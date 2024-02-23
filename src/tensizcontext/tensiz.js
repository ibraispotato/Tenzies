import React, { useState, useEffect, createContext,useContext, useRef } from "react";


export const Context = createContext()


export const GetContext = ({ children }) => {
    const [newText,setNewText]= useState([])
    const [count,setCount]= useState(-1)
        const roll= ["⚀","⚁","⚂","⚃","⚄","⚅"]
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
   useEffect(() => {
        let interval = null;
 
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTimer((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);
       }
     
        return () => {
            clearInterval(interval);
       };
       
    }, [isActive, isPaused]);
 
    const rans = (els) => {
        setText(text.map(el => ({ id: el.id, num: roll[Math.floor(Math.random() * roll.length)], click: false })))
        setCount(count + 1)
        // setIsActive(true);
        
        setIsPaused(false);
        newText.length === 0 ? count === 0 ? setIsActive(true) : console.log("d") : console.log("d")
    }
    const format = (time) => {
        let hours = Math.floor(time/60/60%24)
        let minuts = Math.floor(time/60%60)
        let secounds = Math.floor(time%60)
        hours = hours < 10 ? "0" + hours : hours
        minuts = minuts<10?"0"+minuts : minuts
        secounds = secounds<10?"0"+secounds : secounds
        return hours + ":" + minuts + ":" + secounds
    }

    let one = newText.map((el, index) => el.num)
    const bole = new Set(one).size == 1
    useEffect(() => {
        rans()
    }, [])
    const [text,setText] = useState([
        {
            id: 1,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click: false,
            nums:1
        },
        {
            id: 2,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:2
        },
        {
            id: 3,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:3
        },
        {
            id: 4,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:4
        },
        {
            id: 5,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:5
        },
        {
            id: 6,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:6
        },
        {
            id: 7,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:7
        },
        {
            id: 8,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:8
        },
        {
            id: 9,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:9
        },
        {
            id: 10,
            num: roll[Math.floor(Math.random() * roll.length)]?.rolls,
            click:false,
            nums:10
        },
    ])
    const newes = (id,d) => {
        if (newText.indexOf(id)!==-1) return 
        setNewText([...newText, id])
        setIsActive(true);
        setIsPaused(false);
        
        bole ?setIsPaused(!isPaused) : console.log("d")
        newText.length===0? count===0?setIsActive(true):console.log("d"):console.log("d")
    }
    const removes =  (ids) => {
            setNewText(newText.filter(text => text.id!==ids))
    }
    const arr = newText.map(el => el.id)
    const  restart = ()=> {
        setNewText([])
        setText(text.map(el => ({ id: el.id, num: roll[Math.floor(Math.random() * roll.length)], click: false })))
        setCount(0)
        setTimer(0)
        setIsActive(false);
        setIsPaused(!isPaused);
    }
   
    return (
        <Context.Provider value={{timer,text,setText,newText,setNewText,format,newes,removes,arr,rans,restart,bole,count,setCount}}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext =() => useContext(Context)