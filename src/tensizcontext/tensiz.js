import React, { useState, useEffect, createContext,useContext } from "react";


export const Context = createContext()


export const GetContext = ({ children }) => {
    const [newText,setNewText]= useState([])
    const [count,setCount]= useState(-1)
        const roll= ["⚀","⚁","⚂","⚃","⚄","⚅"]
    const [timer, setTimer] = useState(0)
    const rans = (els) => {
        setText(text.map(el => ({ id: el.id, num: roll[Math.floor(Math.random() * roll.length)], click: false })))
        setCount(count+1)
        newText.length === 0 ? count === 0 ? setInterval(() => setTimer(prev => prev + 1), 1000) : console.log("d") : console.log("d")
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
        newText.length===0? count===0?setInterval(()=>setTimer(prev=>prev+1),1000):console.log("d"):console.log("d")
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
        
    }
   
    return (
        <Context.Provider value={{timer,text,setText,newText,setNewText,newes,removes,arr,rans,restart,bole,count,setCount}}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext =() => useContext(Context)