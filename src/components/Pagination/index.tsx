/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import leftIcon from "../../assets/images/arrow_left.svg";
import rightIcon from "../../assets/images/arrow_right.svg";
import * as S from "./style";

interface Props {
  amountOfVenues: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
}
const Pagination = ({ amountOfVenues, setPageNumber, pageNumber }: Props) => {
  const [currentPages, setCurrentPages] = useState<number[]>([]);

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
    setCurrentPages(() => countPages());
  }, [amountOfVenues]);

  const onPageNumberClick = (pageNumber: number) => {
    setPageNumber(() => pageNumber);
  };

  const onLeftClick = () => {
    const firstLength = currentPages[0];
    if (pageNumber > 1) {
      setPageNumber((prevNumber) => prevNumber - 1);
      if (pageNumber === firstLength) {
        setCurrentPages((prev) => {
          return prev.map((pageNum) => pageNum - 1);
        });
      }
    }
  };

  const onRightClick = () => {
    const lastLength = currentPages[currentPages.length - 1];
    if (pageNumber < totalPages) {
      setPageNumber((prevNumber) => prevNumber + 1);
      if (pageNumber === lastLength) {
        setCurrentPages((prev) => {
          return prev.map((pageNum) => pageNum + 1);
        });
      }
    }
  };

  return (
    <S.Container>
      <S.Img src={leftIcon} alt='이전으로' onClick={onLeftClick} />
      {currentPages.map((page) => (
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
