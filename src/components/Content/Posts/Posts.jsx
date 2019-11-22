import React from 'react';
import Post from "./Post/Post";

const Posts = (props) => {
    let posts = props.posts.map(post => <Post
        message={post.text}
        likesCount={post.likesCount}
        title={post.title}
    />);

    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let updatePost = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div>
                {posts}
            </div>
            <div>
                <textarea onChange={updatePost} ref={newPost} value={props.newText}/>
            </div>
            <div>
                <button onClick={addPost}>Добавить запись</button>
            </div>
        </div>

    )
};

export default Posts