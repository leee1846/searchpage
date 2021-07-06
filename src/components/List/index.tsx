import React from "react";
import ListTitle from "./../ListTitle/index";
import * as S from "./style";
import Item from "./../Item/index";

const List = () => {
  return (
    <S.Container>
      <ListTitle />
      <S.TotalLine>
        <S.PageLine />
      </S.TotalLine>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </S.Container>
  );
};

export default List;
