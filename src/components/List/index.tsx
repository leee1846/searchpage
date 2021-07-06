import React from "react";
import ListTitle from "./../ListTitle/index";
import * as S from "./style";
import Item from "./../Item/index";
import Pagination from "./../Pagination/index";
import ToTop from "./../ToTop/index";

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
      <Pagination />
      <ToTop />
    </S.Container>
  );
};

export default List;
