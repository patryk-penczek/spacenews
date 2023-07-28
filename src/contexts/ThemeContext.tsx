import { systemTheme } from 'constants/systemTheme';
import { createContext, useContext } from 'react';

export type Theme = string;

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}>({
  theme: systemTheme,
  toggleTheme: (theme: Theme) => {
    console.error('Invalid theme:', theme);
  },
});
export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
