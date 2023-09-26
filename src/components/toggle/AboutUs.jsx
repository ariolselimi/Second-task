import React, { useState } from 'react';
import CSS from './About.css';
import data from '../../aboutData.json';

function AboutUs() {
    const [showChild, setShowChild] = useState(null);
    const toggleChild = (id) => showChild === id ? setShowChild(null) : setShowChild(id)
    const [showComponents, setShowComponents] = useState(false);
    const image1 = 'https://www.svgrepo.com/show/27797/right-arrow.svg';
    const image2 = 'https://www.svgrepo.com/show/500142/arrow-up.svg';

    const toggleComponents = () => {
        setShowComponents(!showComponents);
    };

    return (
        <div className="container">
            <div className="aboutUs">
                <h1>AboutUs</h1>
                <img
                    src={showComponents ? 'https://imgs.search.brave.com/lmcD8YmdkWhybfJlQfux3pEUlSkwrj6JB3Wb8qIGjkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW9uaWNvbnMv/NTEyL2ljb24taW9z/Ny1hcnJvdy11cC0x/MjgucG5n' : 'https://imgs.search.brave.com/RJtjGR4UB8s_xd63-bq8HWcj9oUQvwTYg6mMCXQvVqQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzAzLzE4LzE1/LzM2MF9GXzQwMzE4/MTU0OF85NE5QMGI3/b29vd0pSekIyc3Jw/SWV3cFlJMHJZVENz/Uy5qcGc'} alt='Toggle'
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
                                src={showChild === item.id ? image2 : image1}
                                alt='toggleAbout'
                                onClick={() => toggleChild(item.id)}
                                className='toggle-icon'
                            />
                            </div>
                            {showChild === item.id && (
                                <div className='child'>
                                    <p className='child'>{item.childText}</p>
                                </div>
                            )}  
                            <hr/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AboutUs;
