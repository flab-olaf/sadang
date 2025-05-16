import type { Hotel } from "@models/hotel";
import { getHotels } from "@remote/hotels";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { useCallback } from "react";

function useHotels() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
    error,
  } = useInfiniteQuery<
    {
      hotels: Hotel[];
      lastVisible: QueryDocumentSnapshot<DocumentData, DocumentData>;
    },
    Error,
    InfiniteData<{
      hotels: Hotel[];
      lastVisible: QueryDocumentSnapshot<DocumentData, DocumentData>;
    }>,
    ReturnType<typeof useHotels.getKey>, // TQueryFnData (again for clarity, optional here if same as first)
    QueryDocumentSnapshot<DocumentData, DocumentData> | undefined // TPageParam
  >({
    queryKey: useHotels.getKey(),
    queryFn: ({ pageParam }) => {
      // 50% 확률로 에러 발생
      // if (Math.random() < 0.5) {
      //   throw new Error("랜덤 에러 발생!");
      // }

      return getHotels(pageParam);
    },
    getNextPageParam: (snapshot) => {
      return snapshot.lastVisible;
    },
    initialPageParam: undefined,
    throwOnError: true,
  });

  console.log("error", error);

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return;
    }

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);

  const hotels = data?.pages.map(({ hotels }) => hotels).flat();

  return { data: hotels, loadMore, isFetching, hasNextPage };
}

useHotels.getKey = () => ["hotels"];

export default useHotels;
