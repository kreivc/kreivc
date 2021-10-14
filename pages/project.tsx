import { GridItem, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

type pData = {
	id: number;
	title: string;
	image: string;
	description: string;
	link: string;
};

const { ProjectList } = require("../data/project");

const Project = () => {
	return (
		<VStack w="full" alignItems="flex-start" spacing={4}>
			<Heading>My Projects</Heading>
			<Text>Some projects that I have made.</Text>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={6}
				w="full"
				columnGap={12}
				rowGap={8}
			>
				{ProjectList.map(({ id, title, image, description, link }: pData) => (
					<GridItem key={id}>
						<ProjectCard
							title={title}
							image={image}
							description={description}
							link={link}
							rounded={false}
						/>
					</GridItem>
				))}
			</SimpleGrid>
		</VStack>
	);
};

export default Project;
