import React, { useState } from 'react'
import Card from '../../right/itemcard/card'
import './addnew.scss';
import Form from '../../Forms/textform'
import FormArea from '../../Forms/textareaform'
import Sizeselector from '../../Forms/sizeselector'
import Imagepicker from '../../Forms/imagepicker'


const Addnew = () => {

    const [items, setItems] = useState([{ name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }, { name: 'paul' }])

    return (
        <div className='addnewparent'>
            {/* <p>Add</p> */}
            <Form title={'Name'} placeholder={"jeggins"} />
            <Form title={'Price'} placeholder={"price"} />
            <div>
                <FormArea title={'Description'} placeholder={'Des'} />
            </div>
            <Sizeselector title={"Size"} />
            <Imagepicker/>

        </div>
    )
}
export default Addnew;