import React from 'react'
import 'antd/dist/antd.css';
import { Popconfirm } from 'antd';
import {DeleteSvg} from '../../../icons/styledsvg';

const Popover =({handleConfirm})=>{

// function confirm(e) {
//   console.log(e);
//   message.success('Click on Yes');
// }

function cancel(e) {
  console.log(e);
 // message.error('Click on No');
}

return(
    <>
  <Popconfirm
    title="Are you sure delete this task?"
    onConfirm={handleConfirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No">
  
  <a href='#'><DeleteSvg/></a>
    {/* <a href="#">Delete</a> */}
  </Popconfirm>
    </>
);
}
export default Popover