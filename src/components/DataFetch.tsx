import React, { useState } from 'react';
import axios from 'axios';
import Popup from '../components/Popup'; // Import the Popup component

const DataFetch: React.FC = () => {
    const [data, setData] = useState<any>(null);
    console.log(data)
    const [loading, setLoading] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/all-data');
            setData(response.data);
            setShowPopup(true); // Show the popup when data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="data-fetch-container">
            <h2 className="data-fetch-subtitle">Fetch and Display Data</h2>
            <button onClick={fetchData} className="data-fetch-button">Fetch Data</button>
            {loading && <p>Loading...</p>}
            {showPopup && data && (
                <Popup data={data} onClose={() => setShowPopup(false)} />
            )}
        </div>
    );
}

export default DataFetch;
