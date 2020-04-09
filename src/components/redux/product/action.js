import actionTypes from '../types';

const { FETCH_ALL_PRODUCTS,
    FETCH_ALL_PRODUCT_SUCCESS,
    FETCH_ALL_PRODUCTS_FAILURE,
    ADD_PRODUCTS,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCTS_FAILURE,

     UPLOAD_IMAGE,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_FAILURE,

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


export const fetchProduct = () => ({

    type: FETCH_ALL_PRODUCTS,
});
export const fetchProductSuccesss = payload => ({

    payload,
    type: FETCH_ALL_PRODUCT_SUCCESS,
});
export const fetchProductFailure = payload => ({

    payload,
    type: FETCH_ALL_PRODUCTS_FAILURE,
});
export const addProduct = payload => ({

    payload,
    type: ADD_PRODUCTS,
});
export const addProductSuccesss = payload => ({

    payload,
    type: ADD_PRODUCT_SUCCESS,
});
export const addProductFailure = payload => ({

    payload,
    type: ADD_PRODUCTS_FAILURE,
});

export const uploadImage = payload => ({

    payload,
    type: UPLOAD_IMAGE,
});
export const uploadImageSuccesss = payload => ({

    payload,
    type: UPLOAD_IMAGE_SUCCESS,
});
export const uploadImageFailure = payload => ({

    payload,
    type: UPLOAD_IMAGE_FAILURE,
});



export const fetchNewinProduct = () => ({

    type: NEWIN_PRODUCTS,
});
export const fetchNewinProductSuccesss = payload => ({

    payload,
    type: NEWIN_PRODUCT_SUCCESS,
});
export const fetchNewinProductFailure = payload => ({

    payload,
    type: NEWIN_PRODUCTS_FAILURE,
});

export const getProduct = payload => ({

payload,
    type: GET_PRODUCT,
});
export const getProductSuccesss = payload => ({

    payload,
    type: GET_PRODUCT_SUCCESS,
});
export const  getProductFailure = payload => ({

    payload,
    type: GET_PRODUCT_FAILURE,
});
export const updateProduct = payload => ({

    payload,
    type: UPDATE_ONE,
});
export const updateProductSuccesss = payload => ({

    payload,
    type: UPDATE_ONE_SUCCESS,
});
export const  updateProductFailure = payload => ({

    payload,
    type: UPDATE_ONE_FAILURE,
});
export const getProductImages = payload => ({

    payload,
    type: GET_PRODUCT_IMAGES,
});
export const getProductImagesSuccesss  = payload => ({

    payload,
    type: GET_PRODUCT_IMAGES_SUCCESS,
});
export const  getProductImagesFailure = payload => ({

    payload,
    type: GET_PRODUCT_IMAGES_FAILURE,
});
export const getProductByCategory = payload => ({

    payload,
    type:  GET_PRODUCT_BY_CATEGORY,
});
export const getProductByCategorySuccesss  = payload => ({

    payload,
    type:  GET_PRODUCT_BY_CATEGORY_SUCCESS,
});
export const  getProductByCategoryFailure  = payload => ({

    payload,
    type:  GET_PRODUCT_BY_CATEGORY_FAILURE,
});