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
  const [pageNumber, setPageNumber] = useState(1);
  const [venueListPerPage, setVenueListPerPage] = useState(venueList);

  useEffect(() => {
    setVenueListPerPage(() =>
      venueList.filter((item) => {
        const nextLength = pageNumber * 5;

        return item.id > nextLength - 5 && item.id <= nextLength;
      })
    );
  }, [pageNumber]);

  return (
    <S.Container>
      <ListTitle amountOfList={venueList.length} />
      <S.TotalLine>
        <S.PageLine />
      </S.TotalLine>
      {venueListPerPage.map((item) => {
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
      })}
      <Pagination
        amountOfVenues={venueList.length}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
      <ToTop />
    </S.Container>
  );
};

export default List;
