import Head from "next/head";
import Hero from "../components/hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Kreivc</title>
				<meta name="description" content="Kreivc Porotfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
		</>
	);
}
