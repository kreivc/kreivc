import {
	Box,
	chakra,
	HTMLChakraProps,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";

const LinkedHeading = (props: HTMLChakraProps<"h2">) => {
	return (
		<Link href={`#asd`} name={"asd"} role="group">
			<Box
				{...props}
				display="inline"
				fontFamily="heading"
				color={useColorModeValue("gray.700", "white")}
			>
				{props.children}
			</Box>
			<chakra.span
				aria-label="anchor"
				color="teal.500"
				userSelect="none"
				fontWeight="normal"
				outline="none"
				_focus={{ opacity: 1, boxShadow: "outline" }}
				opacity={0}
				_groupHover={{ opacity: 1 }}
				ml="0.375rem"
			>
				#
			</chakra.span>
		</Link>
	);
};

const Mdx = {
	h1: (props: any) => <LinkedHeading as="h1" apply="mdx.h1" {...props} />,
	h2: (props: any) => <LinkedHeading as="h2" apply="mdx.h2" {...props} />,
	h3: (props: any) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
	h4: (props: any) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
	hr: (props: any) => <chakra.hr apply="mdx.hr" {...props} />,
};

export default Mdx;
