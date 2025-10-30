import { useState, useEffect, useCallback } from 'react';
import { api } from '@/api/api'; 

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [refreshIndex, setRefreshIndex] = useState(0); 

  const refetch = useCallback(() => {
    setRefreshIndex(prev => prev + 1);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get<T>(url);
        setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, refreshIndex]);

  return { data, loading, error, refetch }; 
}