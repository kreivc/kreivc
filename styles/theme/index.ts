import {
	extendTheme,
	theme as base,
	HeadingProps,
	TextProps,
	ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

export const theme = extendTheme({
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
});
