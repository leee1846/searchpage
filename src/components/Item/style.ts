import Styled from "styled-components";

export const Container = Styled.div`
  display:flex;
  justify-content:space-between;
  padding:34px 0 38px 0;
  border-bottom:1px solid #efefef;
`;

export const LeftBox = Styled.div`
  display:flex;
`;

export const Img = Styled.img`
  width: 296px;
  height: 222px;
  margin: 0 36px 0 0;
  object-fit: cover;
  border-radius: 4px;
  overflow:hidden;
`;

export const TitleBox = Styled.div`
  display: flex;
  padding:6px 0;
  margin-bottom:4px;
`;

export const Name = Styled.p`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.2px;
  color: #232323;
  margin-right:12px;
`;

export const Type = Styled.p`
  display: inline-flex;
  align-items:center;
  justify-content:center;
  height:24px;
  padding: 0 12px 0 12px;
  border-radius: 12px;
  background-color: #5ac7ff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  color: #ffffff;
`;

export const Address = Styled.address`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -1px;
  text-align: left;
  color: #878787;
`;

export const RightBox = Styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
`;

export const Price = Styled.p`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.72px;
  color: #232323;
`;

export const Span = Styled.span`
  font-weight: 300;
`;

export const PricePerHour = Styled.p`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.54px;
  color: #232323;
  margin-top:2px;
`;
