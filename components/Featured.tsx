import {
	Button,
	Divider,
	GridItem,
	Heading,
	SimpleGrid,
	VStack,
	Link,
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import { FeaturedProjects } from "../data/project";
import NextLink from "next/link";

type pData = {
	id: number;
	title: string;
	image: string;
	description: string;
	link: string;
	finish: boolean;
};

const Featured = () => {
	return (
		<VStack w="full" alignItems="flex-start" spacing={4}>
			<Heading size="lg">Featured Projects 💙</Heading>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={6}
				w="full"
				columnGap={12}
				rowGap={8}
			>
				{FeaturedProjects.map(
					({ id, title, image, description, link, finish }: pData) => (
						<GridItem key={id}>
							<ProjectCard
								title={title}
								image={image}
								description={description}
								link={link}
								rounded={"md"}
								finish={finish}
							/>
						</GridItem>
					)
				)}
			</SimpleGrid>
			<NextLink href="/project" passHref>
				<Button as={Link} variant="ghost" alignSelf="center" w="100%">
					See More..
				</Button>
			</NextLink>
			<Divider />
		</VStack>
	);
};

export default Featured;
