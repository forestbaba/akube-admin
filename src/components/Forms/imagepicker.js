import React from 'react'
import 'react-image-picker/dist/index.css'
import './forms.scss'


const Imagepicker = ({ onImageChange, selectedFile, preview}) => {

        // const [selectedFile, setSelectedFile] = useState()
        // const [preview, setPreview] = useState()

        // create a preview as a side effect, whenever selected file is changed
        // useEffect(() => {
        //     if (!selectedFile) {
        //         setPreview(undefined)
        //         return
        //     }

        //     const objectUrl = URL.createObjectURL(selectedFile)
        //     setPreview(objectUrl)

        //     // free memory when ever this component is unmounted
        //     return () => URL.revokeObjectURL(objectUrl)
        // }, [selectedFile])

        // const onSelectFile = e => {
        //     if (!e.target.files || e.target.files.length === 0) {
        //         setSelectedFile(undefined)
        //         return
        //     }

        //     // I've kept this example simple by using the first image instead of multiple
        //     setSelectedFile(e.target.files[0])
        //     console.log('>>>>>>>>>selected file: ', selectedFile)
        // }

        return (
            <div className='imagepicker'>            
            <input type='file' onChange={onImageChange} />
            {selectedFile && <img src={preview} alt='avatar' className="imagepreview" style={{backgroundColor:'red'}}/>}

            </div>
        )
    
}

export default Imagepicker;