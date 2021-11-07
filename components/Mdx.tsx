import {
	Alert,
	Box,
	chakra,
	Code,
	Divider,
	Heading,
	Kbd,
	Link,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
	useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Pre = (props: any) => (
	<Code
		display="block"
		whiteSpace="pre"
		my="2em"
		p="3"
		borderRadius="sm"
		{...props}
	/>
);

const Table = (props: any) => (
	<chakra.div overflowX="auto">
		<chakra.table textAlign="left" mt="32px" width="full" {...props} />
	</chakra.div>
);

const THead = (props: any) => (
	<chakra.th
		bg={useColorModeValue("gray.50", "whiteAlpha.100")}
		fontWeight="semibold"
		p={2}
		fontSize="sm"
		{...props}
	/>
);

const TData = (props: any) => (
	<chakra.td
		p={2}
		borderTopWidth="1px"
		borderColor="inherit"
		fontSize="sm"
		whiteSpace="normal"
		{...props}
	/>
);

const InlineCode = (props: any) => (
	<Code color={useColorModeValue("blue.500", "blue.200")} {...props} />
);

const CustomLink = (props: any) => {
	const href = props.href;
	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	if (isInternalLink) {
		return (
			<NextLink href={href} passHref>
				<Link color={"blue.500"} {...props} />
			</NextLink>
		);
	}

	return <Link color={"blue.500"} isExternal {...props} />;
};

const Quote = (props: any) => {
	return (
		<Alert
			my={4}
			w="98%"
			variant="left-accent"
			status="info"
			rounded="sm"
			css={{
				"> *:first-of-type": {
					marginTop: 0,
					marginLeft: 8,
				},
			}}
			{...props}
		/>
	);
};

const Mdx = {
	h1: (props: any) => <Heading as="h1" size="2xl" my={5} {...props} />,
	h2: (props: any) => <Heading as="h2" size="xl" my={5} {...props} />,
	h3: (props: any) => <Heading as="h3" size="md" my={5} {...props} />,
	h4: (props: any) => <Heading as="h4" size="sm" my={5} {...props} />,
	h5: (props: any) => <Heading as="h5" size="xs" my={5} {...props} />,
	hr: (props: any) => <Divider {...props} />,
	inlineCode: InlineCode,
	strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
	pre: Pre,
	kbd: Kbd,
	br: ({ reset, ...props }: any) => (
		<Box
			as={reset ? "br" : undefined}
			height={reset ? undefined : "24px"}
			{...props}
		/>
	),
	table: Table,
	th: THead,
	td: TData,
	a: (props: any) => <CustomLink {...props} />,
	p: (props: any) => <Text {...props} />,
	ul: (props: any) => <UnorderedList {...props} />,
	ol: (props: any) => <OrderedList {...props} />,
	li: (props: any) => <ListItem pb="4px" {...props} />,
	blockquote: (props: any) => <Quote {...props} />,
};

export default Mdx;
