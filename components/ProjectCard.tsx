import {
	LinkBox,
	VStack,
	AspectRatio,
	LinkOverlay,
	Heading,
	Text,
	Flex,
	Button,
	Badge,
	useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import CloudinaryImg from "./CloudinaryImg";
import ProjectModal from "./ProjectModal";

type ProjectCardProps = {
	title: string;
	image: string;
	description: string;
	link: string;
	rounded: string;
	finish: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	image,
	description,
	link,
	rounded,
	finish,
}) => {
	const width = 1920;
	const height = 1080;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<LinkBox p="5" rounded="md" boxShadow="lg">
			<VStack spacing={4} alignItems="flex-start">
				<AspectRatio ratio={16 / 9} w="full">
					<CloudinaryImg
						publicId={image}
						width={width}
						height={height}
						rounded={rounded}
					/>
				</AspectRatio>
				<VStack spacing={2} alignItems="flex-start">
					<LinkOverlay href={link} target="_blank" d="flex" gridGap={2}>
						<Heading size="sm">{title}</Heading>
						<Badge
							rounded="full"
							px="2"
							colorScheme={finish ? "teal" : "orange"}
						>
							{finish ? "Finish" : "Ongoing"}
						</Badge>
					</LinkOverlay>
					<Text fontSize="sm" color="gray.500" noOfLines={[1, 4]}>
						{description}
					</Text>
					<Flex w="full" gridGap={3}>
						<Button flex={1} ref={btnRef} onClick={onOpen}>
							View More
						</Button>
						<Button flex={1} as="a" href={link} target="_blank">
							Open
						</Button>
					</Flex>
				</VStack>
				<ProjectModal
					btnRef={btnRef}
					onClose={onClose}
					isOpen={isOpen}
					title={title}
					image={image}
					description={description}
					link={link}
					rounded={rounded}
					finish={finish}
				/>
			</VStack>
		</LinkBox>
	);
};

export default ProjectCard;
