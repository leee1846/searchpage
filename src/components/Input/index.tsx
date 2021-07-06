import React from "react";
import searchIcon from "../../assets/images/search.png";
import * as S from "./style";

const Input = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("찾기");
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input type='text' placeholder='무슨 행사를 진행하시나요?' />
      <S.Button type='submit'>
        <img src={searchIcon} alt='찾기' />
      </S.Button>
    </S.Form>
  );
};

export default Input;
