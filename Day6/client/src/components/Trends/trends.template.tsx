import React, { useContext, useState } from 'react';
import { Switch } from '@mui/material';
import { ThemeContext } from '../../context/ThemeProvider';

import { TThemeContextType } from 'twitter/type';
import './trends.style.css';
import { useTheme } from '../../context/ThemeProvider_new';

const Trends: React.FC = () => {
  const themeContext = useContext(ThemeContext) as TThemeContextType;
  const {darkMode, toggleDarkMode} = useTheme(); 
  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggleDarkMode()
  };

  return (
    <div className={darkMode ? 'trends' : 'trends-light'}>
      <h2>Trends</h2>
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
};

export default Trends;