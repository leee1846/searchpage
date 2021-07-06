import React from "react";
import ListTitle from "./../ListTitle/index";
import * as S from "./style";

const List = () => {
  return (
    <S.Container>
      <ListTitle />
      <S.TotalLine>
        <S.PageLine />
      </S.TotalLine>
    </S.Container>
  );
};

export default List;
