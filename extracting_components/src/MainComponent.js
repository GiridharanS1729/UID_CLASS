import React from 'react';
import { LoginButton, LogoutButton } from './Buttons'; // Import the button components

const MainComponent = ({ isLoggedIn }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15vh',
            backgroundColor: '#f0f0f0',
            padding: 20
        }}>

            <h1>Welcome to the App</h1>
            {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        </div>
    );
};

export default MainComponent;