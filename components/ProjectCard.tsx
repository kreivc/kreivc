import { Box, Text } from "@chakra-ui/react";
import CloudinaryImg from "./CloudinaryImg";

type ProjectCardProps = {
	title: string;
	image: string;
	description: string;
	link: string;
	rounded: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	image,
	description,
	link,
	rounded,
}) => {
	const width = 3840;
	const height = 2160;

	return (
		<Box>
			<CloudinaryImg
				publicId={image}
				width={width}
				height={height}
				rounded={rounded}
			/>
			<Text>{title}</Text>
			<Text>{description}</Text>
			<Text>{link}</Text>
		</Box>
	);
};

export default ProjectCard;
