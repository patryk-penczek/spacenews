import { useTheme } from 'contexts/ThemeContext';
import { ReactElement, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = (): ReactElement => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme(newTheme);
  };

  return (
    <DarkModeSwitch
      checked={theme === 'dark'}
      onChange={handleToggle}
      size={28}
    />
  );
};

export default Switcher;
