import React from 'react';
import tw from 'twin.macro';
import { ThemeContext } from './theme-context';

import styled, { css } from 'styled-components';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  var darkMode = false;
  if (colorMode === 'dark') {
    darkMode = true;
  }

  return (
    <div>
      <Toggle
        onClick={() => setColorMode(darkMode ? 'light' : 'dark')}
        type="button"
        aria-label={darkMode ? `Activate Light Mode` : `Activate Dark Mode`}
        title={darkMode ? `Activate Light Mode` : `Activate Dark Mode`}
      >
        <Icon darkMode={!darkMode} />
      </Toggle>
    </div>
  );
};

export default DarkToggle;

//styling inspired by https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx
const Toggle = styled.button`
  opacity: 0.45;
  position: relative;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
  appearance: none;
`;

const Icon = styled.div(
  ({ darkMode }) => css`
      border-radius: 50%;

    ${tw`relative w-6 h-6 transition-all duration-500 ease-in-out`}
    ${darkMode && tw`border-4 border-solid border-primary`}

    transform: ${darkMode ? 'scale(0.55)' : 'scale(1)'};
    overflow: ${darkMode ? 'visible' : 'hidden'};
    box-shadow: ${!darkMode && 'inset 8px -8px 0px 0px var(--color-primary)'};
    &:before {
      content: '';
      right: 0px;
      top: 8px;
      border-radius: 50%;

      ${tw`absolute w-6 h-6 duration-500`}
      ${darkMode && tw`border-2 border-solid border-primary`}
      transform: ${darkMode ? 'translate(2px, 2px)' : 'translate(2px, 2px)'};
      opacity: ${darkMode ? '0' : '1'};
    }
    &:after {
      content: '';
      border-radius: 50%;
      box-shadow: 0 -23px 0 var(--color-primary), 0 23px 0 var(--color-primary), 23px 0 0 var(--color-primary),
        -23px 0 0 var(--color-primary), 15px 15px 0 var(--color-primary), -15px 15px 0 var(--color-primary),
        15px -15px 0 var(--color-primary), -15px -15px 0 var(--color-primary);

      ${tw`w-2 h-2 -mt-1 -ml-1 absolute top-1/2 left-1/2`}
      transform: ${darkMode ? 'scale(1)' : 'scale(0)'};
      transition: all 0.35s ease;
    }
  `
);
