import React, { useState } from 'react';
import { useNews } from '../../../hooks/useNews';
import { Noticias } from '../../../pages/News/Noticias';
import {
  INITIAL_NEWS_AMOUNT,
  LOAD_MORE_NEWS_AMOUNT,
} from '../../../utils/config';

const NoticiasContainer = () => {
  const [newsCount, setNewsCount] = useState(INITIAL_NEWS_AMOUNT);
  const news = useNews('', newsCount);

  const handleClick = () => {
    setNewsCount(newsCount + LOAD_MORE_NEWS_AMOUNT);
  };

  return <Noticias news={news} handleClick={handleClick} />;
};

export { NoticiasContainer };
