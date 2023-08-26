import React, { useState } from 'react';
import './cards.css';

const initialCardData = [
  'Combridge University', 'Harvard University', 'Stanford University', 'University of Oxford', 'University of Pennsylvania',
  'University of Chicago', 'Princeton University', 'University of Pennsylvania', 'University of Toronto', 'University of Tokyo',
  'Columbia University', 'University of Pennsylvania','University of Melbourne', 'Stanford University','Harvard University',
  'Columbia University', 'University of Pennsylvania','University of Melbourne'
];

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState(initialCardData.slice(0, 14));
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setVisibleCards(initialCardData);
    setShowMore(true);
  };

  return (
    <div className="app">
      <div className="card-container">
        {visibleCards.map((heading, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{heading}</h2>
          </div>
        ))}
        {!showMore && initialCardData.length > 5 && (
          <div className="card show-more-card" onClick={handleShowMoreClick}>
            <h2 className="card-title">So on...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
