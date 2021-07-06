import Styled from "styled-components";

export const Form = Styled.form`
  display:flex;
  align-items:center;
  width: 536.4px;
  height: 47px;
  padding:0 20px;
  border-radius: 4px;
  box-shadow: 0 0 7px 0 rgba(57, 117, 207, 0.18);
  border: solid 1px #0077ed;
`;

export const Input = Styled.input`
  height:100%;
  width:100%;
  border:none;
  outline:none;
  font-size: 18px;
  letter-spacing: -0.9px;
  line-height: 3.44;
  
  ::placeholder{
    color: #b9b9b9;
  }
`;

export const Button = Styled.button`
  background:transparent;
  border:none;
  outline:none;
  cursor:pointer;
`;
