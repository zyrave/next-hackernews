import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const propTypes = {
  stories: PropTypes.array,
};

const defaultProps = {
  stories: [],
};

const StoryList = ({ stories }) => (
  <table border="0" cellPadding="0" cellSpacing="0" className="itemlist">
    <tbody>
      {stories.map((story, id) => (
        <Fragment key={story.id}>
          <tr className="athing">
            <td align="right" valign="top" className="title">
              <span className="rank">{id + 1}.</span>
            </td>
            <td className="votelinks">
              <center>
                <a>
                  <div className="votearrow" title="upvote" />
                </a>
              </center>
            </td>
            <td className="title">
              <a href={story.url} className="storylink">
                {story.title}
              </a>
              <span className="sitebit comhead">
                {' '}
                (
                <a href={`from?site=${story.domain}`}>
                  <span>{story.domain}</span>
                </a>
                )
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2" />
            <td className="subtext">
              <span className="score">{story.points || 0} points</span> by{' '}
              <a href={`user?id=${story.user}`} className="hnuser">
                {story.user}
              </a>
              <span className="age">
                <a href={`item?id=${story.id}`}> {story.time_ago}</a>
              </span>
              <span /> | <a href={`hide?id=${story.id}&goto=news`}>hide</a> |{' '}
              <a href={`/story?id=${story.id}`}>{story.comments_count || 0} comments</a>
            </td>
          </tr>
          <tr className="spacer" style={{ height: '5px' }} />
        </Fragment>
      ))}
      <tr className="spacer" style={{ height: '5px' }} />
      <tr className="morespace" style={{ height: '10px' }} />
      <tr>
        <td colSpan="2" />
        <td className="title">
          <a href="news?p=2" className="morelink" rel="next">
            More
          </a>
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

StoryList.propTypes = propTypes;
StoryList.defaultProps = defaultProps;

export default StoryList;
