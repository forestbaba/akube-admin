import React from 'react';
import 'antd/dist/antd.css';
import { Spin, Icon } from 'antd';

const Spinner =() =>{
   const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
return(
    <Spin indicator={antIcon} />
);
               
}
export default Spinner;

