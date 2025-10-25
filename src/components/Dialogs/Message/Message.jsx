import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.icon}>
                <img src="https://i.ibb.co/JFjPqnkp/message-icon.png" alt="" />
            </div>
            <p className={s.text}>
                {props.message}
            </p>
        </div>
    )
}

export default Message;