import React from 'react';
import { useTheme } from '../ThemeContext';
import { Switch } from '@mui/material';

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();
  return (
    <Switch onChange={toggleTheme} />
  );
};

export default ThemeSwitcher;
