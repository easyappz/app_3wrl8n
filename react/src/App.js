import ErrorBoundary from './ErrorBoundary';
import './App.css';
import { useState } from 'react';
import { Grid, Button, Box, Typography } from '@mui/material';

function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleNumberClick = (value) => {
    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
    setWaitingForSecondValue(false);
  };

  const handleOperationClick = (op) => {
    setPreviousValue(parseFloat(display));
    setOperation(op);
    setWaitingForSecondValue(true);
    setDisplay('0');
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForSecondValue(false);
  };

  const handleEqualClick = () => {
    if (!previousValue || !operation) return;

    const currentValue = parseFloat(display);
    let result = 0;

    if (operation === '+') {
      result = previousValue + currentValue;
    } else if (operation === '-') {
      result = previousValue - currentValue;
    } else if (operation === '×') {
      result = previousValue * currentValue;
    } else if (operation === '÷') {
      if (currentValue === 0) {
        setDisplay('Error');
        return;
      }
      result = previousValue / currentValue;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setWaitingForSecondValue(false);
  };

  const buttons = [
    { label: 'AC', color: '#A5A5A5', background: '#333333', action: handleClearClick, grid: { xs: 6 } },
    { label: '±', color: '#A5A5A5', background: '#333333', action: () => setDisplay((parseFloat(display) * -1).toString()), grid: { xs: 3 } },
    { label: '%', color: '#A5A5A5', background: '#333333', action: () => setDisplay((parseFloat(display) / 100).toString()), grid: { xs: 3 } },
    { label: '÷', color: '#FFFFFF', background: '#FF9500', action: () => handleOperationClick('÷'), grid: { xs: 3 } },
    { label: '7', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('7'), grid: { xs: 3 } },
    { label: '8', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('8'), grid: { xs: 3 } },
    { label: '9', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('9'), grid: { xs: 3 } },
    { label: '×', color: '#FFFFFF', background: '#FF9500', action: () => handleOperationClick('×'), grid: { xs: 3 } },
    { label: '4', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('4'), grid: { xs: 3 } },
    { label: '5', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('5'), grid: { xs: 3 } },
    { label: '6', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('6'), grid: { xs: 3 } },
    { label: '-', color: '#FFFFFF', background: '#FF9500', action: () => handleOperationClick('-'), grid: { xs: 3 } },
    { label: '1', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('1'), grid: { xs: 3 } },
    { label: '2', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('2'), grid: { xs: 3 } },
    { label: '3', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('3'), grid: { xs: 3 } },
    { label: '+', color: '#FFFFFF', background: '#FF9500', action: () => handleOperationClick('+'), grid: { xs: 3 } },
    { label: '0', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('0'), grid: { xs: 6 } },
    { label: '.', color: '#FFFFFF', background: '#1C1C1E', action: () => handleNumberClick('.'), grid: { xs: 3 } },
    { label: '=', color: '#FFFFFF', background: '#FF9500', action: handleEqualClick, grid: { xs: 3 } },
  ];

  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h1>This is Application Number 1</h1>
          <h2 className="App-subheader">Классный подзаголовок</h2>
          <Box className="calculator-container">
            <Box className="calculator-display">
              <Typography variant="h3" align="right" color="#FFFFFF">
                {display}
              </Typography>
            </Box>
            <Grid container spacing={1} className="calculator-buttons">
              {buttons.map((btn, index) => (
                <Grid item {...btn.grid} key={index}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={btn.action}
                    sx={{
                      backgroundColor: btn.background,
                      color: btn.color,
                      borderRadius: btn.label === '0' ? '50px' : '50%',
                      height: '60px',
                      fontSize: '1.5rem',
                      '&:hover': {
                        backgroundColor: btn.background === '#FF9500' ? '#E08600' : btn.background === '#333333' ? '#444444' : '#2C2C2E',
                      },
                    }}
                  >
                    {btn.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
