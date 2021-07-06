import React from "react";
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
  console.log(venueList);

  return (
    <S.Container>
      <ListTitle />
      <S.TotalLine>
        <S.PageLine />
      </S.TotalLine>
      {venueList.map((item) => {
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
      <Pagination />
      <ToTop />
    </S.Container>
  );
};

export default List;
