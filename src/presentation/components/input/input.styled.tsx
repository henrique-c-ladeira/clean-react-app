import styled from 'styled-components';

export const ContainerSC = styled.div`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.colors.darkContrast};
  align-items: center;
`;

export const InputSC = styled.input`
  border-width: 2px;
  border-color: transparent;
  border-radius: 6px;
  padding: 16px 24px;
  font-family: ${(props) => props.theme.font.regular};
  font-size: 26px;
  color: ${(props) => props.theme.colors.textLight};

  &::placeholder {
    color: ${(props) => props.theme.colors.textLight};
    font-weight: 100;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primaryLight};
  }
`;
