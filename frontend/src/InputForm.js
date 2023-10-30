// make a new input form

import React, { useState } from 'react';

function InputForm({ onSubmit }) {
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Add a new item"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        </form>
    );
}