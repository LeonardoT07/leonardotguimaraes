/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from '../src/components/foundation/Container';
import { ToggleMenu } from '../src/components/commons/ToggleMenu';
import Menu from '../src/components/commons/Menu';
import Header from '../src/components/commons/Header';

export default function Home() {
  const [isToggleActive, setIsToggleActive] = React.useState(false);

  function handleToggleClick() {
    setIsToggleActive(!isToggleActive);
  }

  return (
    <Container>
      <ToggleMenu isToggleActive={isToggleActive} onClick={handleToggleClick} />
      <Menu isToggleActive={isToggleActive} />

      <Header />
    </Container>
  );
}
