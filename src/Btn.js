import React from 'react';

export const Btn = ({ digito, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {digito}
    </button>
  );
};
