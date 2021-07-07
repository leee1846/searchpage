/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ListTitle from "./../ListTitle/index";
import * as S from "./style";
import Item from "./../Item/index";
import Pagination from "./../Pagination/index";
import ToTop from "./../ToTop/index";
import { useSelector } from "react-redux";
import { ReducerType } from "../../stores/rootStore";
import { venueState } from "../../stores/GetVenueReducer";

const List = () => {
  const venueList = useSelector<ReducerType, typeof venueState>(
    (state) => state.venueSlice
  );
  const pageNumber = useSelector<ReducerType, number>(
    (state) => state.pageNumberSlice
  );
  const [venueListPerPage, setVenueListPerPage] = useState(venueList);
  const [scrollReady, setScrollReady] = useState(false);

  useEffect(() => {
    if (venueList) {
      setVenueListPerPage(() => {
        return venueList.filter((item, index) => {
          const nextLength = pageNumber * 5;
          const id = index + 1;
          return id > nextLength - 5 && id <= nextLength;
        });
      });
    } else {
      setVenueListPerPage([]);
    }
  }, [venueList, pageNumber]);

  useEffect(() => {
    const scrollEvent = () => {
      if (document.documentElement.scrollTop > 60) {
        setScrollReady(true);
      } else {
        setScrollReady(false);
      }
    };

    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <S.Container>
      <ListTitle amountOfList={venueList ? venueList?.length : 0} />
      <S.TotalLine>
        <S.PageLine />
      </S.TotalLine>
      {venueListPerPage[0] ? (
        venueListPerPage?.map((item) => {
          const {
            id,
            imageUrl,
            hostName,
            venueName,
            address,
            pricePerHour,
            minHour,
            type,
          } = item;
          return (
            <Item
              key={id}
              imgUrl={imageUrl}
              hostName={hostName}
              venueName={venueName}
              type={type}
              address={address}
              pricePerHour={pricePerHour}
              minHour={minHour}
            />
          );
        })
      ) : (
        <S.Box>
          <p>진행중인 행사가 없습니다.</p>
        </S.Box>
      )}
      <Pagination
        amountOfVenues={venueList ? venueList?.length : 1}
        pageNumber={pageNumber}
      />
      {scrollReady ? <ToTop /> : null}
    </S.Container>
  );
};

export default List;
