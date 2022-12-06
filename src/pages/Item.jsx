import React from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../data/itemData';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function Item() {
  const { id } = useParams();
  const [cake] = itemsData.filter((item) => item.id === parseInt(id, 10));

  const meta = setMetaData({
    title: cake.name,
    url: `/item/${cake.id}`,
  });

  return (
    <>
      <AppLayout meta={meta}>
        <h1>{cake.name}</h1>
        <p>{cake.category}</p>
        <p>{cake.tags}</p>
        <p>{cake.price}</p>
        <p>{cake.score}</p>
      </AppLayout>
    </>
  );
}
