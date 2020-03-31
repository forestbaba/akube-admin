import React, { useState } from 'react'
import Image from './101.jpg';
import { HeartFilledSvg, HeartOutlinedSvg } from '../../icons/styledsvg'

import './card.scss'
const ItemCard = () => {

    return (
        <div className='parentcard'>
            {/* <div style={{
                backgroundImage: `url(${Image})`,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
                // height: '300px', width: '200px'
            }}>
           
            </div> */}

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