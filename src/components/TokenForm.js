import React, { useState } from 'react';
import TokenList from './TokenList';

const TokenForm = () => {
  const [blueTokenCount, setBlueTokenCount] = useState(0);
  const [blueTokenPrefix, setBlueTokenPrefix] = useState(" ");
  const [blueTokenPerRow, setBlueTokenPerRow] = useState(0);
  const [redTokenCount, setRedTokenCount] = useState(0);
  const [redTokenPrefix, setRedTokenPrefix] = useState(" ");
  const [redTokenPerRow, setRedTokenPerRow] = useState(0);

  const [tokens, setTokens] = useState({ blue: [], red: [] });

  const generateTokens = () => {
    const blueTokens = Array.from({ length: blueTokenCount }, (_, i) => `${blueTokenPrefix}${i + 1}`);
    const redTokens = Array.from({ length: redTokenCount }, (_, i) => `${redTokenPrefix}${i + 1}`);
    setTokens({ blue: blueTokens, red: redTokens });
  };

  const clearTokens = () => {
    setTokens({ blue: [], red: [] });
  };

  return (
    <div>
      <h2>Token Generator</h2>
      <form>
        <label>
          Number of Blue Tokens:
          <input type="number" value={blueTokenCount} onChange={(e) => setBlueTokenCount(Number(e.target.value))} />
        </label>
        <label>
          Prefix for blue tokens:
          <input type="text" value={blueTokenPrefix} onChange={(e) => setBlueTokenPrefix(e.target.value)} />
        </label>
        <label>
          Blue tokens per row:
          <input type="number" value={blueTokenPerRow} onChange={(e) => setBlueTokenPerRow(Number(e.target.value))} />
        </label>
        <label>
          Number of Red Tokens:
          <input type="number" value={redTokenCount} onChange={(e) => setRedTokenCount(Number(e.target.value))} />
        </label>
        <label>
          Prefix for red tokens:
          <input type="text" value={redTokenPrefix} onChange={(e) => setRedTokenPrefix(e.target.value)} />
        </label>
        <label>
          Red tokens per row:
          <input type="number" value={redTokenPerRow} onChange={(e) => setRedTokenPerRow(Number(e.target.value))} />
        </label>

        <button type="button" onClick={generateTokens}>Generate</button>
        <button type="button" onClick={clearTokens}>Clear</button>
      </form>

      <TokenList tokens={tokens} blueRow={blueTokenPerRow} redRow={redTokenPerRow} />
    </div>
  );
};

export default TokenForm;
