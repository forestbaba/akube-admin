
import React, { useEffect } from 'react';
import './style.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Popup = ({ name, category,  size, price, quantity, description,image,closeDialog,
	  }) => {


	return (
		<div className='popup'>
				<div className='popup_inner'>
					<div className='left-child'>
						<img src={image} alt='' style={{width:300, height: 300}}/>
					</div>

					<div className='right-child'>
						<p className='bolded'>{name}</p>
						{/* <p>{subcategory}</p> */}
						<div className='child-one'>
							<div className='sub-child-1'>
								<div className='item-value'>
									<p>size</p>
									<p>{size}</p>
								</div>

								<div className='item-value'>
									<p>price</p>
									<p>{price}</p>
								</div>
								<div className='item-value'>
									<p>category </p>
									<p>{category}</p>
								</div>
							</div>

							<div className='sub-child-2'>
								<p className='title'>Description</p>
								<p>{description}</p>
							</div>

							<button className='close-butt' onClick={closeDialog}>close</button>

						</div>


					</div>

				</div>
		</div>
	);

};


export default Popup;