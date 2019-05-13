import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import PropTypes from 'prop-types';
import React from 'react';
import ItemList from '../components/ItemList';
import Layout from '../components/Layout';

const propTypes = {
  items: PropTypes.array,
  page: PropTypes.number,
};

const defaultProps = {
  items: [],
  page: '',
};

const Index = ({ items, page }) => {
  if (items.length === 0) return <Error statusCode={503} />;
  return (
    <Layout title="Hacker News" description="A Hacker News clone made with Next.js">
      <ItemList items={items} page={page} />
    </Layout>
  );
};

Index.getInitialProps = async ({ query }) => {
  let items = [];
  let page;
  try {
    page = Number(query.p) || 1;
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
    items = await res.json();
  } catch (err) {
    console.error(err);
  }
  return { items, page };
};

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;
