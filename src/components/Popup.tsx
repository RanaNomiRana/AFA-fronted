import React from 'react';
import './Popup.css'; // Import the CSS file for styling

interface PopupProps {
    data: any;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ data, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close-button" onClick={onClose}>Close</button>
                <h3>SMS</h3>
                <pre>{JSON.stringify(data.sms, null, 2)}</pre>
                <h3>Call Log</h3>
                <pre>{JSON.stringify(data.callLog, null, 2)}</pre>
                <h3>Contacts</h3>
                <pre>{JSON.stringify(data.contacts, null, 2)}</pre>
            </div>
        </div>
    );
}

export default Popup;
