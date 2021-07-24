import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const TextStyleVariantsMap = {
  bigTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.bigTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.bigTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.bigTitle.lineHeight};
    margin: 0;
  `,
  subTitle: css`
    color: ${({ theme }) => theme.dark.color.contrast};
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
    text-transform: uppercase;
    margin: 0 0 10px 0;
  `,
  spanDescription: css`
    font-size: ${({ theme }) => theme.typographyVariants.spanDescription.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.spanDescription.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.spanDescription.lineHeight};
    margin: 0;
  `,
  description: css`
    font-size: ${({ theme }) => theme.typographyVariants.description.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.description.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.description.lineHeight};
    margin: 0;
  `,
};

const TextBase = styled.span`
  color: ${({ theme }) => theme.dark.color.primary};
  letter-spacing: 0.050em;
  ${(props) => TextStyleVariantsMap[props.variant]};
`;

export default function Text({
  tag,
  variant,
  children,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};
