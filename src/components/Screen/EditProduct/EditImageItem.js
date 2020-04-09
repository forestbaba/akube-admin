import React from 'react'
import { EditSvg, EyeSvg } from '../../icons/styledsvg';
import Popover from '../reusable/popover'

const EditImageItem = ({ imageUrl, viewImage, editImage, confirmDelete }) => {
    return (
        <div className="container">
            <img src={imageUrl} alt="Snow" />
            <div className="btn">
                <EyeSvg className='eye' onClick={viewImage} />
                <EditSvg className='edit' onClick={editImage} />
                {/* <Popover handleConfirm={confirmDelete} /> */}
            </div>
        </div>
    )
}

export default EditImageItem
