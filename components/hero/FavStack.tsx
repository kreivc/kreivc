import {
	Stack,
	Heading,
	Flex,
	Wrap,
	WrapItem,
	Icon,
	Tooltip,
	Box,
} from "@chakra-ui/react";
import { currentTechStack } from "../../data/currentTechStack";
import { IconType } from "react-icons";

type FavTechStackProps = {
	id: number;
	tip: string;
	logo: IconType;
	bg: string;
};

const FavStack = () => {
	return (
		<Stack
			spacing={3}
			w="full"
			direction="column"
			justifyContent="center"
			alignItems="flex-start"
		>
			<Heading size="lg">Current Favorite Tech Stack</Heading>
			<Flex>
				<Wrap spacing={4}>
					{currentTechStack.map(({ id, tip, logo, bg }: FavTechStackProps) => (
						<WrapItem key={id}>
							<Tooltip label={tip}>
								<Box as="span">
									<Icon as={logo} boxSize={12} _hover={{ color: bg }} />
								</Box>
							</Tooltip>
						</WrapItem>
					))}
				</Wrap>
			</Flex>
		</Stack>
	);
};

export default FavStack;
