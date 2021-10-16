import { Text, VStack, ListItem, ListIcon, HStack } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

type TimelineProps = {
	title: string;
	description: string;
	date: string;
};

const TimelineStripe: React.FC<TimelineProps> = ({
	title,
	description,
	date,
}) => {
	return (
		<ListItem>
			<HStack d={date != "" ? "flex" : "none"}>
				<ListIcon as={MdCheckCircle} color="green.500" />
				<Text>{date}</Text>
			</HStack>
			<VStack spacing={2} alignItems="flex-start">
				<Text fontWeight="bold">{title}</Text>
				<Text>{description}</Text>
			</VStack>
		</ListItem>
	);
};

export default TimelineStripe;
