export const darkInput = {
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #1C1E21',
    borderRadius: '4px',
    boxShadow: state.isFocused ? '0 0 0 1px #fff' : 'none',
    backgroundColor: '#3A3B3C',
    color: 'white',
    transition: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    'backgroundColor': state.isSelected ? '#1877F2' : 'transparent',
    'color': 'white',
    'cursor': 'pointer',
    '&:hover': {
      backgroundColor: '#1C1E21',
    },
  }),
  input: (provided) => ({
    ...provided,
    color: 'white',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#3A3B3C',
    color: 'white',
  }),
  menuList: (provided) => ({
    ...provided,
    color: 'white',
  }),
};
