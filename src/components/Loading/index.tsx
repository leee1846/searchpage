import React from "react";
import Loader from "react-loader-spinner";
import * as S from "./style";

const Loading = () => {
  return (
    <S.Container>
      <Loader type='ThreeDots' color='dodgerblue' width={50} height={50} />
    </S.Container>
  );
};

export default Loading;
