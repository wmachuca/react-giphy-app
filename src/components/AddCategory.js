import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategory(cats => [inputValue, ...cats]);
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </Fragment>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
