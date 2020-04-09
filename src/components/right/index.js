import React, { useState,useEffect } from 'react'
import './right.scss'
// import { useHistory } from 'react-router';
import {  useDispatch } from 'react-redux';

import { MenSvg, WomenSvg, SortSvg, FilterSvg } from '../../components/icons/styledsvg'
// import ProductCard from './itemcard/card'
// import Navbar from './navbar/navbar'
import { fetchProduct} from '../redux/product/action'
const RightSide = () => {
    // const history = useHistory();
    const realdispatch = useDispatch();


     useEffect(() => {
        
        realdispatch(fetchProduct())
    }, [])

    const [item, setItem] = useState([{ name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' },])

    const [activelink, setactivelink] = useState(null)

    const [categoryItem, setCategoryItem] = useState([
        { uid: 1, name: "Women", icon: WomenSvg, path: "women" },
        { uid: 2, name: "Men", icon: MenSvg, path: 'men' },
        { uid: 3, name: "Sort", icon: SortSvg },
        { uid: 4, name: "Filter", icon: FilterSvg }])

    const handleClick = id => {
        console.log('yes: ' + id)
        setactivelink(id)
    };



    return (
        <div className='parent'>

            {/* <Navbar/> */}
            <div>
                <div className='sub-left'>
                    {/* <h2>Statistics</h2>
                    <div className='card-item-holder'>
                        {
                            item.map((item) => {
                                return <ProductCard />

                            })
                        }
                    </div> */}

                </div>


                <div className='sub-right'>

                </div>
            </div>
        </div >
    )
}
export default RightSide;