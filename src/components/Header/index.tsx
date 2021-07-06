import React from "react";
import logoImg from "../../assets/images/shareit_logo_2021.png";
import * as S from "./style";
import Input from "./../Input/index";

const Header = () => {
  return (
    <S.Header>
      <S.Img src={logoImg} alt='로고' />
      <Input />
    </S.Header>
  );
};

export default Header;
