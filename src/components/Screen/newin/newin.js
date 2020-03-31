import React, { useState } from 'react'
import Card from '../../right/itemcard/card'
import './newin.scss'
const Newin = () => {

    const [items, setItems] = useState([{ name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }])

    return (
        <div className='newinparent'>
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
export default Newin;