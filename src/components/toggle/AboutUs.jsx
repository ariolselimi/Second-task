import React, { useState } from 'react';
import CSS from './About.css';
import data from '../../aboutData.json';

function AboutUs() {
    const [showChild, setShowChild] = useState(null);
    const toggleChild = (id) => showChild === id ? setShowChild(null) : setShowChild(id)
    const [showComponents, setShowComponents] = useState(false);

    const toggleComponents = () => {
        setShowComponents(!showComponents);
    };

    return (
        <div className="container">
            <div className="aboutUs">
                <h1>AboutUs</h1>
                <img className='toggleAbout'
                    src={showComponents ? 'https://imgs.search.brave.com/lmcD8YmdkWhybfJlQfux3pEUlSkwrj6JB3Wb8qIGjkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW9uaWNvbnMv/NTEyL2ljb24taW9z/Ny1hcnJvdy11cC0x/MjgucG5n' : 'https://imgs.search.brave.com/RJtjGR4UB8s_xd63-bq8HWcj9oUQvwTYg6mMCXQvVqQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzAzLzE4LzE1/LzM2MF9GXzQwMzE4/MTU0OF85NE5QMGI3/b29vd0pSekIyc3Jw/SWV3cFlJMHJZVENz/Uy5qcGc'}
                    onClick={toggleComponents}
                />
            </div>
            {showComponents && (
                <div className="paragraphs">
                    {data.map((item) => (
                        <div key={item.id}>
                        <div className='parent1'>
                            <p className="paragraph">{item.paragraph}</p>
                            <img
                                className="toggleAbout"
                                src={item.imageChild}
                                onClick={() => toggleChild(item.id)}
                            />
                            {showChild === item.id && (
                                <div>
                                    <p className='child'>{item.childText}</p>
                                </div>
                            )}   
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AboutUs;
