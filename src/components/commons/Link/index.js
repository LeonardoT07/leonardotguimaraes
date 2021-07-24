import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.dark.color.primary};
  text-decoration: none;

  &:hover{
    color: ${({ theme }) => theme.dark.color.contrast};
  }
  &:not(:last-child){
    margin-right: 10px;
  }
`;

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
