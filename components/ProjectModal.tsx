import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Box,
	Text,
	HStack,
	Heading,
	Badge,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";
import CloudinaryImg from "./CloudinaryImg";

type ModalProps = {
	btnRef: MutableRefObject<undefined>;
	onClose: () => void;
	isOpen: boolean;
	title: string;
	image: string;
	description: string;
	link: string;
	rounded: string;
	finish: boolean;
	sc: string;
};

const ProjectModal = ({
	btnRef,
	onClose,
	isOpen,
	title,
	image,
	description,
	link,
	rounded,
	finish,
	sc,
}: ModalProps) => {
	const width = 3840;
	const height = 2160;

	return (
		<Modal
			size="4xl"
			onClose={onClose}
			finalFocusRef={btnRef}
			isOpen={isOpen}
			isCentered
			scrollBehavior="inside"
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<HStack>
						<Heading fontSize="2xl">{title}</Heading>
						<Badge
							rounded="full"
							px="2"
							colorScheme={finish ? "teal" : "orange"}
						>
							{finish ? "Finish" : "Ongoing"}
						</Badge>
					</HStack>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Box>
						<CloudinaryImg
							publicId={image}
							height={height}
							width={width}
							rounded={rounded}
						/>
						<Text pt="3">{description}</Text>
					</Box>
				</ModalBody>
				<ModalFooter w="full" d="flex" gridGap={4}>
					<Button flexGrow={1} as="a" href={sc} target="_blank">
						SourceCode
					</Button>
					<Button flexGrow={1} as="a" href={link} target="_blank">
						Open
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ProjectModal;
