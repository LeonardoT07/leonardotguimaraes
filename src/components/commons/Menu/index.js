import React from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper } from './styles/MenuWrapper';
import Link from '../Link';

export default function Menu({ isToggleActive }) {
  return (
    <MenuWrapper isToggleActive={isToggleActive}>
      <MenuWrapper.MenuList>
        <MenuWrapper.MenuListItem>
          <Link href="#home">Home</Link>
        </MenuWrapper.MenuListItem>

        <MenuWrapper.MenuListItem>
          <Link href="#skills">Skills</Link>
        </MenuWrapper.MenuListItem>

        <MenuWrapper.MenuListItem>
          <Link href="#projetos">Projetos</Link>
        </MenuWrapper.MenuListItem>

        <MenuWrapper.MenuListItem>
          <Link href="#contato">Contato</Link>
        </MenuWrapper.MenuListItem>

      </MenuWrapper.MenuList>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  isToggleActive: PropTypes.bool.isRequired,
};
