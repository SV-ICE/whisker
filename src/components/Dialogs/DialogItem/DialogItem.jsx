import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>
                <div className={s.dialogInner}>
                    <img className={s.avatar} src={props.avatar} alt="" />
                    <p className={s.name}>{props.name}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;