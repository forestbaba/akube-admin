import React from 'react'
import './forms.scss'
const Form =({title,placeholder, type})=> {
    return (
        <div className='textform'>
            <p>{title}</p>
            <input placeholder={placeholder} />
        </div>
    )
}
export default Form;