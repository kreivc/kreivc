import {
	Stack,
	Heading,
	Flex,
	Wrap,
	WrapItem,
	Icon,
	Tooltip,
	Box,
	Button,
	Link,
} from "@chakra-ui/react";
import { CurrentTechStack } from "../data/stack";
import { IconType } from "react-icons";
import NextLink from "next/link";
import { IoArrowDownOutline } from "react-icons/io5";

type FavTechStackProps = {
	id: number;
	tip: string;
	logo: IconType;
	bg: string;
};

const FavStack = () => {
	return (
		<>
			<Stack
				spacing={5}
				w="full"
				direction="column"
				justifyContent="center"
				alignItems="center"
				className="fadeinDown"
				pt={{ base: "0", md: "7" }}
			>
				<Heading size="lg">Current Favorite Tech Stack</Heading>
				<Flex>
					<Wrap spacing={4}>
						{CurrentTechStack.map(
							({ id, tip, logo, bg }: FavTechStackProps) => (
								<WrapItem key={id}>
									<Tooltip label={tip} hasArrow>
										<Box as="span">
											<Icon
												as={logo}
												boxSize={12}
												_hover={bg == "#000000" ? {} : { color: bg }}
											/>
										</Box>
									</Tooltip>
								</WrapItem>
							)
						)}
					</Wrap>
				</Flex>
				<NextLink href="/stack" passHref>
					<Button as={Link}>See More..</Button>
				</NextLink>
			</Stack>
			<Button
				className="fadeinDownInfinite"
				pos="relative"
				rounded="md"
				variant="unstyled"
				_focus={{ ring: "none" }}
				_hover={{ color: "blue.400" }}
				onClick={(e) => {
					e.preventDefault();
					window.scrollBy({
						top: window.innerHeight,
						left: 0,
						behavior: "smooth",
					});
				}}
			>
				<Icon as={IoArrowDownOutline} boxSize={8} />
			</Button>
		</>
	);
};

export default FavStack;
