// Student.js

import React, { useState } from 'react';

const Student = ({ id, name, image, email }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="student">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="additional-details">
          {/* Add additional details here */}
          <p>ID: {id}</p>
        </div>
      )}
    </div>
  );
}

export default Student;