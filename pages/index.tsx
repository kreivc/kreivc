import Hero from "../components/hero";
import FavStack from "../components/hero/FavStack";
import Seo from "../components/Seo";
import { Box } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<Seo title="Kreivc" />
			<Hero />
			<FavStack />
			<Box minH="100vh"></Box>
		</>
	);
}
