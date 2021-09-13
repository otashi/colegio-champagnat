import React, { useState } from 'react';
import { useNews } from '../../../hooks/useNews';
import { Boletines } from '../../../pages/News/Boletines';
import {
  INITIAL_NEWS_AMOUNT,
  LOAD_MORE_NEWS_AMOUNT,
  TITULAR_AMOUNT,
} from '../../../utils/config';

const BoletinesContainer = () => {
  const titular = useNews('Titular', TITULAR_AMOUNT);

  const [newsCount, setNewsCount] = useState(INITIAL_NEWS_AMOUNT);
  const news = useNews('Boletines', newsCount);

  const handleClick = () => {
    setNewsCount(newsCount + LOAD_MORE_NEWS_AMOUNT);
  };

  return <Boletines titular={titular} news={news} handleClick={handleClick} />;
};

export { BoletinesContainer };
