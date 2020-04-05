import React from 'react';
import logo from '../images/logo.jpg';
import './Dashboard.css';
import { Link } from "react-router-dom";

export default function Dashboard() {
    const name = 'Lionheart Academies Trust';
    return (
        <div className='dashboard'>
            <header>
                <img src={logo} alt='logo' />
                <span>HOME</span>
                <span>OUR SCHOOL</span>
                <span>ABOUT</span>
                <span>OPPORTUNITIES</span>
                <span>CONTACT</span>
            </header>
            <div className='name'>
                <h1>{name.toUpperCase()}</h1>
                <Link to='/home'>
                    <h2>Click here to see all projects</h2>
                </Link>
            </div>

        </div>

    )
}