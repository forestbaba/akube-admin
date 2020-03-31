import React, { useState } from 'react'
import './right.scss'
import { useHistory } from 'react-router';

import { MenSvg, WomenSvg, SortSvg, FilterSvg, CartSvg, DownArrowSvg, SearchSvg } from '../../components/icons/styledsvg'
import ProductCard from './itemcard/card'
import Navbar from './navbar/navbar'
const RightSide = () => {
    const history = useHistory();


    const [item, setItem] = useState([{ name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' },])
    // const[scrollTo, setScrollTo]= useState([])
    // this.scrollTo = this.scrollTo.bind(this);
    const [activelink, setactivelink] = useState(null)

    const [categoryItem, setCategoryItem] = useState([
        { uid: 1, name: "Women", icon: WomenSvg,path:"women" },
        { uid: 2, name: "Men", icon: MenSvg,path:'men' },
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
                    <h2>Trending</h2>
                    <div className='card-item-holder'>
                        {
                            item.map((item) => {
                                return <ProductCard />

                            })
                        }
                    </div>

                </div>
                <div className='sub-left'>
                    <h2>Top products</h2>
                    <div className='card-item-holder'>
                        {
                            item.map((item) => {
                                return <ProductCard />

                            })
                        }
                    </div>

                </div>
                <div className='sub-left'>
                    <h2>Top item</h2>
                    <div className='card-item-holder'>
                        {
                            item.map((item) => {
                                return <ProductCard />

                            })
                        }
                    </div>

                </div>
                <div className='sub-right'>

                </div>
            </div>
        </div >
    )
}
export default RightSide;