import React from 'react'
import './forms.scss'
const Form = ({ title,name,value, placeholder, handleChange})=> {
    return (
        <div className='textform'>
            <p>{title}</p>
            <input placeholder={placeholder} value={value} name={name} onChange={handleChange} />
        </div>
    )
}
export default Form;