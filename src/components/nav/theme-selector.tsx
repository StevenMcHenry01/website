// 3rd party imports
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../contexts/app-context';
import { darkTheme, defaultTheme, forestTheme } from '../../styles/globals';

// My imports

interface ThemeSelectorProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const themeData = [
  {
    name: 'default',
    theme: defaultTheme,
  },
  {
    name: 'dark',
    theme: darkTheme,
  },
  {
    name: 'forest',
    theme: forestTheme,
  },
];

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  show,
  setShow,
}) => {
  const { setTheme } = useAppContext();
  const handleThemeSelect = (theme: any) => {
    setTheme(theme);
    localStorage.setItem('preferredTheme', theme.name);
  };
  return (
    <AnimatePresence>
      {show && (
        <Wrapper initial={{ y: -161 }} animate={{ y: 0 }} exit={{ y: -161 }}>
          {themeData.map(({ name, theme }: any) => (
            <div className="theme-wrapper" key={name}>
              <button
                className="theme-button"
                style={{ background: theme.colors.background }}
                onClick={() => handleThemeSelect(theme)}
              />
              <p>{name}</p>
            </div>
          ))}
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  padding: 30px;
  gap: 50px;
  position: absolute;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  .theme-wrapper {
    text-align: center;
  }
  .theme-button {
    border: 1px solid ${(props) => props.theme.colors.hrColor};
    border-radius: 10px;
    height: 70px;
    width: 70px;
    &:hover {
      cursor: pointer;
    }
  }
`;
