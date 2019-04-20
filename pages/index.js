import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';

const propTypes = {
  stories: PropTypes.array,
};

const defaultProps = {
  stories: [],
};

const Index = ({ stories }) => {
  if (stories.length === 0) {
    return <Error statusCode={503} />;
  }
  return (
    <Layout title="Hacker News" description="A Hacker News clone made with Next.js">
      <StoryList stories={stories} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  let stories = [];
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=1`);
    stories = await res.json();
  } catch (err) {
    console.log(err);
  }
  return { stories };
};

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;
