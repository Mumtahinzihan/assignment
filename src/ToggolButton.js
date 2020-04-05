import React, { useState } from 'react';
export default function ToggolButton() {
    const [click, setClick] = useState(true)

    const toggleChange = () => {
        setClick(!click)
    }

    return (
        <div>
            <p>{click ? <input type="checkbox"/> : false}</p>
            <button onClick={() => toggleChange()}>clickmeeeeee</button>
        </div>
        
    )
}