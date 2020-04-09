
import React, {  useEffect } from 'react';
import './style.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {CloseSvg} from '../../../icons/styledsvg'

const Popup = ({ name, category, subcategory, reducedprice, price, quantity, description,image,closeDialog,
	  }) => {

	useEffect(() => {
	}, []);

	return (
		<div className='popup1'>
				<div className='popup_inner'>
					<CloseSvg onClick={closeDialog}/>
					<div className='left-child'>
					<img src={image} alt='avatar' style={{width:600, height: 400}}/>
				</div>
			</div>
		</div>
	);

};


export default Popup;