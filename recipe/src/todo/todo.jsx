import React, { useState } from "react"

export function Todo(){

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const jobsSaved = JSON.parse(localStorage.getItem("jobs"));
        console.log(jobsSaved);

        return jobsSaved ?? [];
    });

    console.log(job);

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job];
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJobs ?? []);
            return newJobs;
        });
        setJob('');
    }
    const clearStorage = () => {
        localStorage.clear();
        setJobs([])
    }
    const deleteItem= (i) => {
        // var jobsTem = JSON.parse(localStorage.getItem("jobs"));
        // console.log(i);
        // setJobs(jobsTem);
        
        console.log("index = " + i);
        const newList = removeAllInstances(jobs, jobs[i])
        console.log(newList);

    }
    function removeAllInstances(arr, item) {
        for (var i = arr.length; i--;) {
          if (arr[i] === item) arr.splice(i, 1);
        }
        return arr;
     }
    return(
        <div style={{padding:"30px"}}>
            <h1>To do App</h1>
            <input value={job} onChange={e => setJob(e.target.value)} required/>
            <button onClick={handleSubmit}>Add</button>
            <button onClick={clearStorage}>Clear all</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job} <button onClick={ () => deleteItem(index)}> x </button></li>
                ))}
            </ul>
        </div>
    )
}