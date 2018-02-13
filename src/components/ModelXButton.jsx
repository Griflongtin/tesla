import React from 'react';

import Comments from './Comments';
import FaBeer from 'react-icons/lib/md/thumb-up';


let likes = 0;

class ModelXButton extends React.Component {

  constructor(props){
    super(props);
    this.handleLikes = this.handleLikes.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleLikes(){
    likes++;
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <div>
        <style jsx>{`
            .lazy {
              background-color: rgba(107, 107, 107, .24);
              width: 130px;
              height: 40px;
              margin: 10px;
              text-align: center;
              font-size: 1rem;
              font-weight: bold;
              border: none;
            }
            .liked {
              color: blue;
            }
            .button-wrapper {
              display: flex;
            }
        `}</style>
        <div className="button-wrapper">{(likes === 0)? '' : likes}</div>
        <div className="button-wrapper">
          <button onClick={this.handleLikes} className={(this.state.isClicked)? 'lazy liked' : 'lazy'}><FaBeer /></button>
          <button className="lazy">CUSTOM ORDERS</button>
          <button className="lazy">STAY UPDATED</button>
        </div>
        <Comments />
      </div>
    );
  }
}

export default ModelXButton;
