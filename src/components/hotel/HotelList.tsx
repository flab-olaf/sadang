import { Flex, Image, Text } from "@sadang-new/ui";
import ListRow from "@shared/components/ListRow";
import Spacing from "@shared/components/Spacing";
import { Fragment } from "react/jsx-runtime";
import useHotels from "@shared/hooks/useHotels";
import InfiniteScroll from "react-infinite-scroll-component";
import HotelSkeleton from "./Skeleton";

function HotelList() {
  const { data: hotels, loadMore, hasNextPage } = useHotels();

  if (hotels == null) {
    return <HotelSkeleton />;
  }

  return (
    <InfiniteScroll
      dataLength={hotels.length}
      hasMore={hasNextPage}
      loader={<HotelSkeleton size={3} />}
      next={loadMore}
      scrollThreshold="100px"
    >
      {hotels.map((hotel, idx) => (
        <Fragment key={hotel.id}>
          <ListRow
            contents={
              <Flex direction="column">
                <ListRow.Texts title={hotel.name} subTitle={hotel.comment} />
              </Flex>
            }
            right={
              <Flex direction="column">
                <Flex direction="column">
                  <Image src={hotel.image} />
                </Flex>
                <Text size="t6"> {hotel.price}원</Text>
              </Flex>
            }
          />
          {hotels.length - 1 === idx ? null : <Spacing />}
        </Fragment>
      ))}
    </InfiniteScroll>
  );
}

export default HotelList;
