import React from 'react';
import './post.css';

class Post extends React.Component {

    // componentDidMount () {
    //     this.props.hideItems()
    // }

    render () {
        return (
            <div className="post">
                <div className="post-info">
                <img className="search-img" src={this.props.src} alt="post" />
                <button onClick={this.props.hide}>Back</button>
                </div>
            </div>
        )
    }
}

export default Post;