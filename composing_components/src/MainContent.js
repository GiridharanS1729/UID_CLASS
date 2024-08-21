import React from 'react';
import './MainContent.css';

function MainContent() {
    const display = ['Display 1', 'Display 2', 'Display 3'];
    return (
        <main className="main-content">
            <h2>Welcome to my website!</h2>
            <p>This is the main content area.</p>
            {display.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </main>
    );
}

export default MainContent;
