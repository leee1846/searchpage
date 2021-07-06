import React from "react";
import Header from "../components/Header/index";
import * as S from "./SearchPage.style";
import List from "./../components/List/index";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <S.Line />
      <List />
    </div>
  );
};

export default SearchPage;
