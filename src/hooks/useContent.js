import { useState, useEffect } from 'react';
import { API } from '../utils/API';

const useContent = (route) => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch(`${API}/pages?route=${route}`)
      .then((response) => response.json())
      .then((contentArr) => setContent(contentArr));
  }, [route]);

  return { content };
};

export { useContent };
