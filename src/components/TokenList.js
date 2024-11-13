import React from 'react';
import '../styles.css';

const TokenList = ({ tokens, blueRow, redRow }) => {
  const formatTokens = (tokenArray, tokensPerRow) => {
    const rows = [];
    const rowLimit = tokensPerRow || tokenArray.length;

    for (let i = 0; i < tokenArray.length; i += rowLimit) {
      rows.push(tokenArray.slice(i, i + rowLimit));
    }
    return rows;
  };

  return (
    <div>

      <h3>Blue Tokens</h3>
      <div className="token-container">
        {formatTokens(tokens.blue, blueRow).map((row, rowIndex) => (
          <div key={`blue-row-${rowIndex}`} className="token-row">
            {row.map((token, index) => (
              <div key={index} className="token blue">{token}</div>
            ))}
          </div>
        ))}
      </div>


      <h3>Red Tokens</h3>
      <div className="token-container">
        {formatTokens(tokens.red, redRow).map((row, rowIndex) => (
          <div key={`red-row-${rowIndex}`} className="token-row">
            {row.map((token, index) => (
              <div key={index} className="token red">{token}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenList;
