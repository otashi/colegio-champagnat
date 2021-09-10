import React, { useState, useEffect } from 'react';
import { API } from '../../utils/API';
import { Home } from '../../pages/Home';
import { usePartners } from '../../hooks/usePartners';

const HomeContainer = () => {
  const [titular, setTitular] = useState([]);
  useEffect(() => {
    fetch(
      `${API}/articles?_sort=created_at:DESC&category.category=Titular&_limit=1`
    )
      .then((response) => response.json())
      .then((titularArr) => setTitular(titularArr));
  }, []);

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`${API}/articles?_sort=created_at:DESC&_limit=5`)
      .then((response) => response.json())
      .then((articlesArr) => setNews(articlesArr));
  }, []);

  const sponsors = usePartners('sponsors');
  const allies = usePartners('allies');
  const networks = usePartners('networks');

  return (
    <Home
      titular={titular}
      news={news}
      sponsors={sponsors}
      allies={allies}
      networks={networks}
    />
  );
};

export { HomeContainer };
