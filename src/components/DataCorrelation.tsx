import React, { useState } from 'react';
import '../App.css'; // Import CSS file

const DataCorrelation: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchDataCorrelation = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/data-correlation');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data correlation:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2 className="subtitle">Data Correlation</h2>
            <button onClick={fetchDataCorrelation} className="button">Fetch Correlation</button>
            {loading && <p>Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default DataCorrelation;
