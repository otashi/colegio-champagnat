import React, { useState, useEffect } from 'react';
import { API } from '../../utils/API';
import { Home } from '../../pages/Home';

const HomeContainer = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`${API}/articles?_sort=created_at:DESC&_limit=5`)
      .then((response) => response.json())
      .then((articlesArr) => setNews(articlesArr));
  }, []);

  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    fetch(`${API}/sponsors`)
      .then((response) => response.json())
      .then((sponsorsArr) => setSponsors(sponsorsArr));
  }, []);

  const [allies, setAllies] = useState([]);
  useEffect(() => {
    fetch(`${API}/allies`)
      .then((response) => response.json())
      .then((alliesArr) => setAllies(alliesArr));
  }, []);

  const [networks, setNetworks] = useState([]);
  useEffect(() => {
    fetch(`${API}/networks`)
      .then((response) => response.json())
      .then((networksArr) => setNetworks(networksArr));
  }, []);

  return (
    <Home news={news} sponsors={sponsors} allies={allies} networks={networks} />
  );
};

export { HomeContainer };
