import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import Seo from "../components/Seo";

const Stack = () => {
	return (
		<Box>
			<Seo title="Stack" />
			<VStack w="full" alignItems="flex-start" spacing={4}>
				<Box className="pulse">
					<Heading>My Stack</Heading>
					<Text>Here&lsquo;s all my stack I can do.</Text>
				</Box>
			</VStack>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure optio!
				Perferendis pariatur atque dicta sunt voluptatem nemo tenetur
				exercitationem ratione quam eum, architecto dolor. Laudantium,
				laboriosam quisquam. Aut, eligendi.
			</Text>
		</Box>
	);
};

export default Stack;
