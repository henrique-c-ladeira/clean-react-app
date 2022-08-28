import styled from 'styled-components';

export const InputSC = styled.input`
  padding: 16px 24px;
  font-family: ${(props) => props.theme.font.regular};
  font-size: 26px;
  background-color: ${(props) => props.theme.colors.darkContrast};
  color: ${(props) => props.theme.colors.textLight};
  border-width: 2px;
  border-color: transparent;
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme.colors.textLight};
    font-weight: 100;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primaryLight};
  }
`;
