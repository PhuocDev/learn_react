import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DateDisplay from "./DateDisplay";
import './main.css';

const DateContainer = () => {
    const [date, setDate] = useState(Date.now()); //useState
    
    useEffect(()=> {
        //render after date change
        console.log('rendered');
    },[date])
    
    return ( 
        <>
        <input type="date" className="date-input" onChange={(e)=> setDate(e.target.value) }></input>
        {console.log(date)}
        <DateDisplay date={date} />
        </>
     );
}
 
export default DateContainer;