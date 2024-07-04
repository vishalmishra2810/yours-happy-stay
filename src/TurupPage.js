import React, { useState } from "react";
import { Button } from "@mui/material";

function TurupPage() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleScoreA = () => {
    setScoreA(scoreA + 1);
  };

  const handleScoreB = () => {
    setScoreB(scoreB + 1);
  };

  const handleNewGame = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ marginBottom: '20px' }}>
        <Button
          sx={{
            backgroundColor: 'green',
            color: 'white',
            margin: '10px',
            '&:hover': {
              backgroundColor: 'darkgreen',
            },
          }}
          onClick={handleScoreA}
        >
          Vishal and Jeetu
        </Button>
        <Button
          sx={{
            backgroundColor: 'green',
            color: 'white',
            margin: '10px',
            '&:hover': {
              backgroundColor: 'darkgreen',
            },
          }}
          onClick={handleScoreB}
        >
          Veerpal and Shubham
        </Button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Button
          sx={{
            backgroundColor: 'red',
            color: 'white',
            margin: '10px',
            '&:hover': {
              backgroundColor: 'darkred',
            },
          }}
          onClick={handleNewGame}
        >
          New Game
        </Button>
      </div>
      <div>
        <p>Score A: {scoreA}</p>
        <p>Score B: {scoreB}</p>
      </div>
    </div>
  );
}

export default TurupPage;
