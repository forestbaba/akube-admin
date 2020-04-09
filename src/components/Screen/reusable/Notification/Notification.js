import {  notification } from 'antd';

 const Notifier = ({message, description}) => {
        const args = {
            message: message,
            description:description,            
            duration: 0,
        };
        notification.open(args);
};
export default Notifier;