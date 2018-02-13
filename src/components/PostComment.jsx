import React from 'react';
import PropTypes from 'prop-types';

function PostComment(props) {

  return(
    <div>
      <h2>{props.post}</h2>
    </div>
  );
}

PostComment.propTypes = {
  post: PropTypes.string.isRequired
};




export default PostComment;
