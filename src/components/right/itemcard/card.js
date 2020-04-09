import React from 'react'
import Image from './101.jpg';
import {  HeartOutlinedSvg } from '../../icons/styledsvg'

import './card.scss'
const ItemCard = () => {

    return (
        <div className='parentcard'>
       
            <img src={Image}></img>

            <div className='details-holder'>
                <div className='desc-holder'>
                    <p className='title'>Adidas Original </p>
                    <p className='price'>₦ 56,000</p>
                </div>
                
                <HeartOutlinedSvg className='heart-holder' />

            </div>
        </div>

    )
}

export default ItemCard;