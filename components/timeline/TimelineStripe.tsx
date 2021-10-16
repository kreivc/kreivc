import { Text, VStack, ListItem, ListIcon, HStack } from "@chakra-ui/react";
import { FaDotCircle } from "react-icons/fa";

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
				<ListIcon as={FaDotCircle} color="green.500" />
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
