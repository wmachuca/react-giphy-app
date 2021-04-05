import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch Man'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Mob Psycho 100']);
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories} />
            <hr />
            <ol>
                {
                    // categories.map(category => <li key={category}>{category}</li>)
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;