import React, { useState, useEffect } from 'react';
import { QuienesSomos } from '../../../pages/About/QuienesSomos';
import { API } from '../../../utils/API';

const QuienesSomosContainer = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch(`${API}/pages?route=quienes-somos`)
      .then((response) => response.json())
      .then((contentArr) => setContent(contentArr));
  });

  return <QuienesSomos content={content} />;
};

export { QuienesSomosContainer };
