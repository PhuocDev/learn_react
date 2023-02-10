import React from "react";
import Recipe from "./Recipe";

export default function Menu({data}) {
    return (
        <article>
          <header>
            <h1>Delicious Recipes - title of menu</h1>
          </header>
          <div className="recipes" style={{margin:"30px"}} >
            {data.map((recipe, i) => (
              <Recipe key={i} {...recipe} /> //truyen tat ca tham so cua recipe { name, ingredients, steps }
            ))}
          </div>
        </article>
      );
}