/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { HeaderWrapper } from './style/HeaderWrapper';
import Text from '../../foundation/Text';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftSide>
        <Text
          tag="span"
          variant="spanDescription"
        >
          Olá, eu sou
        </Text>
        <Text
          tag="h1"
          variant="bigTitle"
        >
          Leonardo Tavares
        </Text>
        <Text
          tag="h2"
          variant="subTitle"
        >
          Desenvolvedor Web
        </Text>
        <Text
          tag="p"
          variant="description"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </Text>
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.RightSide>
        <img src="https://avatars.githubusercontent.com/u/33882443?v=4" alt="Leonardo Tavares Guimarães" />
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
