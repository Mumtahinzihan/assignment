import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

export default function Home(props) {
    const [complete, setComplete] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () => {
        setComplete(!complete)
    }
    const handleColor = () => {
        setColor(!color)
    }

    return (
        <div className={color ? 'color' : 'title'}>
            <Link to={`/home/${props.id}`}>
                <h4>Project title</h4>
                <h5>{props.title}</h5>
            </Link>
            <label className="container">
                <p>{complete ? 'Completed' : 'Incompleted'}</p>
                <button className='btn'
                    onClick={() => {
                        handleClick()
                        handleColor()
                    }}
                >Mark as
                {complete ? 'Incomplete' : 'Complete'}
                </button>
            </label>
        </div >
    )
}