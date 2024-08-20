import React from 'react';

const LoginButton = () => {
    return (
        <button style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>
            Login
        </button>
    );
};

const LogoutButton = () => {
    return (
        <button style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>
            Logout
        </button>
    );
};

export { LoginButton, LogoutButton };