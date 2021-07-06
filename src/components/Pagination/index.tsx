/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import leftIcon from "../../assets/images/arrow_left.svg";
import rightIcon from "../../assets/images/arrow_right.svg";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { changePageNumber } from "../../stores/PageNumberReducer";

interface Props {
  amountOfVenues: number;
  pageNumber: number;
}
const Pagination = ({ amountOfVenues, pageNumber }: Props) => {
  const dispatch = useDispatch();
  const [pageList, setPageList] = useState<number[]>([]);
  const totalPages = Math.ceil(amountOfVenues / 5);

  const countPages = () => {
    const countedPages = [];
    if (totalPages < 6) {
      if (!totalPages) {
        countedPages.push(1);
      } else {
        for (let i = 0; i < totalPages; i++) {
          countedPages.push(i + 1);
        }
      }
      return countedPages;
    }
    for (let i = 1; i <= 5; i++) {
      countedPages.push(i);
    }
    return countedPages;
  };

  useEffect(() => {
    setPageList(() => countPages());
  }, [amountOfVenues]);

  const onPageNumberClick = (currentPage: number) => {
    dispatch(changePageNumber(currentPage));
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
    }
  };

  const onRightClick = () => {
    const lastLength = pageList[pageList.length - 1];
    if (pageNumber < totalPages) {
      dispatch(changePageNumber(pageNumber + 1));
      if (pageNumber === lastLength) {
        setPageList((prev) => {
          return prev.map((pageNum) => pageNum + 1);
        });
      }
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

export default Pagination;
