import React from 'react'

const NotifierDialog =({title, content, className}) =>{
    return (
         <div className={className}>
                <p className='n-title'>{title}</p>
                <p>{content}</p>
            </div>
    )
}

export default NotifierDialog
