import React from 'react';
import Post from "./Post/Post";
import * as axios from 'axios'

class Posts extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get("https://react-ba8c2.firebaseio.com/.json").then(response => {
            this.props.setPosts(response.data.items);
            console.log(this.props)
        });
    }

    render() {
        return (
            <div>

                {
                    this.props.posts.map(post =>
                        <div key={post.id}>
                            <Post title={post.name}/>
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