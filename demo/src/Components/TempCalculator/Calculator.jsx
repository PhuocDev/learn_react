
import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import WaterVerdic from "./WaterVerdic";
import PropTypes from 'prop-types'; // ES6

const Calculator = (props) => {

    const [temp, setTemp] = useState('');
    const [scale, setScale] = useState('c');

    const convert = (scale, temp) => {
        if (temp === '') {
            return '';
        }
        if (scale === 'c') {
            return Math.round(((temp * 9/5) + 32), 3);
        } else {
            return Math.round(((temp - 32)*5)/9);
        }
    }
    const celcius = (scale === 'c') ? temp : convert('f', temp);
    const kelvin =  (scale === 'f') ? temp : convert('c', temp);


    const scaleName = {
        c: 'celcius',
        f: 'kelvin'
    }
    const handleChangeTemp = (scale) => (e) => {
        console.log(e.target.value);
        setTemp(e.target.value);
        setScale(scale);
    } 
    return (  
    <div className="calculator-box">
        <h1>This is the Calculator</h1>
        <TemperatureInput title={scaleName.c} value={celcius} onChange={handleChangeTemp('c')} />
        <TemperatureInput title={scaleName.f} value={kelvin} onChange={handleChangeTemp('f')} />
        <WaterVerdic tempC={celcius} tempF={kelvin} />
    </div>
    );
}
//sử dụng proptype trong reactjs 
//lưu ý cần phải install trước
//npm install --save prop-types
Calculator.propTypes = {
    temp: PropTypes.number.isRequired
}
export default Calculator;