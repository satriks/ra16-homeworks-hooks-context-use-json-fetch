import { useEffect, useState } from "react";


export const useJsonFetch = (url: string) => {
    const [data, setData] = useState<string>();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (response.status !== 200) {
                    setError(response.statusText);
                }
                const newData = await response.json();
                setData(newData.status);
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return [data, loading, error];
};