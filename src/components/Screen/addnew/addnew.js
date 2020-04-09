import React, { useState, useEffect } from 'react'
import './addnew.scss';
import Form from '../../Forms/textform'
import FormArea from '../../Forms/textareaform'
import Imagepicker from '../../Forms/imagepicker'
import { addProduct, uploadImage } from '../../redux/product/action'
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';


const Addnew = ({ selectorItem }) => {

    const realDispatch = useDispatch()

const { productData:{addProductsSuccess,uploadingImageSuccess, product}} = useSelector(state => state);

    const [productform, setproductform] = useState(null)
    const [size, setsize] = useState(null)
    const [category, setcategory] = useState(null)
    const [selectoption, setselectoption] = useState(null)
    const [field ] = useState({ name: '' })
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
    const [variableerror] = useState({})
    const [ setallerror] = useState(false)
    const [errors, seterrors] = useState({})
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()


    const handleValidation = () => {
        let fields = field;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Name field cannot be empty";
        }

        if (typeof fields["name"] !== "undefined" && !fields["name"] === false) {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email field cannot be empty";
        }

        if (typeof fields["email"] !== "undefined" && !fields["email"] === false) {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = " Message field cannot be empty";
        }

        seterrors({ errors: errors });
        console.log('=====', errors['name'])
        return formIsValid;
    }

    const saveProduct = () => {

        //e.preventDefault();
        if (handleValidation()) {
            console.log('validation successful')
        } else {
            console.log('validation failed')
        }


        console.log('form ===>', productform)
        if (productform === null) {
            // console.log('jj')
            setallerror(true)
        }
        else if (!productform.price) {
            variableerror.price = true
            console.log('--', variableerror)
        }
        else {
            const payload = {}
            payload.name = productform.name === null || productform.name === undefined || productform.name === '' ? variableerror.name = true : productform.name;
            payload.price = productform.price
            payload.description = productform.description
            payload.size = productform.size.value
            payload.category = productform.category.value
            payload.image = productform.image
            console.log('error hint: ', variableerror.name)
            console.log('form ===>', payload)

           realDispatch(addProduct(payload))

        }

    }
    const handleImageUpload = () => {
        let data = new FormData();
        data.append('file', selectedFile);
        data.append('product', product.data.id)
        realDispatch(uploadImage(data))
    }

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        console.log('The object url: ', selectedFile)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile,uploadingImageSuccess])

    // const handleClickSize = id => {
    //     setActiveLink(id)

    //     items.map(item => {
    //         if (item.id.toString() === id.toString()) {
    //             setsize(items[id - 1].abbr);
    //         }
    //     })

    // }

    const handleLoginInputChange = (e) => {
        const value = e.target.value;
        
        setproductform({
        ...productform,
        [e.target.name]: value, 
        size: size, 
        category: category, 
        image: selectedFile
        });

    };
    const handleChangeCategory = so => {
        setselectoption(so)
        // console.log(`Option selected:`, so);
        // console.log(`Option selected: 2`, so);
        setcategory(so)
    };
    const handleSizeChange = selectedOption => {
        setsize(selectedOption)
        //console.log(`Option selected:`, selectedOption);
    };

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        console.log('>>>>>>>>>selected file: ', selectedFile)
    }


    return (
        <div className='addnewparent'>

            {/* <Imagepicker
                onImageChange={onSelectFile}
                selectedFile={selectedFile}
                preview={preview} />
            <button onClick={handleImageUpload}>Upload</button> */}
    { 
        addProductsSuccess === true ? 
        (<> 
          <Imagepicker 
                onImageChange={onSelectFile}
                selectedFile={selectedFile}
                preview={preview} />
                <button onClick={handleImageUpload}>Upload</button>
        </>) : 
        
        (<>
             <Form title={'Name'} placeholder={"jeggins"} name={"name"} handleChange={handleLoginInputChange} />
            <span>{errors["name"]}</span>
            <Form title={'Price'} placeholder={"price"} name={"price"} handleChange={handleLoginInputChange} />
            {/* {allerror === true || variableerror.price === true ? <p className='errorhint'>price is required</p> : null} */}
            <div className='select-holder'>
                <p className='prompt'>Select Category: </p>
                <Select
                    value={selectoption}
                    onChange={handleChangeCategory}
                    options={categoryoptions}
                    placeholder={"Select category"}
                />
                {/* {allerror === true || variableerror.category && variableerror.category !== null ? <p className='errorhint'>category is required</p> : null} */}

            </div>
            <div className='select-holder'>
                <p className='prompt'>Select Size: </p>

                <Select
                    value={size}
                    onChange={handleSizeChange}
                    options={items}
                    placeholder={"Select Size"}
                />
                {/* {allerror === true || variableerror.size && variableerror.size !== null ? <p className='errorhint'>please select size</p> : null} */}

            </div>
            <div>
                <FormArea title={'Description'} placeholder={'Des'} name={"description"} handleChange={handleLoginInputChange} />
                {/* {allerror === true || variableerror.description && variableerror.description !== null ? <p className='errorhint'>Description is required</p> : null} */}

            </div>

          
            <button onClick={saveProduct} className='savebutton'>Save</button>
            </>

        )
    } 

           
        </div>
    )
}
export default Addnew;