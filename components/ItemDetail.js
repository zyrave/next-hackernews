import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import CommentList from './CommentList';

const propTypes = {
  data: PropTypes.object,
};

const defaultProps = {
  data: {},
};

const ItemDetail = ({ data }) => (
  <table border="0">
    <tbody>
      <tr id={data.id}>
        <td align="right" valign="top" className="title">
          <span className="rank" />
        </td>{' '}
        <td valign="top" className="votelinks">
          <center>
            <a id={`up_${data.id}`} href={`vote?id=${data.id}&amp;how=up&amp;goto=item%3Fid%3D${data.id}`}>
              <div className="votearrow" title="upvote" />
            </a>
          </center>
        </td>
        <td className="title">
          <Link href="">
            <a className="storylink">{data.title}</a>
          </Link>
          <span className="sitebit comhead">
            {' '}
            (
            <a href={`from?site=${data.domain}`}>
              <span className="sitestr">{data.domain}</span>
            </a>
            )
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan="2" />
        <td className="subtext">
          <span className="score" id={`score_${data.id}`}>
            {data.points} points
          </span>{' '}
          by{' '}
          <a href="user?id=jbuzbee" className="hnuser">
            {data.user}
          </a>{' '}
          <span className="age">
            <a href={`item?id=${data.id}`}>{data.time_ago}</a>
          </span>{' '}
          <span id={`unv_${data.id}`} /> | <a href={`hide?id=${data.id}&amp;goto=item%3Fid%3D${data.id}`}>hide</a> |{' '}
          <a
            href="https://hn.algolia.com/?query=&amp;sort=byDate&amp;dateRange=all&amp;type=story&amp;storyText=false&amp;prefix&amp;page=0"
            className="hnpast"
          >
            past
          </a>{' '}
          | <a href="https://www.google.com/search?q=">web</a> | <a href={`fave?id=${data.id}&amp;auth=`}>favorite</a> |{' '}
          <a href={`item?id=${data.id}`}>{data.comments_count}&nbsp;comments</a>{' '}
        </td>
      </tr>
      <tr style={{ height: '10px' }} />
      <tr>
        <td colSpan="2" />
        <td>
          <form method="post" action="comment">
            <input type="hidden" name="parent" value={`${data.id}`} />
            <input type="hidden" name="goto" value={`item?id=${data.id}`} />
            <input type="hidden" name="hmac" value="" />
            <textarea name="text" rows="6" cols="60" />
            <br />
            <br />
            <input type="submit" value="add comment" />
            {data.comments.length > 0 ? (
              <CommentList comments={data.comments} />
            ) : (
              <div>No comments for this story</div>
            )}
          </form>
        </td>
      </tr>
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
    </tbody>
  </table>
);

ItemDetail.propTypes = propTypes;
ItemDetail.defaultProps = defaultProps;

export default ItemDetail;
