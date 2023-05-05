import NavBar from 'layouts/default/NavBar';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const DefaultLayout = ({ children }: Props): ReactElement => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default DefaultLayout;
