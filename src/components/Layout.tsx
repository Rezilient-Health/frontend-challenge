import { Container } from '@mui/material';
import { ReactElement } from 'react';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = (props: Props): ReactElement => {
  return <Container maxWidth="lg">{props.children}</Container>;
};

export default Layout;
