import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useEffect } from "react";
import AuthorList from "./AuthorList";
import AuthorNameInput from "./AuthorNameInput";


const baseUrl = 'https://api.quotable.io/quotes/random?limit=20';
const FilterBox = (props) => {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');

    //calling api
    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            // setData(response.data);
            // console.log(response.data);
            setData(response.data);
        });
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value);
        setKeyword(e.target.value); 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <>
        <AuthorNameInput onSubmit={handleSubmit} onChange={handleChange} />
        <AuthorList data={data} keyword={keyword}/>
        </>
     );
}
 
export default FilterBox;