import { useCallback, useEffect, useState } from "react";

export type Coffee = {
  title: string;
  description: string;
  ingredients?: string[] | null;
  image: string;
  id: number;
};

// export type Coffee = {
//   _id: string;
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   region: string;
//   weight: number;
//   flavor_profile?: string[] | null;
//   grind_option?: string[] | null;
//   roast_level: number;
//   image_url: string;
// };

export default function useFetch(url: string) {
  const [data, setData] = useState<Coffee[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error while fetching data");
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, fetchData };
}
