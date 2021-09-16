import { useState, useEffect } from 'react';

const useLoading = (resource) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (resource.length >= 1) {
      setLoading(false);
    }
  }, [resource]);

  return loading;
};

export { useLoading };
