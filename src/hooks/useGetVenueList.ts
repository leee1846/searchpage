/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { venueState } from "../stores/GetVenueReducer";

type returnType = [typeof venueState, boolean, boolean];
const useGetVenueList = (
  venueList: typeof venueState,
  currentPageNumber: number
): returnType => {
  const [prevList, setPrevList] = useState<null | typeof venueList>(null);
  const [venueListPerPage, setVenueListPerPage] = useState(venueList);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (prevList !== venueList) setIsLoading(true);
    setPrevList(() => venueList);
    if (venueList) {
      setVenueListPerPage(() => {
        return venueList.filter((item, index) => {
          const nextPageLength = currentPageNumber * 5;
          const venueId = index + 1;
          return venueId > nextPageLength - 5 && venueId <= nextPageLength;
        });
      });
    } else {
      setVenueListPerPage([]);
    }
  }, [venueList, currentPageNumber]);

  useEffect(() => {
    if (prevList === venueList) setIsLoading(false);
  }, [prevList]);

  return [venueListPerPage, isError, isLoading];
};

export default useGetVenueList;
