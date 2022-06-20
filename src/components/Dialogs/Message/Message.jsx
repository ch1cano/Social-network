import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    <div>
        <textarea>send message</textarea>
    </div>

    return (

        <div className={s.dialog}>{props.message}</div>
    )
}


export default Message;