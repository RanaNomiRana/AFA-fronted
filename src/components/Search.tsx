import React, { useState } from 'react';
import '../App.css'; // Import CSS file

const Search: React.FC = () => {
    const [keyword, setKeyword] = useState<string>('');
    const [results, setResults] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/search?keyword=${encodeURIComponent(keyword)}`);
            const result = await response.json();
            setResults(result);
        } catch (error) {
            console.error('Error searching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2 className="subtitle">Search Data</h2>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword"
                className="input"
            />
            <button onClick={handleSearch} className="button">Search</button>
            {loading && <p>Loading...</p>}
            {results && (
                <div>
                    <h3>SMS Results</h3>
                    <pre>{JSON.stringify(results.sms, null, 2)}</pre>
                    <h3>Call Log Results</h3>
                    <pre>{JSON.stringify(results.callLog, null, 2)}</pre>
                    <h3>Contacts Results</h3>
                    <pre>{JSON.stringify(results.contacts, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Search;
