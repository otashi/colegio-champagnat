import React from 'react';
import { Home } from '../../pages/Home';
import { usePartners } from '../../hooks/usePartners';
import { useNews } from '../../hooks/useNews';
import { TITULAR_AMOUNT, LAST_NEWS_AMOUNT } from '../../utils/config';

const HomeContainer = () => {
  const titular = useNews('Titular', TITULAR_AMOUNT);
  const lastNews = useNews('', LAST_NEWS_AMOUNT);

  const sponsors = usePartners('sponsors');
  const allies = usePartners('allies');
  const networks = usePartners('networks');

  return (
    <Home
      titular={titular}
      news={lastNews}
      sponsors={sponsors}
      allies={allies}
      networks={networks}
    />
  );
};

export { HomeContainer };
