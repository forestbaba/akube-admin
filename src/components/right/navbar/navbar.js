import React, { useState } from 'react'
import { AddnewSvg, MenSvg,  SortSvg, FilterSvg,  DownArrowSvg, SearchSvg } from '../../../components/icons/styledsvg'
import './navbar.scss'
import { useHistory } from 'react-router'; 

const Navbar = () => {
    const history = useHistory();
    const [activelink, setactivelink] = useState(null)

    const [categoryItem] = useState([
        { uid: 1, name: "Add", icon: AddnewSvg, path:'add' },
        { uid: 2, name: "Men", icon: MenSvg, path: 'men'},
        { uid: 3, name: "Sort", icon: SortSvg },
        { uid: 4, name: "Filter", icon: FilterSvg }])

    const handleClick = id => {
        console.log('yes: ' + id)
        setactivelink(id)
        if (id === 1 || id === 2) {
            history.push(`/${categoryItem[id - 1].path}`)
        }
    };
    return (
        <>
            <div className='level-1'>
                <div className='search-holder'>

                    <SearchSvg />
                    <input placeholder={'search for Items, Brands and Inspiration'} />
                </div>
                <div className='cart-and-name-holder'>
                    {/* <div className='cart-holder'>
                        <CartSvg />
                        <p>Cart:   </p>
                        <p>2</p>
                    </div> */}
                    <div className='name-holder'>
                        <p className='ptitle'>Hello</p>
                        <p className='name'>Mr James</p>
                        <DownArrowSvg />

                    </div>
                </div>

            </div>
            <div className='level-2'>
                <div>
                    {/* <h1>New in</h1> */}
                </div>
                <div className='list-holder'>
                    <ul>
                        {

                                categoryItem.map(item => {
                                return (<li key={item.uid}
                                    onClick={() => handleClick(item.uid)} >
                                    <div className={

                                        item.className +
                                        (item.uid === activelink ? " icon-and-item1" : ' icon-and-item')}>
                                        <item.icon /><p>{item.name}</p>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Navbar;