import { Container } from './style';

import NightwingLogo from '../../assets/images/nightwing-logo.png';

export const Home = () => {
  return (
    <Container>
      <img src={NightwingLogo} alt="Nightwing logo" />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS structure made by @guiprais.</p>
    </Container>
  );
};
