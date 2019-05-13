import PropTypes from 'prop-types';
import React from 'react';
import Comment from './Comment';

const propTypes = {
  comments: PropTypes.array,
};

const defaultProps = {
  comments: [],
};

const CommentList = ({ comments }) => (
  <table border="0" className="comment-tree">
    <tbody>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </tbody>
  </table>
);

CommentList.propTypes = propTypes;
CommentList.defaultProps = defaultProps;

export default CommentList;
