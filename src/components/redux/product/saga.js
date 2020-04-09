import { call, put, takeEvery, take } from 'redux-saga/effects';
import { channel } from 'redux-saga';
import actionTypes from '../types';
import {
        fetchProductSuccesss,
        fetchProductFailure, 
        addProductSuccesss,
        addProductFailure,
        uploadImageSuccesss,
        uploadImageFailure,
        fetchNewinProduct,
        fetchNewinProductFailure,
        fetchNewinProductSuccesss,
        getProductSuccesss,
        getProductFailure,
        updateProductSuccesss,
        updateProductFailure,
        getProductImagesSuccesss,
        getProductImagesFailure,
        getProductByCategoryFailure,
        getProductByCategorySuccesss
} from './action'
import axios from 'axios'
const BASE_URL = 'http://localhost:2000/api/v1/product';
const BASE_URL2 = 'http://localhost:2000/api/v1/images';
const { 
    FETCH_ALL_PRODUCTS,
    FETCH_ALL_PRODUCT_SUCCESS,
    FETCH_ALL_PRODUCTS_FAILURE,
    ADD_PRODUCTS,
    UPLOAD_IMAGE,
    NEWIN_PRODUCTS,
    GET_PRODUCT,
    UPDATE_ONE,
    GET_PRODUCT_IMAGES,
    GET_PRODUCT_BY_CATEGORY
    } = actionTypes;


function* getAllProducts() {
    const products = channel();
    try {
        yield call(async () => {
            // const allProducts = await axios.get("https://oddwyse.herokuapp.com/api/v1/game/all");
            const allProducts = await axios.get("http://localhost:2000/api/v1/product/getAll");
            if (allProducts.length !== 0) {
                products.put(fetchProductSuccesss(allProducts));
            }

        });
        while (true) {
            const action = yield take(products);
            yield put(action);
        }
    } catch (error) {
        yield put(fetchProductFailure(error));
    }
}


function* addnewProduct({ payload }) {
    console.log('Take this action: ',payload)
    const addProduct = channel();
    try {
        if (payload) {
            yield axios.post(`${BASE_URL}/add`, {
                name: payload.name,
                description: payload.description,
                size: payload.size,
                price: payload.price,
                category: payload.category
            })
                .then(data => {
                    console.log('Document successfully written!');
                    addProduct.put(addProductSuccesss(data));

                })
        }
        while (true) {
            const action = yield take(addProduct);
            yield put(action);
        }
    } catch (error) {
         console.log('KKKKKKKKKKKKKKK: ', error)
        yield put(addProductFailure(error));
    }
}

function* uploadProductImage({ payload }) {

    console.log('Take this action: ',payload)
    const uploadImage = channel();
    try {
        
        console.log('Take this === action: ', payload.file)
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        if (payload) {
            yield axios.post(`${BASE_URL}/uploadFile`, payload)
                .then(data => {
                    console.log('Document successfully written! ',data);
                    uploadImage.put(uploadImageSuccesss(data));

                })
        }
        while (true) {
            const action = yield take(uploadImage);
            yield put(action);
        }
    } catch (error) {
        yield put(uploadImageFailure(error));
    }
}


function* getAllNewinProducts() {
    const newinProducts = channel();
    const newArr =[]
    try {
        yield call(async () => {
            // const allProducts = await axios.get("https://oddwyse.herokuapp.com/api/v1/game/all");
            const allNewinProducts = await axios.get(`${BASE_URL}/getAllNewin`);
            if (allNewinProducts.length !== 0) {
                //newArr=allNewinProducts.data
                allNewinProducts.data.map(its => {
                  //  console.log('>>>', its)
                    newArr.push(its)
                })
                newinProducts.put(fetchNewinProductSuccesss(newArr));
                //console.log('****', newArr)
            }

        });
        while (true) {
            const action = yield take(newinProducts);
            yield put(action);
        }
    } catch (error) {
        yield put(fetchNewinProductFailure(error));
    }
}           
function* getSingleProduct({payload}) {

    const singleProduct = channel();
    try {
        yield call(async () => {
            const singleProd = await axios.get(`${BASE_URL}/getSingleProduct/${payload}`);
            if (singleProd.length !== 0) {
                singleProduct.put(getProductSuccesss(singleProd.data));
                //console.log('****', newArr)
            }

        });
        while (true) {
            const action = yield take(singleProduct);
            yield put(action);
        }
    } catch (error) {
        yield put(getProductFailure(error));
    }
}
function* updateSingleProduct({payload}) {

    console.log('===Prod: ',payload.id)

    const updatedProduct = channel();
    try {
        yield call(async () => {
            const singleProd = await axios.put(`${BASE_URL}/updateOne/${payload.id}`,{
                name:payload.name,
                price: payload.price,
                size:payload.size,
                category:payload.category,
                description: payload.description,
                image: payload.image
            });
            if (singleProd.length !== 0) {
                 console.log('YYYYYY: ',singleProd)
                updatedProduct.put(updateProductSuccesss(singleProd));
                //console.log('****', newArr)
            }

        });
        while (true) {
            const action = yield take(updatedProduct);
            yield put(action);
        }
    } catch (error) {
        yield put(updateProductFailure(error));
    }
}
function* getImagesOfProduct({payload}) {

    const productImage = channel();
    try {
        yield call(async () => {
            const getProdIma = await axios.get(`${BASE_URL2}/product/${payload}`);
            if (getProdIma.length !== 0) {
                productImage.put(getProductImagesSuccesss(getProdIma.data));
                                 console.log('YYYYYY: ',getProdIma.data)

                //console.log('****', newArr)
            }

        });
        while (true) {
            const action = yield take(productImage);
            yield put(action);
        }
    } catch (error) {
        console.log('==========This images: ', error)
        yield put(getProductImagesFailure(error));
    }
}
function* getProductInCategories({payload}) {

    const productCategory = channel();
    try {
        yield call(async () => {
            const getProdcategory = await axios.get(`${BASE_URL}/getByCategory/${payload}`);
            if (getProdcategory.length !== 0) {
                productCategory.put(getProductByCategorySuccesss(getProdcategory.data));
                //console.log('****', newArr)
            }

        });
        while (true) {
            const action = yield take(productCategory);
            yield put(action);
        }
    } catch (error) {
        yield put(getProductByCategoryFailure(error));
    }
}


export default function* merchantSaga() {

    yield takeEvery(FETCH_ALL_PRODUCTS, getAllProducts);
    yield takeEvery(ADD_PRODUCTS, addnewProduct);
    yield takeEvery(UPLOAD_IMAGE, uploadProductImage);
    yield takeEvery(NEWIN_PRODUCTS, getAllNewinProducts);
    yield takeEvery(GET_PRODUCT, getSingleProduct);
    yield takeEvery(UPDATE_ONE, updateSingleProduct);
    yield takeEvery(GET_PRODUCT_IMAGES, getImagesOfProduct);
    yield takeEvery(GET_PRODUCT_BY_CATEGORY, getProductInCategories);

}