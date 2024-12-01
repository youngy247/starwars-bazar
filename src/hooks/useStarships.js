import { STARSHIPS_ENDPOINT } from '@/constants/apiConstants';
import { useEffect, useState } from 'react';

export const useStarships = (currentPage) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [starships, setStarships] = useState([]);
  const [totalStarships, setTotalStarships] = useState(0);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);

  useEffect(() => {
    const fetchStarships = async (url) => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();

        if (res.status === 200) {
          setStarships(data.results);
          setTotalStarships(data.count);
          setNextPageUrl(data.next);
          setPreviousPageUrl(data.previous);
        } else {
          setError('Error obtaining starship data');
        }
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    // Initial API call
    fetchStarships(`${STARSHIPS_ENDPOINT}?page=${currentPage}`);
  }, [currentPage]);

  return {
    loading,
    error,
    starships,
    totalStarships,
    nextPageUrl,
    previousPageUrl,
  };
};
