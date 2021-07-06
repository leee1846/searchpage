import React from "react";
import leftIcon from "../../assets/images/arrow_left.svg";
import rightIcon from "../../assets/images/arrow_right.svg";
import * as S from "./style";

const Pagination = () => {
  return (
    <S.Container>
      <S.Img src={leftIcon} alt='이전으로' />
      <S.Span>1</S.Span>
      <S.Span>2</S.Span>
      <S.Span>3</S.Span>
      <S.Span>4</S.Span>
      <S.Span>5</S.Span>
      <S.Img src={rightIcon} alt='다음으로' />
    </S.Container>
  );
};

export default Pagination;
