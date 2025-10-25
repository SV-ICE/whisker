import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { memo } from "react";

const MyPosts = memo((props) => {
    let postElements = props.posts.map((post) => {
        return <Post key={post.id} message={post.message} likes={post.likes} />;
    });

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    
    return (
        <div className={s.container}>
            <h3 className={s.title}>My posts</h3>
            <div className={s.form}>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
});

/* class MyPosts extends Component {
    onAddPost = (values) => {
        this.props.addPost(values.newPostText);
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state;
    }

    render() {
        const postElements = this.props.posts.map((post) => {
            return <Post key={post.id} message={post.message} likes={post.likes} />;
        });
        
        return (
            <div className={s.container}>
                <h3 className={s.title}>My posts</h3>
                <div className={s.form}>
                    <AddNewPostFormRedux onSubmit={this.onAddPost}/>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        );
    }
} */

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="newPostText"
                placeholder="Enter your post"
                validate={[required, maxLength10]}
            />
                <button>Add post</button>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;