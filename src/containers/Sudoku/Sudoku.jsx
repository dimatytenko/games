import { useNavigate } from 'react-router-dom';

import useSudoku from '../../components/hooks/sudoku';
import SudokuGame from '../../components/SudokuGame';
import { SUDOKU_TYPES } from '../../constants/sudoku';

const Sudoku = () => {
  const navigate = useNavigate();
  const level = useSudoku();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SudokuGame
      gridSize={SUDOKU_TYPES[level].gridSize}
      difficulty={SUDOKU_TYPES[level].level}
      goBack={goBack}
    />
  );
};

export default Sudoku;
