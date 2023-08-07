import React from 'react';

const Campo = ({ label, valor, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" value={valor} onChange={onChange}></input>
        </div>
    )
}

export default Campo; 