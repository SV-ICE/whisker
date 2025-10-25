import { Field, reduxForm } from "redux-form";
import {Textarea} from "./../../common/FormsControls/FormsControls"
import { required, maxLengthCreator } from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
				validate={[required, maxLength50]}
                name="newMessageBody"
                placeholder="Enter your message"
            />
            <button>Send</button>
        </form>
    );
};

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)