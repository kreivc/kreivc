import {
	Alert,
	Box,
	chakra,
	HTMLChakraProps,
	Kbd,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

const Pre = (props: any) => (
	<chakra.div my="2em" borderRadius="sm" {...props} />
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
	<chakra.code
		apply="mdx.code"
		color={useColorModeValue("blue.500", "blue.200")}
		{...props}
	/>
);

const LinkedHeading = (props: HTMLChakraProps<"h2">) => {
	return (
		<Text>
			<Box
				{...props}
				fontFamily="heading"
				color={useColorModeValue("gray.700", "white")}
			>
				{props.children}
			</Box>
		</Text>
	);
};

const Mdx = {
	h1: (props: any) => <LinkedHeading as="h1" apply="mdx.h1" {...props} />,
	h2: (props: any) => <LinkedHeading as="h2" apply="mdx.h2" {...props} />,
	h3: (props: any) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
	h4: (props: any) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
	hr: (props: any) => <chakra.hr apply="mdx.hr" {...props} />,
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
	a: (props: any) => <chakra.a apply="mdx.a" {...props} />,
	p: (props: any) => <chakra.p apply="mdx.p" {...props} />,
	ul: (props: any) => <chakra.ul apply="mdx.ul" {...props} />,
	ol: (props: any) => <chakra.ol apply="mdx.ul" {...props} />,
	li: (props: any) => <chakra.li pb="4px" {...props} />,
	blockquote: (props: any) => (
		<Box>
			<Alert
				role="none"
				status="warning"
				variant="left-accent"
				as="blockquote"
				rounded="4px"
				{...props}
				mx={-4}
				w="unset"
			/>
		</Box>
	),
};

export default Mdx;
