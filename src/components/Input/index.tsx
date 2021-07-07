import React, { useState } from "react";
import searchIcon from "../../assets/images/search.png";
import { searchVenueList } from "../../stores/GetVenueReducer";
import { useDispatch } from "react-redux";
import * as S from "./style";
import { changePageNumber } from "../../stores/PageNumberReducer";

const Input = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(searchVenueList({ inputValue }));
      dispatch(changePageNumber(1));
    } else {
      window.alert("검색어를 입력해주세요.");
    }
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input
        type='text'
        placeholder='무슨 행사를 진행하시나요?'
        onChange={onInputChange}
      />
      <S.Button type='submit'>
        <img src={searchIcon} alt='찾기' />
      </S.Button>
    </S.Form>
  );
};

export default Input;
