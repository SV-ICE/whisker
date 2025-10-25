import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogPage;

    let dialogsElements = state.dialogs.map((dialog) => (
        <DialogItem
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar}
        />
    ));
    let messagesElements = state.messages.map((message) => (
        <Message key={message.id} message={message.message} id={message.id} />
    ));

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messagesContainer}>
                <div className={s.messages}>{messagesElements}</div>
                <div className={s.controls}>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
