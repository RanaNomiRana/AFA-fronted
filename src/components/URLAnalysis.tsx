import React, { useState } from 'react';
import '../App.css'; // Import CSS file

const URLAnalysis: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchURLAnalysis = async () => {
        setLoading(true);
        try {
            const response = await fetch('/url-analysis');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching URL analysis:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2 className="subtitle">URL Analysis</h2>
            <button onClick={fetchURLAnalysis} className="button">Fetch Analysis</button>
            {loading && <p>Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default URLAnalysis;
