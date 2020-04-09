import React, { useState, useEffect } from 'react'
import './edit.scss'
import Form from '../../Forms/textform22'
import FormArea from '../../Forms/textareaform22'
import Imagepicker from '../../Forms/imagepicker'

import Select from 'react-select';
import { UploadSvg } from '../../icons/styledsvg';
import {  message } from 'antd';
import { useLocation } from "react-router-dom";
import { getProduct, updateProduct, getProductImages } from '../../redux/product/action'
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../reusable/spinner'
import {  uploadImage } from '../../redux/product/action'
import Dialog from '../reusable/ClickedImagePopup'
import EditImageItem from './EditImageItem';
import NotifierDialog from '../reusable/Notification/Notifier-dialog';

import PropTypes from 'prop-types'


const EditProduct = () => {

    const selectedData = useSelector(state => state);
    let { productData: { productImages, product, getProductSuccess,
    updatingProduct,updateProductSuccess } } = selectedData



    const realDispatch = useDispatch()
    const location = useLocation();
    const [productform, setproductform] = useState({name:'', size:'', price:'',category:'', description:''})
    const [size, setsize] = useState(null)
    const [category, setcategory] = useState(null)
    const [selectoption, setselectoption] = useState(null)
    const [selectsizeoption, setselectsizeoption] = useState(null)
    const [selectImageLoading, setselectImageLoading] = useState(false)
    const [uploadImageUrl, setuploadImageUrl] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [isviewClicked, setisviewClicked] = useState(false)
    const [clckedImge, setclckedImge] = useState([])
    const [preview, setPreview] = useState()
    const [showNotification, setshowNotification] = useState(false)
    const [showNotificationError, setshowNotificationError] = useState({})

    const [categoryoptions] = useState([
        { value: 'clothing', label: 'Clothing' },
        { value: 'shoes', label: 'Shoes' },
        { value: 'accessories', label: 'Accessories' },
        { value: 'activewears', label: 'Active Wears' },
    ]);
    const [items] = useState([
        { id: '1', value: 'Extra Small', label: 'XS' },
        { id: '2', value: 'Small', label: 'S' },
        { id: '3', value: 'Medium', label: 'M' },
        { id: '4', value: 'Large', label: 'L' },
        { id: '5', value: 'Extra Large', label: 'XL' },
        { id: '6', value: 'Extra extra Large', label: 'XXL' },
        { id: '7', value: 'Extra extra extra Large', label: 'XXXL' }
    ])

    useEffect(() => {

        let productId = location.state.id
        realDispatch(getProduct(productId))
        realDispatch(getProductImages(productId))
        setproductform(null)

        if (getProductSuccess) {
            setproductform(product)
        }
       

        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        console.log('The object url: ', selectedFile)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)



    }, [selectedFile, useLocation, getProductSuccess])

    const handleValidation = () => {

    }
    const handleInputChange = (e) => {
        const value = e.target.value;
        setproductform({
            ...productform,
            [e.target.name]: value, size: size, category: category
        });

    };

    const handleChangeCategory = so => {
        setselectoption(so)
        setcategory(so)
        setproductform({ ...productform, category: so.value })
        console.log('>>>>this category: ', so.value)

    };
    const handleSizeChange = selectedOption => {
        setsize(selectedOption)
        setproductform({ ...productform, size: selectedOption.label })
        console.log('New category product form : ', selectedOption.label)

        //console.log(`Option selected:`, selectedOption);
    };

    const handleUpdateProduct = () => {
        console.log('To be updated: ', productform)
        if(typeof productform == 'undefined'){
            setshowNotificationError({
                title:'Update error',
                body:'Please fill all required fields',
                className:'notification-dialog danger'
            })
            showNofiticationDialog()
        }
        else if(productform.name.trim() == ''){
            setshowNotificationError({
                title:'Update error',
                body:'Name can not be empty',
                className:'notification-dialog danger'
            })
            showNofiticationDialog()
        }
        else if(productform.price.trim() == ''){
            setshowNotificationError({
                title:'Update error',
                body:'price can not be empty',
                className:'notification-dialog danger'
            })
            showNofiticationDialog()
        }
        else if(productform.category == ''){
            setshowNotificationError({
                title:'Update error',
                body:'category can not be empty',
                className:'notification-dialog danger'
            })
            showNofiticationDialog()
        }
        else if(productform.size == ''){
            setshowNotificationError({
                title:'Update error',
                body:'size can not be empty',
                className:'notification-dialog danger'
            })
            showNofiticationDialog()
        }
        else if(productform.description.trim() == ''){
            setshowNotificationError({
                title:'Update error',
                body:'description can not be empty',
                className:'notification-dialog danger'
            })
            showNofiticationDialog()
        }else{
       realDispatch(updateProduct(productform))

        }

    }
    const viewImage = img => {
        console.log('img: ', img)
        setclckedImge(img)
        setisviewClicked(!isviewClicked)
    }
    const editImage = () => {
        console.log('Edit image ')
    }
    const confirmDelete = e => {
        console.log(e);
        message.success('Click on Yes');
    }

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        console.log('>>>>>>>>>selected file: ', selectedFile)
    }

    const handleImageuploadChange = info => {
        if (info.file.status === 'uploading') {
            setselectImageLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                setuploadImageUrl(imageUrl),
                setselectImageLoading(false)
            );
        }

    }

    const showNofiticationDialog =()=>{
        setshowNotification(true)
        setTimeout(() => {
            setshowNotification(false)
        }, 3000);
    }


    const handleUploadButton = () => {
        console.log('=====', uploadImageUrl)
        console.log('==upload status===', selectImageLoading)
        let data = new FormData();
        if (selectedFile !== null) {
            data.append('file', selectedFile);
            data.append('product', productform.id)
            realDispatch(uploadImage(data))
            console.log('===Upload content: ', productform)
        }

    }

    return (

        <div className='editProductParent'>
            <p className='page-title' style={{marginLeft:'25px', padding:'15px'}}>Edit product</p>
         
           {    showNotification ? 
                <NotifierDialog title={showNotificationError.title} 
                content={showNotificationError.body}
                className={showNotificationError.className}/> : null
            }
            {
                updateProductSuccess ? <NotifierDialog title={'Update success'} 
                content={'Product successfully updated'}
                className={'notification-dialog success'}/> : null
            }
           
            {
                isviewClicked ? <Dialog closeDialog={viewImage} image={clckedImge}/> : null
            }

            {// Spinner
                getProductSuccess ?
                    <>
                        <div className='image-containers-holer'>
                            <div className='imageholder' >
                                {
                                    productImages.map(image =>  <EditImageItem key={image.id}
                                      viewImage={viewImage.bind(this,image.imageUrl)}
                                        editImage={editImage}
                                        imageUrl={image.imageUrl}
                                                confirmDelete={confirmDelete}
                                        />)
                                    
                                   
                                }
                            </div>
                            <div>
                                <Imagepicker
                                    onImageChange={onSelectFile}
                                    selectedFile={selectedFile}
                                    preview={preview} />
                                {selectedFile === null ? null : <UploadSvg className='eye'
                                    onClick={handleUploadButton}
                                    style={{ marginLeft: '60px', marginTop: '10px' }}
                                />}
                            </div>

                        </div>

                        <hr />
                        <div className='formholder'>

                            <Form
                                title={'Name'}
                                placeholder={"jeggins"}
                                name={"name"}
                                value={productform && productform.name || ''}
                                handleChange={handleInputChange}
                            />
                            <span></span>
                            <Form title={'Price'} placeholder={"price"}
                                name={"price"}
                                value={productform && productform.price ||''}
                                handleChange={handleInputChange} />
                            <div className='select-holder'>
                                <p className='prompt'>Select Category: </p>
                                <Select
                                    value={selectoption}
                                    onChange={handleChangeCategory}
                                    options={categoryoptions}
                                    placeholder={"Select category"}
                                />

                            </div>
                            <div className='select-holder'>
                                <p className='prompt'>Select Size: </p>

                                <Select
                                    value={size}
                                    onChange={handleSizeChange}
                                    options={items}
                                    placeholder={"Select Size"}
                                />

                            </div>
                            <div>
                                <FormArea
                                    title={'Description'}
                                    placeholder={'Des'}
                                    value={productform && productform.description || ''}
                                    name={"description"}
                                    handleChange={handleInputChange} />

                            </div>


                            <button onClick={handleUpdateProduct.bind(this)} className='savebutton'>{updatingProduct ?'updating' :  'Upate'}</button>

                        </div>
                    </> : <p>Loading</p>

            }


        </div>
    )
}

EditProduct.propTypes = {
productData : PropTypes.object.isRequired,
}
export default EditProduct;