import React, { useState } from 'react';
import '../App.css'; // Import CSS file

const TimelineAnalysis: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchTimelineAnalysis = async () => {
        setLoading(true);
        try {
            const response = await fetch('/timeline-analysis');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching timeline analysis:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2 className="subtitle">Timeline Analysis</h2>
            <button onClick={fetchTimelineAnalysis} className="button">Fetch Analysis</button>
            {loading && <p>Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default TimelineAnalysis;
