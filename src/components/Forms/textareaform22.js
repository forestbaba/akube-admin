import React from 'react'
import './forms.scss'
const Form = ({ title,name,value, placeholder, handleChange})=> {
    return (
        <div className='textareaform'>
            <p>{title}</p>
            <textarea 
            placeholder={placeholder}
             name={name}
             value={value}
              onChange={handleChange}/>
        </div>
    )
}
export default Form;