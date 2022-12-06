import React from 'react';
import { Helmet } from 'react-helmet';
import { siteData } from '../../data/siteData';

export function Meta({ meta }) {
  const { title, url, description, keywords, } = meta;

  const siteURL = `${siteData.url}${url}`;

  return (
    <>
      <Helmet>
        <title>{title} | KALL</title>
        {description && <meta name='description' content={description} />}
        {keywords && <meta name='keywords' content={keywords} />}
        <link rel='canonical' href={siteURL} />
      </Helmet>
    </>
  );
}
