/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import leftIcon from "../../assets/images/arrow_left.svg";
import rightIcon from "../../assets/images/arrow_right.svg";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { changePageNumber } from "../../stores/PageNumberReducer";
import toScrollTop from "./../../util/toScrollTop";

interface Props {
  amountOfVenues: number;
  pageNumber: number;
}
const Pagination = ({ amountOfVenues, pageNumber }: Props) => {
  const dispatch = useDispatch();
  const [pageList, setPageList] = useState<number[]>([]);
  const amountOfPages = Math.ceil(amountOfVenues / 5);

  // 화면에 보여질 pagination 번호 계산함수
  const calculatePages = () => {
    const pages = [];
    if (amountOfPages < 6) {
      if (!amountOfPages) {
        pages.push(1);
      } else {
        for (let i = 0; i < amountOfPages; i++) {
          pages.push(i + 1);
        }
      }
      return pages;
    }
    for (let i = 1; i <= 5; i++) {
      pages.push(i);
    }
    return pages;
  };

  // 화면에 보여지는 venue리스트 변경시 pagination 다시계산
  useEffect(() => {
    setPageList(() => calculatePages());
  }, [amountOfVenues]);

  const onPageNumberClick = (currentPage: number) => {
    dispatch(changePageNumber(currentPage));
    toScrollTop();
  };

  const onLeftClick = () => {
    const firstLength = pageList[0];
    if (pageNumber > 1) {
      dispatch(changePageNumber(pageNumber - 1));
      if (pageNumber === firstLength) {
        setPageList((prev) => {
          return prev.map((pageNum) => pageNum - 1);
        });
      }
      toScrollTop();
    }
  };

  const onRightClick = () => {
    const lastLength = pageList[pageList.length - 1];
    if (pageNumber < amountOfPages) {
      dispatch(changePageNumber(pageNumber + 1));
      if (pageNumber === lastLength) {
        setPageList((prev) => {
          return prev.map((pageNum) => pageNum + 1);
        });
      }
      toScrollTop();
    }
  };

  return (
    <S.Container>
      <S.Img src={leftIcon} alt='이전으로' onClick={onLeftClick} />
      {pageList.map((page) => (
        <S.Span
          key={page}
          isClicked={page === pageNumber}
          onClick={() => onPageNumberClick(page)}
        >
          {page}
        </S.Span>
      ))}
      <S.Img src={rightIcon} alt='다음으로' onClick={onRightClick} />
    </S.Container>
  );
};

export default React.memo(Pagination);
