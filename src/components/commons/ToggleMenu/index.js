import styled, { css } from 'styled-components';

const ToggleActive = css`
    &:before {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;

export const ToggleMenu = styled.div`
    position: fixed;
    top: 15px;
    right: 30px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: ${({ theme }) => theme.zIndex.toggleBars};

    &:before {
        content: '';
        position: absolute;
        top: 8px;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.dark.color.primary};
    }
    &:after {
        content: '';
        position: absolute;
        bottom: 8px;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.dark.color.primary};
    }

    ${(props) => {
    if (props.isToggleActive) {
      return ToggleActive;
    }
    return css``;
  }}
`;
