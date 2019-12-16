import React from 'react';

import logo from '~/assets/github.png';
import git from '~/assets/githublogo.png';

import { HeaderContainer, Logo, Git } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo source={logo} />
      <Git source={git} />
    </HeaderContainer>
  );
}
