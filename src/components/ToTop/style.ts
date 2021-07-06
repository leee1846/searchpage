import Styled from "styled-components";

export const Container = Styled.div`
  position:fixed;
  right:12vw;
  bottom:100px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width: 54px;
  height: 54px;
  box-shadow: 0 3px 7px 0 rgba(197, 197, 197, 0.16);
  border: solid 1px #d8dee5;
  border-radius:50%;
  background-color: #ffffff;
  cursor:pointer;
`;

export const Img = Styled.img`
  width:16px;
`;

export const Span = Styled.span`
  margin-top:4.3px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.65px;
  color: #677294;
`;
