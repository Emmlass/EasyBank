// import React from 'react';
// import { Button as AntButton } from 'antd';
// import styles from './button.module.css';

// export const MyButton: React.FC = () => {
//     return (
//         <AntButton className={styles.mybutton}>Request Invite</AntButton>
//     );
// };

// export default MyButton;

import React from 'react';
import {Button} from "@nextui-org/button";
export const MyButton = () => {
    return (
         <Button radius="full" className="w-32 h-8 bg-primary-limegreen text-neutral-white font-publicsans text-[11.2px] font-bold px-8 py-4">
          Request Invite
        </Button>  
    );
  }

