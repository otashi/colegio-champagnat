import React, { useState } from 'react';
import { useNews } from '../../../hooks/useNews';
import { CuartoPiso } from '../../../pages/News/CuartoPiso';
import {
  INITIAL_NEWS_AMOUNT,
  LOAD_MORE_NEWS_AMOUNT,
  TITULAR_AMOUNT,
} from '../../../utils/config';

const CuartoPisoContainer = () => {
  const titular = useNews('Titular', TITULAR_AMOUNT);

  const [newsCount, setNewsCount] = useState(INITIAL_NEWS_AMOUNT);
  const news = useNews('Desde el cuarto piso', newsCount);

  const handleClick = () => {
    setNewsCount(newsCount + LOAD_MORE_NEWS_AMOUNT);
  };

  return <CuartoPiso titular={titular} news={news} handleClick={handleClick} />;
};

export { CuartoPisoContainer };
