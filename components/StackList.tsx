import { Text, Flex, Tag, WrapItem } from "@chakra-ui/react";

type ItemProps = {
	name: string;
	color: string;
};

type StacklistProps = {
	section: string;
	item: Array<ItemProps>;
};

const StackList: React.FC<StacklistProps> = ({ section, item }) => {
	return (
		<>
			<Text fontSize="xl" fontWeight="bold" pb="2" className="fadeIn6">
				{section}
			</Text>
			<Flex gridGap={2} flexWrap="wrap">
				{item.map(({ name, color }: ItemProps, i) => (
					<WrapItem key={i} className={`fadeIn${i + 1}`}>
						<Tag as="button" colorScheme={color}>
							{name}
						</Tag>
					</WrapItem>
				))}
			</Flex>
		</>
	);
};

export default StackList;
