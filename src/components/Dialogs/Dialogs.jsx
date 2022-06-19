import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {props.state.dialogs.map(({ name, id }) => (
                    <DialogItem key={id} name={name} id={id} />))}
            </div>
            <div className={s.messages}>
                {props.state.messages.map(({ message }) => (
                    <Message message={message} />))}
            </div>
        </div >
    )
}

export default Dialogs;