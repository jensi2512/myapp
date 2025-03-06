import React, { useState } from 'react';

function Home() {

    const [selectedColor, setSelectedColor] = useState('white');

    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'black'];

    const handleColorClick = (color) => {
        setSelectedColor(color);
    }

    return (
        <>
            <div>
                <h2>Select a Color:</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {colors.map((color) => (
                        <div
                            key={color}
                            style={{
                                width: '200px',
                                height: '30px',
                                backgroundColor: color,
                                cursor: 'pointer',
                                border: color === selectedColor ? '2px solid black' : '1px solid grey',
                            }}
                            onClick={() => handleColorClick(color)}
                        ></div>
                    ))}
                </div>
                <p>Selected Color: {selectedColor}</p>
                <div style={{ width: '300px', height: '300px', backgroundColor: selectedColor }}></div>
            </div>
        </>
    )
}
export default Home;