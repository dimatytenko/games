import HomeComponent from '../../components/Home';
import { routes } from '../../constants/routes';
import { SUDOKU_TYPES } from '../../constants/sudoku';

const Home = () => {
  const listSudokuLevels = Object.keys(SUDOKU_TYPES).map((key) => {
    return {
      name: SUDOKU_TYPES[key].name,
      level: key,
      route: routes.sudoku,
    };
  });

  return <HomeComponent listSudokuLevels={listSudokuLevels} />;
};

export default Home;
