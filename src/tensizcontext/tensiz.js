import React, { useState, useEffect, createContext,useContext } from "react";


export const Context = createContext()


export const GetContext = ({ children }) => {
    const [newText,setNewText]= useState([])
   
    const rans = (els) => {
        setText(text.map(el => ({id:el.id,num:Math.floor(Math.random() * 9),click:false})))
    }
    useEffect(() => {
        rans()
    }, [])
 
    const [text,setText] = useState([
        {
            id: 1,
            num: Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 2,
            num:Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 3,
            num:Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 4,
            num:Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 5,
            num:Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 6,
            num:Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 7,
            num:Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 8,
            num:Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 9,
            num:Math.floor(Math.random() * 9),
            click:false
        },
        {
            id: 10,
            num:Math.floor(Math.random() * 9),
            click:false
        },
    ])
    const newes = (id,d) => {
        if (newText.indexOf(id)!==-1) return 
        setNewText([...newText, id])
    }
    
    const removes =  (ids) => {
            setNewText(newText.filter(text => text.id!==ids))
    }
    const arr = newText.map(el => el.id)
    const  restart = ()=> {
        setNewText([])
        setText(text.map(el => ({id:el.id,num:Math.floor(Math.random() * 9),click:false})))
    }
    return (
        <Context.Provider value={{text,setText,newText,setNewText,newes,removes,arr,rans,restart}}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext =() => useContext(Context)