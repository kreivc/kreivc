import { VStack, Heading, UnorderedList, List } from "@chakra-ui/react";
import { MyTimeline } from "../../data/timeline";
import TimelineStripe from "./TimelineStripe";

type TimelineProps = {
	id: number;
	title: string;
	description: string;
	date: string;
};

const index = () => {
	return (
		<VStack w="full" alignItems="flex-start" spacing={4}>
			<Heading size="lg">My Ninja Way 🥷</Heading>
			<UnorderedList>
				{MyTimeline.map(({ id, title, description, date }: TimelineProps) => (
					<List key={id} py="3">
						<TimelineStripe
							title={title}
							description={description}
							date={date}
						/>
					</List>
				))}
			</UnorderedList>
		</VStack>
	);
};

export default index;
