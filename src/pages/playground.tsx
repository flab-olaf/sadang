import { Flex, Text } from "@sadang-new/ui";

import HotelMockButton from "../components/playground/HotelMockButton";

function PlaygroundPage() {
  return (
    <Flex direction="column" style={{ maxWidth: 700, margin: "0 auto" }}>
      <Text bold={true} style={{ margin: 40 }}>
        🙈 Playground
      </Text>
      <HotelMockButton />
    </Flex>
  );
}

export default PlaygroundPage;
