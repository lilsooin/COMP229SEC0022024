import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Filename: Layout.jsx
 * Student’s Name: Suin Lee 
 * StudentID: 301369995
 * Date: 2024-09-24
 */
export default function Layout() {
    return (
        <>
        <header>
            <div className="logo">
                {/* Replace this with your logo */}
                <img src="../src/logo.png" alt="My Portfolio Logo" />
            </div>

            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/education">Services</Link> | 
                <Link to="/project">Projects</Link> | 
                <Link to="/contact">Contact</Link>
            </nav>
            <h2>My Portfolio</h2>
           
        </header>
        <br />
        <hr />
    </>
    );
}
