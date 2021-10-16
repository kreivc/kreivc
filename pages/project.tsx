import {
	Box,
	GridItem,
	Heading,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";
import { ProjectList } from "../data/project";

type pData = {
	id: number;
	title: string;
	image: string;
	description: string;
	link: string;
	finish: boolean;
};

const Project = () => {
	return (
		<>
			<Seo title="Project" />
			<VStack w="full" alignItems="flex-start" spacing={4}>
				<Box className="fadeinUp">
					<Heading>My Projects</Heading>
					<Text>Some projects that I have made.</Text>
				</Box>
				<SimpleGrid
					columns={{ base: 1, md: 2 }}
					spacing={6}
					w="full"
					columnGap={12}
					rowGap={8}
				>
					{ProjectList.map(
						({ id, title, image, description, link, finish }: pData) => (
							<GridItem key={id} className="fadeinUp">
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
			</VStack>
		</>
	);
};

export default Project;
