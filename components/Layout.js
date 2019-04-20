import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

const defaultProps = {
  children: {},
  title: '',
  description: '',
};

const Layout = ({ children, title, description }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/x-icon" href="/static/icon/favicon.ico" />
    </Head>
    <center>
      <table id="hnmain" border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef">
        <tbody>
          <tr>
            <td bgcolor="#ff6600">
              <table className="hnnav" border="0" cellPadding="0" cellSpacing="0" width="100%">
                <tbody>
                  <tr>
                    <td style={{ width: '18px', paddingRight: '4px' }}>
                      <Link href="/">
                        <a>
                          <img
                            src="/static/images/y18.gif"
                            alt="Hacker News"
                            width="18"
                            height="18"
                            className="small-logo"
                          />
                        </a>
                      </Link>
                    </td>
                    <td style={{ lineHeight: '10pt', height: '10px' }}>
                      <span className="pagetop">
                        <b className="hnname">
                          <a>Hacker News</a>
                        </b>
                        <a>new</a> | <a>past</a> | <a>comments</a> | <a>ask</a> | <a>show</a> | <a>jobs</a> |{' '}
                        <a>submit</a>
                      </span>
                    </td>
                    <td style={{ textAlign: 'right', paddingRight: '4px' }}>
                      <span className="pagetop">
                        <a>login</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr id="pagespace" style={{ height: '10px' }} />
          <tr>
            <td>{children}</td>
          </tr>
          <tr>
            <td>
              <img src="" height="10" width="0" alt="" />
              <table width="100%" cellSpacing="0" cellPadding="1">
                <tbody>
                  <tr>
                    <td bgcolor="#ff6600" />
                  </tr>
                </tbody>
              </table>
              <br />
              <center>
                <span className="yclinks">
                  <a href="/newsguidelines">Guidelines</a> | <a href="/newsfaq">FAQ</a> |{' '}
                  <a href="mailto:hn@combinator.com">Support</a> | <a href="https://github.com/HackerNews/API">API</a> |{' '}
                  <a href="/security">Security</a> | <a href="/lists">Lists</a> |{' '}
                  <a href="/bookmarklet" rel="nofollow">
                    Bookmarklet
                  </a>{' '}
                  | <a href="http://www.ycombinator.com/legal">Legal</a> |{' '}
                  <a href="http://www.ycombinator.com/apply">Apply to YC</a> |{' '}
                  <a href="mailto:hn@ycombinator.com">Contact</a>
                </span>
                <br />
                <br />
                <form method="get" action="//hn.algolia.com/">
                  Search:{' '}
                  <input
                    type="text"
                    name="q"
                    size="17"
                    autoCorrect="off"
                    spellCheck="false"
                    autoCapitalize="false"
                    autoComplete="false"
                  />
                </form>
              </center>
            </td>
          </tr>
          <tr id="pagespace" style={{ height: '10px' }} />
        </tbody>
      </table>
    </center>
    <style jsx>{`
      a {
        color: #000000;
        text-decoration: none;
        cursor: pointer;
      }
      a:visited {
        color: #828282;
        text-decoration: none;
      }
      strong,
      b {
        font-weight: bold;
      }
      tbody {
        display: table-row-gorup;
        vertical-align: middle;
        border-color: inherit;
      }
      .hnnav {
        padding: 2px;
      }
      .pagetop {
        font-size: 10pt;
        color: #222222;
      }
      .small-logo {
        border: 1px white solid;
      }
      .hnname {
        margin-right: 5px;
      }
      .yclinks {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 8pt;
        color: #828282;
      }
    `}</style>
    <style global jsx>{`
      body {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 10pt;
        color: #828282;
      }
    `}</style>
  </Fragment>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
