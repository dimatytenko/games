import { useParams } from 'react-router-dom';

const useSudoku = () => {
  const { level } = useParams();

  return level;
};

export default useSudoku;
