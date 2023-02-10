import React from "react";

export default function Instructions({steps}) {
    return(
        <section className="instructions">
            <h3>Cooking instructions</h3>
            {steps.map((s, i) => (
                <p key={i} style={{color:"brown"}}>Step {i+1}: {s}</p>
            ))}
        </section>
    )
}