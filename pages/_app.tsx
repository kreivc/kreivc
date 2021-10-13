import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../styles/theme";
import Layout from "../components/layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default App;
