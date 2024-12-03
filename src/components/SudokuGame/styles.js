import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const Text = styled.p``;

export const SudokuGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 1;
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  border-bottom: ${(props) => (props.$isBottomBorder ? '2px solid #000000' : '1px solid gray')};
`;

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  aspect-ratio: 1;
  border-right: ${({ $isRightBorder }) =>
    $isRightBorder ? '2px solid #000000' : '1px solid gray'};
  background-color: ${({ $isFilled, $isSelected, $isSameSelectedNumber, $isError }) => {
    if ($isError) return 'red';
    if ($isSelected) return '#5e5acd';
    if ($isFilled && $isSameSelectedNumber) return '#55d7dc';
    return 'white';
  }};
  color: ${({ $isFilled, $isSelected, $isError }) => {
    if ($isError) return '#ffffff';
    if ($isFilled && $isSelected) return '#ffffff';
    return '#000000';
  }};
  cursor: pointer;
`;

export const NumberSelector = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
`;

export const NumberButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid #000000;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: none;
  border: 1px solid #000000;
  font-size: 14px;
  cursor: pointer;
`;
