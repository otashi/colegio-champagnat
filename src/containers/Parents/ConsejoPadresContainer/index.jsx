import React, { useState } from 'react';
import { useNews } from '../../../hooks/useNews';
import { useContent } from '../../../hooks/useContent';
import {
  INITIAL_NEWS_AMOUNT,
  LOAD_MORE_NEWS_AMOUNT,
  TITULAR_AMOUNT,
} from '../../../utils/config';
import { ConsejoPadres } from '../../../pages/Parents/ConsejoPadres';

const ConsejoPadresContainer = () => {
  const { content } = useContent('consejo-padres');
  const titular = useNews('Titular', TITULAR_AMOUNT);

  const [newsCount, setNewsCount] = useState(INITIAL_NEWS_AMOUNT);
  const news = useNews('Consejo de padres', newsCount);

  const handleClick = () => {
    setNewsCount(newsCount + LOAD_MORE_NEWS_AMOUNT);
  };

  return (
    <ConsejoPadres
      content={content}
      titular={titular}
      news={news}
      handleClick={handleClick}
    />
  );
};

export { ConsejoPadresContainer };
