import { useState, useEffect } from 'react';
import { API } from '../utils/API';

const useArticle = (id) => {
  const [article, setArticle] = useState({});
  useEffect(() => {
    fetch(`${API}/articles/${id}`)
      .then((response) => response.json())
      .then((articleArr) => setArticle(articleArr));
  }, [id]);

  return article;
};

export { useArticle };
