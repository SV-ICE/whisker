import preloader from "../../../assets/images/preloader.svg";
import s from "./Preloader.module.css";

let Preloader = (props) => {
    return (
        <div className={s.container}>
            <img src={preloader} alt="" />
        </div>
    );
};

export default Preloader;
