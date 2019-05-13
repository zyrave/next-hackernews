/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  comment: PropTypes.object,
};

const defaultProps = {
  comment: {},
};

const Comment = ({ comment }) => (
  <React.Fragment>
    <tr className="athing comtr" id={`${comment.id}`}>
      <td>
        <table border="0">
          <tbody>
            <tr>
              <td className="ind">
                <img src="https://news.ycombinator.com/s.gif" height="1" width="0" alt="" />
              </td>
              <td valign="top" className="votelinks">
                <center>
                  <a id={`up_${comment.id}`} href={`vote?id=${comment.id}&how=up&goto=item%3Fid%3D19786102`}>
                    <div className="votearrow" title="upvote" />
                  </a>
                </center>
              </td>
              <td className="default">
                <div style={{ marginTop: '2px', marginBottom: '-10px' }}>
                  <span className="comhead">
                    <a href={`user?id=${comment.user}`} className="hnuser">
                      {comment.user}{' '}
                    </a>
                    <span className="age">
                      <a href={`item?id=${comment.id}`}>{comment.time_ago}</a>
                    </span>
                    <span id={`unv_${comment.id}`} />
                    <span className="par" />
                    <a className="togg" n="6" href="/" onClick={() => null}>
                      [-]
                    </a>
                    <span className="storyon" />
                  </span>
                </div>
                <br />
                <div className="comment">
                  <span className="commtext c00">
                    <div dangerouslySetInnerHTML={{ __html: comment.content }} />
                    <div className="reply">
                      {' '}
                      <p>
                        <font size="1">
                          <u>
                            <a href={`reply?id=${comment.id}&amp;goto=item%3Fid%3D19786102%2319786206`}>reply</a>
                          </u>
                        </font>
                      </p>
                    </div>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    {/* {comment.comments &&
      comment.comments.map(nestedComment => <Comment key={nestedComment.id} comment={nestedComment} />)} */}
    <style jsx>{`
      body {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 10pt;
        color: #828282;
      }
      td {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 10pt;
        color: #828282;
      }
      .admin td {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 8.5pt;
        color: #000000;
      }
      .subtext td {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 7pt;
        color: #828282;
      }
      input {
        font-family: monospace;
        font-size: 10pt;
      }
      textarea {
        font-family: monospace;
        font-size: 10pt;
      }
      a:link {
        color: #000000;
        text-decoration: none;
      }
      a:visited {
        color: #828282;
        text-decoration: none;
      }
      .default {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 10pt;
        color: #828282;
      }
      .admin {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 8.5pt;
        color: #000000;
      }
      .title {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 10pt;
        color: #828282;
      }
      .subtext {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 7pt;
        color: #828282;
      }
      .pagetop {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 10pt;
        color: #222222;
      }
      .comhead {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 8pt;
        color: #828282;
      }
      .comment {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 9pt;
      }
      .hnname {
        margin-right: 5px;
      }
      .comment a:link,
      .comment a:visited {
        text-decoration: underline;
      }
      .noshow {
        display: none;
      }
      .nosee {
        visibility: hidden;
        pointer-events: none;
        cursor: default;
      }
      .c00,
      .c00 a:link {
        color: #000000;
      }
      .c5a,
      .c5a a:link,
      .c5a a:visited {
        color: #5a5a5a;
      }
      .c73,
      .c73 a:link,
      .c73 a:visited {
        color: #737373;
      }
      .c82,
      .c82 a:link,
      .c82 a:visited {
        color: #828282;
      }
      .c88,
      .c88 a:link,
      .c88 a:visited {
        color: #888888;
      }
      .c9c,
      .c9c a:link,
      .c9c a:visited {
        color: #9c9c9c;
      }
      .cae,
      .cae a:link,
      .cae a:visited {
        color: #aeaeae;
      }
      .cbe,
      .cbe a:link,
      .cbe a:visited {
        color: #bebebe;
      }
      .cce,
      .cce a:link,
      .cce a:visited {
        color: #cecece;
      }
      .cdd,
      .cdd a:link,
      .cdd a:visited {
        color: #dddddd;
      }
      .pagetop a:visited {
        color: #000000;
      }
      .topsel a:link,
      .topsel a:visited {
        color: #ffffff;
      }
      .subtext a:link,
      .subtext a:visited {
        color: #828282;
      }
      .subtext a:hover {
        text-decoration: underline;
      }
      .comhead a:link,
      .subtext a:visited {
        color: #828282;
      }
      .comhead a:hover {
        text-decoration: underline;
      }
      .hnmore a:link,
      a:visited {
        color: #828282;
      }
      .hnmore {
        text-decoration: underline;
      }
      .default p {
        margin-top: 8px;
        margin-bottom: 0px;
      }
      .pagebreak {
        page-break-before: always;
      }
      pre {
        overflow: auto;
        padding: 2px;
      }
      pre:hover {
        overflow: auto;
      }
      .votelinks.nosee div.votearrow.rotate180 {
        display: none;
      }
      .votearrow {
        width: 10px;
        height: 10px;
        border: 0px;
        margin: 3px 2px 6px;
        background: url('/static/images/grayarrow.gif') no-repeat;
      }
    `}</style>
  </React.Fragment>
);

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
