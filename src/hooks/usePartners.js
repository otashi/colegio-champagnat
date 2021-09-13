import { useState, useEffect } from 'react';
import { API } from '../utils/API';

const usePartners = (type) => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch(`${API}/${type}`)
      .then((response) => response.json())
      .then((partnersArr) => setPartners(partnersArr));
  }, [type]);

  return partners;
};

export { usePartners };
