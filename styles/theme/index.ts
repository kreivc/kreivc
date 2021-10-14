import {
	extendTheme,
	theme as base,
	HeadingProps,
	TextProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
	sizes: {
		18: "4.5rem",
	},
	components: {
		Heading: {
			baseStyle: (props: HeadingProps) => ({
				color: mode("gray.700", "white")(props),
			}),
		},
		Text: {
			baseStyle: (props: TextProps) => ({
				color: mode("gray.700", "white")(props),
			}),
		},
	},
	colors: {
		twitter: "#1EA1F1",
	},
	fonts: {
		heading: `Poppins, ${base.fonts.heading}`,
		body: `Inter, ${base.fonts.body}`,
	},
	mdx: {
		h1: {
			fontSize: "3xl",
		},
		h2: {
			fontSize: "xl",
		},
		h3: {
			fontSize: "md",
		},
		h4: {
			fontSize: "xs",
		},
	},
});

export default theme;
