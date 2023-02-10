import React from "react";
import DateContainer from "./DateContainer";
import DateDisplay from "./DateDisplay";
import Header from "./Header";
import './main.css';
function AppDateTimePicker() {
    return ( 
        <div>
            <Header/>
            <div className="date-container">
                <DateContainer/>
            </div>
        </div>
     );
    }
export default AppDateTimePicker;