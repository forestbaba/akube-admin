import React, { useState, useEffect } from 'react'
import Card from '../../right/itemcard-admin/card'
import './newin.scss'
import { fetchNewinProduct } from '../../redux/product/action'
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '../reusable/ClickedProductPopup'
import Notifier from '../reusable/Notification/Notification'
import { useHistory } from 'react-router';

const Newin = () => {

    const history = useHistory()

    const realDispatch = useDispatch();
    const selectedData = useSelector(state => state);
    let {productData} = selectedData

    const [showDialog, setshowDialog] = useState(false)
    const [selectedItem,setselectedItem] = useState({})

    useEffect(() => {
        realDispatch(fetchNewinProduct())
        console.log('=====', selectedData.productData.fetchNewinProductSuccess)

    
    }, [selectedData.productData.fetchNewinProductSuccess])

    const onSelectProduct=(id)=>{
        console.log('====item id: ', id)
        productData.newinproducts.map(item =>{
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
            <p>Women</p>
            { showPopup() }
            {/* <Notifier 
            message={"Image upload successful"}
            description={"Image upload"}/> */}
            {
                productData.fetchNewinProductSuccess ? <div className='itemholder'>
                    {productData.newinproducts.map(item => {
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
export default Newin;