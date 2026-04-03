import React from 'react'

function Form({ label, type, placeholder, id }) {
    return (
        <div>
            <div>
                <label htmlFor={id}>{label}: </label>
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                />
            </div>
            <br />
        </div>
    )
}

export default Form;
