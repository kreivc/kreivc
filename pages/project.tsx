import { GridItem, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import Head from "next/head";

type pData = {
	id: number;
	title: string;
	image: string;
	description: string;
	link: string;
	finish: boolean;
};

const { ProjectList } = require("../data/project");

const Project = () => {
	return (
		<>
			<Head>
				<title>Project</title>
			</Head>
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
					{ProjectList.map(
						({ id, title, image, description, link, finish }: pData) => (
							<GridItem key={id}>
								<ProjectCard
									title={title}
									image={image}
									description={description}
									link={link}
									rounded={false}
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
