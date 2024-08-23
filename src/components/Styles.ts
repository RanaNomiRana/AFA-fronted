import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
    appContainer: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
        minHeight: '100vh',
        color: '#fff'
    },
    navbar: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '10px',
        color: 'white',
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '20px'
    },
    title: {
        margin: 0
    },
    mainContent: {
        padding: '20px'
    },
    container: {
        background: 'linear-gradient(to right, #fbc2eb, #a6c0fe)',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        padding: '20px',
        marginBottom: '20px',
        color: '#333'
    },
    subtitle: {
        marginBottom: '10px'
    },
    button: {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px 2px',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'background-color 0.3s',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    },
    buttonHover: {
        backgroundColor: '#45a049'
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        marginRight: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        width: 'calc(100% - 130px)'
    },
    pre: {
        background: '#eee',
        padding: '10px',
        borderRadius: '4px',
        overflowX: 'auto',
        color: '#333'
    }
};

export default styles;
