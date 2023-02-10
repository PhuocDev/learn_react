import React from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instruction';

// export default function Recipe({name, ingredients, instructions}) {
export default function Recipe(props) {
    const {name, ingredients, steps} = props
    console.log(props)
    return(
        <section id={name.toLowerCase().replace(" ", '_')}>
            <h1 className='title'>{name}</h1>
            <Ingredients title={ingredients.name} ingredientsList={ingredients}/>
            <Instructions steps={steps} />
        </section>
    );
}