// 3rd party imports
import React from 'react';
import styled from 'styled-components';

// My imports

interface ThemeSelectorProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  show,
  setShow,
}) => {
  return <Wrapper>Hi</Wrapper>;
};

const Wrapper = styled.div``;
