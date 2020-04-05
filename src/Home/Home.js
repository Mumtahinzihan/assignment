import React, { useState } from 'react';

import { Link } from "react-router-dom";
import './Home.css';
// import axios from 'axios'

export default function Home(props) {
    const [complete, setComplete] = useState(false);
    const [color, setColor] = useState('blue');

    // state = {
    //     isComplete: [],
    // }

    // componentDidMount() {
    //     // const end = this.props.match.params.id;
    //     axios.get(`https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/users/d70cbe8d-11ac-e811-80e2-005056a23846/assignments/`)
    //         .then(res => {
    //             this.setState({ isComplete: res.data })
    //             console.log(res.data);
    //         })
    //         .catch(err => console.error('Sorry could not get data', err));
    // }
    // handleChange = (e) => {
    //     this.setState({ isChecked: e.target.checked })
    //   }
    const handleClick = () => {
        setComplete(!complete)
    }
    const handleColor = () => {
        setColor(color)
    }

    return (
        <div className='title'>
            <Link to={`/home/${props.id}`}>
                <h4>Project title</h4>
                {/* <h5>{this.props.id}</h5> */}
                <h5>{props.title}</h5>

            </Link>
            <label className="container">
                <p>{complete ? 'completed' : 'not-completed'}</p>
                <button className={`change ${color}`}
                    onClick={() =>{
                        handleClick()
                        handleColor()
                    }}
                    >hell
                    </button>
            {/* <input type="checkbox" name='check' checked={this.state.isChecked} onChange={this.handleChange} /> */}
                </label>
            </div >
        )

}