import React, { useState } from 'react';
import { useNews } from '../../../hooks/useNews';
import { Noticias } from '../../../pages/News/Noticias';
import {
  INITIAL_NEWS_AMOUNT,
  LOAD_MORE_NEWS_AMOUNT,
  TITULAR_AMOUNT,
} from '../../../utils/config';

const NoticiasContainer = () => {
  const titular = useNews('Titular', TITULAR_AMOUNT);

  const [newsCount, setNewsCount] = useState(INITIAL_NEWS_AMOUNT);
  const news = useNews('', newsCount);

  const handleClick = () => {
    setNewsCount(newsCount + LOAD_MORE_NEWS_AMOUNT);
  };

  return <Noticias titular={titular} news={news} handleClick={handleClick} />;
};

export { NoticiasContainer };
