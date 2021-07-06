import React from "react";
import * as S from "./style";
import testImg from "../../assets/images/test.jpg";

const Item = () => {
  return (
    <S.Container>
      <S.LeftBox>
        <S.Img src={testImg} alt='이미지' />
        <div>
          <S.TitleBox>
            <S.Name>명지전문대학 / 실내체육관</S.Name>
            <S.Type>승인</S.Type>
          </S.TitleBox>
          <S.Address>서울특별시 성북구 삼선교로 16길 116</S.Address>
        </div>
      </S.LeftBox>
      <S.RightBox>
        <S.TitleBox>
          <S.Price>
            200,000원<S.Span> / 4시간</S.Span>
          </S.Price>
        </S.TitleBox>
        <S.PricePerHour>(시간당 50,000원)</S.PricePerHour>
      </S.RightBox>
    </S.Container>
  );
};

export default Item;
