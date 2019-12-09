import React from 'react';
import Post from "./Post/Post";
import {axios} from "../../../core";

class Posts extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get("/posts").then(response => {
            this.props.setPosts(response.data);
            console.log(this.props)
        });
    }

    render() {
        return (
            <div>

                {
                    this.props.posts.map(post =>
                        <div key={post.id}>
                            <Post title={post.title}/>
                        </div>
                    )
                }
                <div>
                    <button onClick={this.props.addPost}>Добавить запись</button>
                </div>
            </div>

        )
    };
}

export default Posts