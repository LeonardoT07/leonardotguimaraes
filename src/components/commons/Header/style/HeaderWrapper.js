import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    width: 100%;
    height: 100%;
    max-width: 1080px;
`;

HeaderWrapper.LeftSide = styled.div`
    width: 70%;
`;
HeaderWrapper.RightSide = styled.div`
    width: 30%;
`;
