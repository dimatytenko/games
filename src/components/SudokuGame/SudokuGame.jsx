import { useState, useMemo } from 'react';

import Sudoku from '../../libs/sudoku';
import {
  Wrapper,
  SudokuGrid,
  Row,
  Cell,
  NumberSelector,
  NumberButton,
  ButtonContainer,
  Button,
  Text,
} from './styles';

const getDeepCopy = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

const SudokuGame = ({ goBack, gridSize = 9, difficulty = 100 }) => {
  const generateNewGame = () => {
    const sudokuObj = new Sudoku(gridSize);
    sudokuObj.generateSudoku(difficulty);
    const initialGrid = getDeepCopy(sudokuObj.grid);
    sudokuObj.solver();
    const solutionGrid = getDeepCopy(sudokuObj.grid);
    return { initialGrid, solutionGrid };
  };

  const { initialGrid, solutionGrid } = useMemo(generateNewGame, [gridSize, difficulty]);
  const [msg, setMsg] = useState('');
  const [sudokuArr, setSudokuArr] = useState(initialGrid);
  const [selectedCell, setSelectedCell] = useState(null);
  const [solutionGridState, setSolutionGridState] = useState(solutionGrid);
  const [gameInitialGrid, setGameInitialGrid] = useState(initialGrid);

  const onCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const selectNumber = (number) => {
    if (!selectedCell) return;

    const { row, col } = selectedCell;
    const grid = getDeepCopy(sudokuArr);

    if (sudokuArr[row][col] === ' ') {
      grid[row][col] = number.toString();
      setSudokuArr(grid);
      setSelectedCell(null);

      const isLastCell = grid.flat().filter((cell) => cell === ' ').length === 0;

      if (isLastCell) {
        const isCorrect = grid
          .flat()
          .every((cell, index) => cell === solutionGridState.flat()[index]);
        setMsg(
          isCorrect
            ? 'Congratulations! You have solved the puzzle!'
            : 'Sorry, you have made a mistake!',
        );
      }
    }
  };

  const onCancellErrors = () => {
    const grid = sudokuArr.map((row, i) =>
      row.map((cell, j) => (cell !== solutionGridState[i][j] && cell !== ' ' ? ' ' : cell)),
    );

    setSudokuArr(grid);
  };

  const onEraseCell = () => {
    if (!selectedCell) return;

    const { row, col } = selectedCell;
    const grid = getDeepCopy(sudokuArr);

    if (sudokuArr[row][col] !== ' ' && gameInitialGrid[row][col] === ' ') {
      grid[row][col] = ' ';
      setSudokuArr(grid);
      setSelectedCell(null);
    }
  };

  const onResetSudoku = () => {
    setSudokuArr(gameInitialGrid);
    setSelectedCell(null);
  };

  const onStartSudoku = () => {
    const { initialGrid, solutionGrid } = generateNewGame();
    setSudokuArr(initialGrid);
    setSolutionGridState(solutionGrid);
    setGameInitialGrid(initialGrid);
    setSelectedCell(null);
  };

  const numbers = [...Array(gridSize).keys()];
  const subgridRows = Math.floor(Math.sqrt(gridSize));
  const subgridCols = Math.ceil(gridSize / subgridRows);

  const remainingNumbers = useMemo(() => {
    const counts = Array(gridSize + 1).fill(0);
    sudokuArr.flat().forEach((cell) => {
      if (cell !== ' ') counts[parseInt(cell, 10)]++;
    });
    return Array.from({ length: gridSize }, (_, i) => ({
      number: i + 1,
      remaining: gridSize - counts[i + 1],
    }));
  }, [sudokuArr, gridSize]);

  return (
    <>
      <Text
        onClick={goBack}
        style={{
          cursor: 'pointer',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Back
      </Text>
      <Wrapper>
        <SudokuGrid>
          {numbers.map((_, rIndex) => (
            <Row
              key={rIndex}
              $isBottomBorder={rIndex + 1 === gridSize || (rIndex + 1) % subgridRows === 0}
            >
              {numbers.map((_, cIndex) => (
                <Cell
                  key={`${rIndex}-${cIndex}`}
                  $isRightBorder={cIndex + 1 === gridSize || (cIndex + 1) % subgridCols === 0}
                  $isSelected={selectedCell?.row === rIndex && selectedCell?.col === cIndex}
                  $isFilled={sudokuArr[rIndex][cIndex] !== ' '}
                  $isSameSelectedNumber={
                    selectedCell &&
                    sudokuArr[selectedCell.row][selectedCell.col] === sudokuArr[rIndex][cIndex]
                  }
                  $isError={
                    sudokuArr[rIndex][cIndex] !== solutionGridState[rIndex][cIndex] &&
                    sudokuArr[rIndex][cIndex] !== ' '
                  }
                  onClick={() => onCellClick(rIndex, cIndex)}
                >
                  {sudokuArr[rIndex][cIndex]}
                </Cell>
              ))}
            </Row>
          ))}
        </SudokuGrid>

        {msg && <Text>{msg}</Text>}

        <NumberSelector>
          {remainingNumbers.map(({ number, remaining }) => (
            <NumberButton
              key={number}
              onClick={() => selectNumber(number)}
              disabled={remaining === 0}
            >
              <Text>{number}</Text>
              <Text
                type="secondary"
                style={{
                  fontSize: '10px',
                  opacity: '0.5',
                }}
              >
                {remaining}
              </Text>
            </NumberButton>
          ))}
        </NumberSelector>
        <ButtonContainer>
          <Button onClick={onCancellErrors}>Cancell errors</Button>
          <Button onClick={onEraseCell}>Erase</Button>
          <Button onClick={onResetSudoku}>Reset</Button>
          <Button onClick={onStartSudoku}>New game</Button>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default SudokuGame;
