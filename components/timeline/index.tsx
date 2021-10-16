import { VStack, Heading } from "@chakra-ui/react";
import { MyTimeline } from "../../data/timeline";

const index = () => {
	return (
		<VStack w="full" alignItems="flex-start" spacing={4}>
			<Heading size="lg">My Ninja Way 🥷</Heading>
		</VStack>
	);
};

export default index;
