import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['Dragon Ball', 'Pokemon'];
    const [categories, setCategories] = useState(['Puppy'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Digimon']);
    //     setCategories(cats => [...cats, 'ZZZZ']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => 
                         <GifGrid 
                         key={category}
                         category={category}
                         />
                    )
                }
            </ol>
        </>
    )
}
