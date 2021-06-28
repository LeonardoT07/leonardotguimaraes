import React from 'react';
import PropTypes from 'prop-types';

import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu({ isToggleActive }) {
  return (
    <MenuWrapper isToggleActive={isToggleActive}>
      <MenuWrapper.MenuList>
        <MenuWrapper.MenuListItem>
          <MenuWrapper.MenuLink href="#home">Home</MenuWrapper.MenuLink>
        </MenuWrapper.MenuListItem>

        <MenuWrapper.MenuListItem>
          <MenuWrapper.MenuLink href="#skills">Skills</MenuWrapper.MenuLink>
        </MenuWrapper.MenuListItem>

        <MenuWrapper.MenuListItem>
          <MenuWrapper.MenuLink href="#projetos">Projetos</MenuWrapper.MenuLink>
        </MenuWrapper.MenuListItem>

        <MenuWrapper.MenuListItem>
          <MenuWrapper.MenuLink href="#contato">Contato</MenuWrapper.MenuLink>
        </MenuWrapper.MenuListItem>

      </MenuWrapper.MenuList>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  isToggleActive: PropTypes.bool.isRequired,
};
