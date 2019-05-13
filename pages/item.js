import Error from 'next/error';
import PropTypes from 'prop-types';
import React from 'react';
import ItemDetail from '../components/ItemDetail';
import Layout from '../components/Layout';

const propTypes = {
  data: PropTypes.object,
};

const defaultProps = {
  data: {},
};

const Item = ({ data }) => {
  if (!data) return <Error statusCode={503} />;

  return (
    <Layout title={data.title}>
      <ItemDetail data={data} />
    </Layout>
  );
};

Item.getInitialProps = async ({ query }) => {
  let data = [];
  try {
    const itemId = query.id;
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${itemId}`);
    data = await res.json();
  } catch (err) {
    console.error(err);
  }
  return { data };
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
