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
	useColorModeValue,
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
	sc: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	image,
	description,
	link,
	rounded,
	finish,
	sc,
}) => {
	const width = 1920;
	const height = 1080;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<LinkBox
			p="5"
			rounded="md"
			boxShadow={useColorModeValue(
				"lg",
				"rgba(252, 252, 252, 0.25) 0px 0px 5px 1px, rgba(255, 255, 255, 0.1) 0px 0px 1px 0px"
			)}
		>
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
					<Text fontSize="sm" color="gray.500" noOfLines={[3, 4]}>
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
					sc={sc}
				/>
			</VStack>
		</LinkBox>
	);
};

export default ProjectCard;
