import React, { useState, useEffect } from 'react'
import Card from '../../right/itemcard-admin/card'
import './activewears.scss'
import { getProductByCategory } from '../../redux/product/action'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import Dialog from '../reusable/ClickedProductPopup'
import Notifier from '../reusable/Notification/Notification'
import { useHistory } from 'react-router';

const Activewears = () => {

    const history = useHistory()
    const location = useLocation();
    const realDispatch = useDispatch();
    const selectedData = useSelector(state => state);
    let {productData} = selectedData

    const [showDialog, setshowDialog] = useState(false)
    const [selectedItem,setselectedItem] = useState({})

    useEffect(() => {
       let productId = location.state.id
               console.log('==cate===',productId )

        realDispatch(getProductByCategory(productId))


    
    }, [selectedData.productData.getProductbyCategorySuccess])

    const onSelectProduct=(id)=>{
        console.log('====item id: ', id)
        productData.productCategory.map(item =>{
            if(item.id === id){
                console.log("===",item)
                setselectedItem(item)
                setshowDialog(true)
            }
        })
    }

    const closeDialog=()=> {
        setshowDialog(false)
    }

   


    const showPopup =() => {

        if(showDialog === true){
            return (
                <Dialog 
                 closeDialog={closeDialog}
                name={selectedItem.name}
                image={selectedItem.image}
                size={selectedItem.size}
                category={selectedItem.category}
                price={selectedItem.price}
                description={selectedItem.description}/>

            )
        }
    }
    const handleEdit=id=>{
        console.log('Edit now:', id)
        history.push(`/editProduct`,{id})

    }

    return (
        <div className='newinparent'>
            <p>Shoes</p>
            { showPopup() }
           
            {
                productData.getProductbyCategorySuccess ? <div className='itemholder'>
                    {productData.productCategory.map(item => {
                        return (
                            <Card name={item.name}
                                price={item.price}
                                image={item.image}
                                handleOnCardPress={onSelectProduct.bind(this,item.id)}
                                handleEdit={handleEdit.bind(this,item.id)}/>

                        )
                    })}
                </div>: <p>Loading</p>
           }
        </div>
    )
}
export default Activewears;