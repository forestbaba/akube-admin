import React from 'react'
import Menulist from './menu/menu-list'
import './left.scss'
import { QuestionSvg } from '../../components/icons/styledsvg'

const LeftSide = () => {
    return (
        <div className='parent'>
            <div className='titleholder'>
                <h1>AKUBE</h1>
            </div>
            <div>
                <h1>Explore</h1>
                <Menulist />
            </div>
            <div className='icon-and-item'>
                <QuestionSvg />
                <p>Help center</p>
            </div>
        </div>
    )
}
export default LeftSide;