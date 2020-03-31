import React from 'react'
import './forms.scss'
const Form =({title,placeholder})=> {
    return (
        <div className='textareaform'>
            <p>{title}</p>
            <textarea placeholder={placeholder} />
        </div>
    )
}
export default Form;