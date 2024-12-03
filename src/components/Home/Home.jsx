import GameLevelSelector from '../GameLevelSelector';
import { Wrapper } from './styles';

const HomeComponent = ({ listSudokuLevels }) => {
  return (
    <Wrapper>
      <GameLevelSelector list={listSudokuLevels} />
    </Wrapper>
  );
};

export default HomeComponent;
