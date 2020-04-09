import React, { useState } from 'react'
import Form from './textform'
const Sizeselector = ({ title, selectorItem, handleClickSize, activelink}) => {

    const [items, setItems] = useState([
        { id: '1', name: 'Extra Small', abbr: 'XS' },
        { id: '2', name: 'Small', abbr: 'S' },
        { id: '3', name: 'Medium', abbr: 'M' },
        { id: '4', name: 'Large', abbr: 'L' },
        { id: '5', name: 'Extra Large', abbr: 'XL' },
        { id: '6', name: 'Extra extra Large', abbr: 'XXL' },
        { id: '7', name: 'Extra extra extra Large', abbr: 'XXXL' }
    ])
    const [namevalue, setnamevalue] = useState('')

   
    return (
        <div className='size-selector-parent'>
            <p>{title}</p>

            <ul>
                {

                    selectorItem.map(item => {
                        return (<li
                            // onChange={handleChange}
                            // onClick={() => handleClickSize(item.id)}>
                            onClick={handleClickSize(item.id)}>
                            <div className={
                                item.className +
                                (item.id === activelink ? ' active' : ' active1')}
                                >

                            </div>
                            {item.abbr}
                            {/* <input placeholder="L" name="size" value={namevalue} onChange={handleClick.bind(this)}/> */}
                        </li>)
                    })

                }
            </ul>

        </div>
    )
}
export default Sizeselector;