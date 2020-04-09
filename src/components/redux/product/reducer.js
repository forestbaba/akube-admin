import actionTypes from '../types';

const { FETCH_ALL_PRODUCTS,
    FETCH_ALL_PRODUCT_SUCCESS,
    FETCH_ALL_PRODUCTS_FAILURE,
    ADD_PRODUCTS,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCTS_FAILURE,
    
     UPLOAD_IMAGE,
    UPLOAD_IMAGE_SUCCESS,
    NEWIN_PRODUCTS,
    NEWIN_PRODUCT_SUCCESS,
    NEWIN_PRODUCTS_FAILURE,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
     UPDATE_ONE,
    UPDATE_ONE_SUCCESS,
    UPDATE_ONE_FAILURE,
    
    GET_PRODUCT_IMAGES,
    GET_PRODUCT_IMAGES_SUCCESS,
    GET_PRODUCT_IMAGES_FAILURE,

    GET_PRODUCT_BY_CATEGORY,
    GET_PRODUCT_BY_CATEGORY_SUCCESS,
    GET_PRODUCT_BY_CATEGORY_FAILURE,
} = actionTypes;


const initialState = {
    allProducts: [],
    fetchingAllProducts: false,
    addProducts: false,
    addProductsSuccess: false,
    uploadingImage: false,
    uploadingImageSuccess: false,
    error:{},
    image: {},
    
    fetchNewinProducts: false,
    fetchNewinProductSuccess: false,
    newinproducts:[],
    getProduct:false,
    getProductSuccess: false,
    updatingProduct:false,
    updateProductSuccess: false,
    product:{},
    productImages:[],
    productCategory:[],
    getProductImages: false,
    getProductImagesSuccess: false,
    getProductbyCategory: false,
    getProductbyCategorySuccess: false

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_PRODUCTS:
            return { ...state, fetchingAllProducts: true }


        case FETCH_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                fetchingAllProducts: false,
                products: payload
            };
        case FETCH_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                fetchingAllProducts: false,
                error: payload
            };
        case ADD_PRODUCTS:
            return { ...state, addProducts: true }


        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                addProducts: false,
                addProductsSuccess: true,
                product: payload
            };
        case ADD_PRODUCTS_FAILURE:
            return {
                ...state,
                addProducts: false,
                addProductsSuccess:false,
                error: payload
            };
        case UPLOAD_IMAGE:
            return { ...state, uploadingImage: true }


        case UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                uploadingImage: false,
                uploadingImageSuccess: true,
                image: payload
            };
        // case ADD_PRODUCTS_FAILURE:
        //     return {
        //         ...state,
        //         uploadingImage: false,
        //         uploadingImageSuccess:false,
        //         error: payload
        //     };
        
        case NEWIN_PRODUCTS:
            return { ...state, fetchNewinProducts: true }


        case NEWIN_PRODUCT_SUCCESS:
            return {
                ...state,
                fetchNewinProducts: false,
                fetchNewinProductSuccess: true,
                newinproducts: payload
            };
        case NEWIN_PRODUCTS_FAILURE:
            return {
                ...state,
                fetchNewinProducts: false,
                error: payload
            };
        case GET_PRODUCT:
            return { ...state, getProduct: true }


        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                getProduct: false,
                getProductSuccess: true,
                product: payload
            };
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                getProduct: false,
                error: payload
            };
        case UPDATE_ONE:
            return { ...state, updatingProduct: true }


        case UPDATE_ONE_SUCCESS:
            return {
                ...state,
                updatingProduct: false,
                updateProductSuccess: true,
                product: payload
            };
        case UPDATE_ONE_FAILURE:
            return {
                ...state,
                updateProduct: false,
                error: payload
            };
        case GET_PRODUCT_IMAGES:
            return { ...state, getProductImages: true }


        case GET_PRODUCT_IMAGES_SUCCESS:
            return {
                ...state,
                getProductImages: false,
                getProductImagesSuccess: true,
                productImages: payload
            };
        case GET_PRODUCT_IMAGES_FAILURE:
            return {
                ...state,
                getProductImages: false,
                error: payload
            };
        case GET_PRODUCT_BY_CATEGORY:
            return { ...state, getProductbyCategory: true }


        case GET_PRODUCT_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                getProductbyCategory: false,
                getProductbyCategorySuccess: true,
                productCategory: payload
            };
        case GET_PRODUCT_BY_CATEGORY_FAILURE:
            return {
                ...state,
                getProductbyCategory: false,
                error: payload
            };
        default:
            return state;

    }
}