import { VStack, Heading, UnorderedList, List, Icon } from "@chakra-ui/react";
import { MyTimeline } from "../../data/timeline";
import TimelineStripe from "./TimelineStripe";
import { GiNinjaHead } from "react-icons/gi";

type TimelineProps = {
	id: number;
	title: string;
	description: string;
	date: string;
};

const index = () => {
	return (
		<VStack w="full" alignItems="flex-start" spacing={4}>
			<Heading size="lg">
				My Ninja Way &nbsp;
				<Icon as={GiNinjaHead} />
			</Heading>
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
