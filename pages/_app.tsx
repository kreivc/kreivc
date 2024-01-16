import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import Layout from "../components/layout";
import "../styles/globals.css";
import "animate.css";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			eval(`(function (d) {
				var BASE_URL = "https://crm-widget.collabo.dev";
				var s = d.createElement("script");
				s.src = BASE_URL + "/sdk.js";
				s.defer = true;
				s.async = true;
				d.body.appendChild(s);
				s.onload = function () {
					// @ts-ignore
					window.WebSDK.run({
						baseUrl: BASE_URL,
						id: "29a9b22e-a8f1-4343-93a6-5d36acef845d",
					});
				};
			})(window.document)`);
		}
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default App;
