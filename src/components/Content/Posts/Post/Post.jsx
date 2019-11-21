import React from 'react';

const Post = (props) => {
    return (
        <div>

            <h1>post</h1>
            {props.message}
        </div>
    )
};

export default Post;