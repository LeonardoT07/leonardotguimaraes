import styled, { css } from 'styled-components';

const HideMenu = css`
    left: -100%;
`;

const ShowMenu = css`
    left: 0;
`;

export const MenuWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndex.toggleMenu};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
    /* background-color: red; */
    background-color: ${({ theme }) => theme.dark.background.secondary};

    ${((props) => {
    if (props.isToggleActive) {
      return ShowMenu;
    }
    return HideMenu;
  })}
`;

MenuWrapper.MenuList = styled.ul`
  position: relative;
  list-style: none;
`;

MenuWrapper.MenuListItem = styled.li`
  position: relative;
  text-align: center;

  &:not(:last-child){
    margin-bottom: 20px;
  }
`;
