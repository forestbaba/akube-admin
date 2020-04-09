import React from 'react'
import './forms.scss'
const Form = ({ title,name, placeholder, handleChange})=> {
    return (
        <div className='textform'>
            <p>{title}</p>
            <input placeholder={placeholder} name={name} onChange={handleChange} />
        </div>
    )
}
export default Form;