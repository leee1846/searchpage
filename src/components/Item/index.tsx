import React from "react";
import * as S from "./style";
import testImg from "../../assets/images/test.jpg";

interface Props {
  imgUrl: string;
  hostName: string;
  venueName: string;
  type: string;
  address: string;
  pricePerHour: number;
  minHour: number;
}
const Item = ({
  imgUrl,
  hostName,
  venueName,
  type,
  address,
  pricePerHour,
  minHour,
}: Props) => {
  const minPrice = pricePerHour * minHour;

  return (
    <S.Container>
      <S.LeftBox>
        <S.Img src={imgUrl} alt='이미지' />
        <div>
          <S.TitleBox>
            <S.Name>
              {hostName} / {venueName}
            </S.Name>
            <S.Type>{type}</S.Type>
          </S.TitleBox>
          <S.Address>{address}</S.Address>
        </div>
      </S.LeftBox>
      <S.RightBox>
        <S.TitleBox>
          <S.Price>
            {minPrice}원<S.Span> / {minHour}시간</S.Span>
          </S.Price>
        </S.TitleBox>
        <S.PricePerHour>(시간당 {pricePerHour}원)</S.PricePerHour>
      </S.RightBox>
    </S.Container>
  );
};

export default Item;
