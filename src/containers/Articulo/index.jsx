import React from 'react';
import { useArticle } from '../../hooks/useArticle';
import { Articulo } from '../../pages/Articulo';

const ArticuloContainer = ({ location }) => {
  const path = location.pathname.split('/');
  const id = path.pop();
  const content = useArticle(id);
  
  return <Articulo content={content} />;
};

export { ArticuloContainer };
