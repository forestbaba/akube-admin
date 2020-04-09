import React, { useState } from 'react'
import './menu-list.scss'
import { NewSvg, HangerSvg, SportSvg, ClothingSvg, TrackSvg } from '../../../components/icons/styledsvg'

import { useHistory } from 'react-router';

const Menulist = () => {

    

    const [categoryItem] = useState([
        { uid: 1, name: "New in", icon: NewSvg, path: "newin" },
        { uid: 2, name: "Clothing", icon: HangerSvg, path: 'clothing' },
        { uid: 3, name: "Shoes", icon: SportSvg, path: 'shoes' },
        { uid: 4, name: "Accessories", icon: ClothingSvg, path: 'accessories' },
        { uid: 5, name: "Activewear", icon: TrackSvg, path: 'activewears' }
    ])
    const [activelink, setactivelink] = useState(null)
const history = useHistory()

    const handleClick = id => {
        setactivelink(id)
        history.push(`/${categoryItem[id - 1].path}`,  {id:categoryItem[id - 1].path})
        // history.push(`/editProduct`,{id})
    }
    return (
        <div className='parent'>
            <ul>
                {categoryItem.map(item => {
                    return (<li key={item.uid}
                        onClick={() => handleClick(item.uid)} >
                        <div className={
                        
                        item.className +
                            (item.uid === activelink ? " icon-and-item-active" : ' icon-and-item')}>
                            <item.icon /><p>{item.name}</p>
                        </div>
                    </li>)
                })}

            </ul>
        </div>
    )
}
export default Menulist
