import Styled, { css } from "styled-components";

export const Container = Styled.div`
  margin: 49.5px auto 0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-bottom:194px;
`;

export const Img = Styled.img`
  width:6px;
  margin: 0 17px;
  cursor:pointer;
`;

interface SpanProps {
  isClicked: boolean;
}
export const Span = Styled.div<SpanProps>`
  position:relative;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.8px;
  color: ${({ isClicked }) => (isClicked ? "white" : "#5e5e5e")};
  margin: 0 17px;
  cursor:pointer;

  ${({ isClicked }) =>
    isClicked &&
    css`
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        width: 35px;
        height: 36px;
        border-radius: 50%;
        background-color: #325cbc;
        z-index: -1;
      }
    `}
`;
