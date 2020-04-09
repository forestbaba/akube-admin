import React from 'react'
import './forms.scss'
const Form = ({ title,name, placeholder, handleChange})=> {
    return (
        <div className='textareaform'>
            <p>{title}</p>
            <textarea placeholder={placeholder} name={name} onChange={handleChange}/>
        </div>
    )
}
export default Form;