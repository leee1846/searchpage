import Styled from "styled-components";

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
export const Span = Styled.span<SpanProps>`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.8px;
  color: ${({ isClicked }) => (isClicked ? "red" : "#5e5e5e")};
  margin: 0 17px;
  cursor:pointer;
`;
