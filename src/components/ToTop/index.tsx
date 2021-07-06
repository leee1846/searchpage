import React from "react";
import topIcon from "../../assets/images/arrow_up.svg";
import * as S from "./style";

const ToTop = () => {
  return (
    <S.Container>
      <S.Img src={topIcon} alt='위로가기' />
      <S.Span>TOP</S.Span>
    </S.Container>
  );
};

export default ToTop;
