import Head from "next/head";
import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

type SeoProps = {
	title: string;
};

const Seo = ({ title }: SeoProps) => {
	const [dark, setDark] = useState(false);
	const { colorMode } = useColorMode();

	useEffect(() => {
		if (colorMode === "dark") setDark(true);
		else if (colorMode === "light") setDark(false);
		else setDark(false);
	}, [colorMode]);
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{title}</title>
			<meta name="title" content="Kreivc" />
			<meta
				name="description"
				content="Hi, I’m Ricky. I‘m a fast learner and hardworking CS Student at Bina Nusantara University. I‘m currently really interested in Frontend, Backend also Fullstack Development. Reach me out to talk more about how it works!"
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.kreivc.com/" />
			<meta property="og:title" content="Kreivc" />
			<meta
				property="og:description"
				content="Hi, I’m Ricky. I‘m a fast learner and hardworking CS Student at Bina Nusantara University. I‘m currently really interested in Frontend, Backend also Fullstack Development. Reach me out to talk more about how it works!"
			/>
			<meta property="og:image" content="https://i.ibb.co/D1CzVpZ/logo.jpg" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://www.kreivc.com/" />
			<meta property="twitter:title" content="Kreivc" />
			<meta
				property="twitter:description"
				content="Hi, I’m Ricky. I‘m a fast learner and hardworking CS Student at Bina Nusantara University. I‘m currently really interested in Frontend, Backend also Fullstack Development. Reach me out to talk more about how it works!"
			/>
			<meta
				property="twitter:image"
				content="https://i.ibb.co/D1CzVpZ/logo.jpg"
			/>

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={
					dark
						? "/favicon/apple-touch-icon.png"
						: "/favicon/white/apple-touch-icon.png"
				}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={
					dark
						? "/favicon/favicon-32x32.png"
						: "/favicon/white/favicon-32x32.png"
				}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={
					dark
						? "/favicon/favicon-16x16.png"
						: "/favicon/white/favicon-16x16.png"
				}
			/>
			<link
				rel="manifest"
				href={
					dark ? "/favicon/site.webmanifest" : "/favicon/white/site.webmanifest"
				}
			/>
			<link
				rel="mask-icon"
				href={
					dark
						? "/favicon/safari-pinned-tab.svg"
						: "/favicon/white/safari-pinned-tab.svg"
				}
				color="#5bbad5"
			/>
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
	);
};

export default Seo;
