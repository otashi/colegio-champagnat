import { useState, useEffect } from 'react';
import { API } from '../utils/API';

const useNews = (type, limit) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      `${API}/articles?_sort=created_at:DESC&${
        type ? `category.category=${type}` : ''
      }&_limit=${limit}`
    )
      .then((response) => response.json())
      .then((newsArr) => setNews(newsArr));
  }, [type, limit]);

  return news;
};

export { useNews };
