import { Box, Heading, VStack, Text, Flex, Tag } from "@chakra-ui/react";
import Seo from "../components/Seo";
import StackList from "../components/StackList";
import { AllStack } from "../data/stack";

type ItemProps = {
	name: string;
	color: string;
};

type AllStackSectionProps = {
	id: number;
	section: string;
	item: Array<ItemProps>;
};

const Stack = () => {
	return (
		<Box>
			<Seo title="Stack" />
			<VStack w="full" alignItems="flex-start" spacing={4} className="fadeinUp">
				<Heading>My Stack</Heading>
				<Text>
					Before we talk about stacks, I want to tell you that all
					languages/stacks/technology below are the result of experiences that I
					think are very valuable, starting from when I graduated from high
					school, organizing, college, part-time and freelance.
				</Text>
			</VStack>
			<VStack spacing={5} alignItems="flex-start" pt="5">
				{AllStack.map(({ id, section, item }: AllStackSectionProps) => (
					<Box key={id} className="fadeinUp">
						<StackList section={section} item={item} />
					</Box>
				))}
			</VStack>
		</Box>
	);
};

export default Stack;
