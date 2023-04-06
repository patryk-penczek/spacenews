import NavBar from 'layouts/default/NavBar';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
