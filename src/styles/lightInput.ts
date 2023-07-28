export const lightInput = {
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #1C1E21',
    borderRadius: '4px',
    boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
    backgroundColor: 'white',
    color: 'black',
    transition: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    'backgroundColor': state.isSelected ? '#1877F2' : 'transparent',
    'color': state.isSelected ? 'white' : 'black',
    'cursor': 'pointer',
    '&:hover': {
      backgroundColor: '#EEF1F4',
      color: 'black',
    },
  }),
  input: (provided) => ({
    ...provided,
    color: 'black',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'black',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    color: 'black',
  }),
  menuList: (provided) => ({
    ...provided,
    color: 'black',
  }),
};
