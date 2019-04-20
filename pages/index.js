import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';

const propTypes = {
  stories: PropTypes.array,
  page: PropTypes.number,
};

const defaultProps = {
  stories: [],
  page: '',
};

const Index = ({ stories, page }) => {
  // const [itemNo, setItemNo] = useState(1);
  if (stories.length === 0) {
    return <Error statusCode={503} />;
  }
  return (
    <Layout title="Hacker News" description="A Hacker News clone made with Next.js">
      <StoryList stories={stories} page={page} />
    </Layout>
  );
};

Index.getInitialProps = async ({ query }) => {
  let stories = [];
  let page;
  try {
    page = Number(query.p) || 1;
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
    stories = await res.json();
  } catch (err) {
    console.log(err);
  }
  return { stories, page };
};

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;
