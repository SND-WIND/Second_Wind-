import React from 'react';

const LinkButton = ({ link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button onClick={handleClick}>Apply Now</button>
  );
};

export default LinkButton;