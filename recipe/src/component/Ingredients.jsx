import React from "react";


export default function Ingredients({title, ingredientsList}) {
    return(
        <ul className="ingredients">
            <h2>{title}</h2>
            {ingredientsList.map((ingredient, i) => (
                <li key={i}>{ingredient.name} {ingredient.amount} {ingredient.measurement}</li>
            ))}
        </ul>
    )
}