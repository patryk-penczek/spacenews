import useDarkSide from '@/hooks/useDarkSide';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false,
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={28} />
  );
};

export default Switcher;
