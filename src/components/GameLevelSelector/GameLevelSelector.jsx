import { useNavigate } from 'react-router-dom';

import { Button, Wrapper } from './styles';

const GameLevelSelector = ({ list }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {list.map((item) => (
        <Button key={item.level} onClick={() => navigate(`${item.route}/${item.level}`)}>
          {item.name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default GameLevelSelector;
