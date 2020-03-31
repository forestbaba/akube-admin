import React, { useState } from 'react'

const Sizeselector = ({title, size}) => {

    const [items, setItems] = useState([
        { id: '1', name: 'Extra Small', abbr: 'XS' },
        { id: '2', name: 'Small', abbr: 'S' },
        { id: '3', name: 'Medium', abbr: 'M' },
        { id: '4', name: 'Large', abbr: 'L' },
        { id: '5', name: 'Extra Large', abbr: 'XL' },
        { id: '6', name: 'Extra extra Large', abbr: 'XXL' },
        { id: '7', name: 'Extra extra extra Large', abbr: 'XXXL' }
    ])
    const [activelink, setActiveLink] = useState(null)

    const handleClick = id => {
        console.log('Clickey')
        setActiveLink(id)

        items.map(item => {
            if (item.id.toString() === id.toString()) {
                size = items[id -1].abbr;
                console.log('The size: ',size)
            }
        })
        
    }
    return (
        <div className='size-selector-parent'>
            <p>{title}</p>

            <ul>
                {
                    items.map(item => {
                        return (<li
                            onClick={() => handleClick(item.id)}

                            className={
                                item.className +
                                (item.uid === activelink ? " icon-and-item1" : ' icon-and-item')}>
                            {item.abbr}
                        </li>)
                    })

                }
            </ul>

        </div>
    )
}
export default Sizeselector;