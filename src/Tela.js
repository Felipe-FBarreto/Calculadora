import React from 'react';

export const Tela = ({ valor, res }) => {
  return (
    <div className="tela">
      <span className="valorTela">{valor}</span>
      <span className="valorRes">{res}</span>
    </div>
  );
};
