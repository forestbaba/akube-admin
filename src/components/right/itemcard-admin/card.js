import React from 'react'
import { EditSvg  } from '../../icons/styledsvg'

import './card.scss'
const ItemCard = ({name, price, image,handleOnCardPress,handleEdit}) => {

    return (
        <div className='parentcard' >

            <img src={image} onClick ={handleOnCardPress}></img>

            <div className='details-holder'>
                <div className='desc-holder'>
                    <p className='title'>{name}</p>
                    <p className='price'>₦ {price}</p>
                </div>
                
                <EditSvg className='heart-holder' onClick={handleEdit}/>

            </div>
        </div>

    )
}

export default ItemCard;