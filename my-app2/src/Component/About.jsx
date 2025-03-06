import React, { useState } from 'react';

function About() {

    const [selectedColor, setSelectedColor] = useState('white');

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    return (
        <>
            <div style={{marginTop : "20px"}}>
                <h2>Color Picker</h2>
                <div style={{display: 'flex', gap:'30px'}}>
                <button onClick={() => handleColorChange('blue')} style={{background : "blue" , color : "white"}}>Primary</button>
                <button onClick={() => handleColorChange('gray')} style={{background : "gray" , color : "white"}}>Secondry</button>
                <button onClick={() => handleColorChange('green')} style={{background : "green" , color : "white"}}>success</button>
                <button onClick={() => handleColorChange('red')} style={{background : "red" , color : "white"}}>Danger</button>
                <button onClick={() => handleColorChange('yellow')} style={{background : "yellow" , color : "black"}}>Warning</button>
                <button onClick={() => handleColorChange('aqua')} style={{background : "aqua" , color : "black"}}>Info</button>
                <button onClick={() => handleColorChange('white')} style={{background : "white" , color : "black"}}>Light</button>
                <button onClick={() => handleColorChange('black')} style={{background : "black" , color : "white"}}>dark</button>
                </div>
                <div
                    style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: selectedColor,
                        marginTop: '20px',
                    }}
                ></div>
            </div>
        </>
    )
}

export default About;