import React from "react";
import * as S from "./style";

interface Props {
  amountOfList: number;
}
const ListTitle = ({ amountOfList }: Props) => {
  return (
    <S.Container>
      <S.PTag>강당/강의실</S.PTag>
      <S.PTag2>총 {amountOfList}개</S.PTag2>
    </S.Container>
  );
};

export default ListTitle;
