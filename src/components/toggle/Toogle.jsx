import React, { useState } from 'react';
import Css from './Toggle.css';

const BorderWithImage = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };


  const imageSrc = showParagraph
    ? 'https://imgs.search.brave.com/lmcD8YmdkWhybfJlQfux3pEUlSkwrj6JB3Wb8qIGjkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW9uaWNvbnMv/NTEyL2ljb24taW9z/Ny1hcnJvdy11cC0x/MjgucG5n '
    : 'https://imgs.search.brave.com/RJtjGR4UB8s_xd63-bq8HWcj9oUQvwTYg6mMCXQvVqQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzAzLzE4LzE1/LzM2MF9GXzQwMzE4/MTU0OF85NE5QMGI3/b29vd0pSekIyc3Jw/SWV3cFlJMHJZVENz/Uy5qcGc';

  return (
    <div className="border-container">
      <div className="content-container">
        <div className="left-content">
          <h1>Why park a domain in Parkname?</h1>
          <img
            src={imageSrc}
            onClick={toggleParagraph}
          />
        </div>
        {showParagraph && (
          <p className="paragraph">
            Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.
          </p>
        )}
      </div>
    </div>
  );
};

export default BorderWithImage;
