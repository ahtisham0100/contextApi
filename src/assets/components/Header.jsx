import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( <>
        <nav>
            <ul>
                <li><Link to="/homepage">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav> 
           <div>
           <h1>Welcome to My Website</h1>
           <p>This is a random paragraph with no links.</p>
           <p>Here is some more content for the website.</p>
           <p>Another paragraph with additional information.</p>
       </div>
       </>     
    );
}

export { Navbar };