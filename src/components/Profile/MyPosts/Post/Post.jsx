import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.post}>
			<div className={s.body}>
				<img className={s.avatar} src="https://i.pinimg.com/736x/1d/b0/55/1db055985e83dc158acb6f49fb1162c5.jpg" alt="" />
				<p className={s.message}>
					{props.message}
				</p>
			</div>
			<div className={s.footer}>
				<span className={s.like}>{props.likes}👍</span>
			</div>
		</div>
	)
}

export default Post;