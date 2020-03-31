import React, { useState } from 'react'
import Card from '../../right/itemcard/card'
import './women.scss'
const Women = () => {

    const [items, setItems] = useState([{ name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }])

    return (
        <div className='womenparent'>
            <p>Women</p>
            <div className='itemholder'>
                {items.map(item => {
                    return (
                        <Card />

                    )
                })}
            </div>
        </div>
    )
}
export default Women;