import React from 'react';
import { Helmet } from 'react-helmet';
import image from '../images/metaImg.jpg'


const Seo = () => {


  const title = 'Tobias Saravia'
  const description = 'Jr. Software Engineer'
  const url = 'https://www.google.com/';

  return (
    <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com"/> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Roboto+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
    
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:url" content={url}/>
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
