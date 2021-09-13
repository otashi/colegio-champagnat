import React, { useState } from 'react';
import { useNews } from '../../../hooks/useNews';
import { Circulares } from '../../../pages/Parents/Circulares';
import {
  INITIAL_NEWS_AMOUNT,
  LOAD_MORE_NEWS_AMOUNT,
  TITULAR_AMOUNT,
} from '../../../utils/config';

const CircularesContainer = () => {
  const titular = useNews('Titular', TITULAR_AMOUNT);

  const [newsCount, setNewsCount] = useState(INITIAL_NEWS_AMOUNT);
  const news = useNews('Circulares', newsCount);

  const handleClick = () => {
    setNewsCount(newsCount + LOAD_MORE_NEWS_AMOUNT);
  };

  return <Circulares titular={titular} news={news} handleClick={handleClick} />;
};

export { CircularesContainer };
