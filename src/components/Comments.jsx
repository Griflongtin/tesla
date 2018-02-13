import React from 'react';
import PostComment from './PostComment';

class Comments extends React.Component {

  constructor(props){
    super(props);
    this.text = null;
    this.postComment = this.postComment.bind(this);
    this.state = {
      isClicked: false,
      postArray: []
    };
  }

  postComment(event) {
    event.preventDefault();
    const post = this.text.value;
    const postArrayCopy = this.state.postArray.slice();
    postArrayCopy.unshift(post);
    this.setState({ postArray: postArrayCopy});
    this.text.value = '';
  }
  render() {
    return(
      <div>
        <style jsx>{`
            h3 {
              font-size: 2rem;
              text-align: center;
            }

            form {
              width: 600px;
              margin: auto;
            }

            textarea {
              display: block;
              width: 100%;
              padding: .775rem 1rem;
              line-height: 1.5;
              font-size: 1rem;
              margin-top: 1rem;
            }
            .post-comment {
              padding: .75rem 1.5rem;
              text-align: center;

            }
        `}</style>
        <h3>Leave your comments</h3>
        <form onSubmit={this.postComment}>
          <textarea ref={(textarea) => {this.text = textarea;}}/>
          <button type="submit" className="post-comment">Post</button>
        </form>
        <div className="output">
          {this.state.postArray.map((post, i) =>
            <PostComment post={post}
              key={i}/>
          )}
        </div>
      </div>
    );
  }
}

export default Comments;
