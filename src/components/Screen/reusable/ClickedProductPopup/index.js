
import React from 'react';
import Popup from './Popup';

const ClickedPopup = ({  closeDialog,price, name, category, size, description,image }) => {

 
    return (

          <Popup
            price={price}
            name={name}
            category={category}
            size={size}
            description={description}
            image={image}
            closeDialog={closeDialog}

          />

    );

}

export default ClickedPopup;
