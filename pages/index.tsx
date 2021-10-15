import Hero from "../components/hero";
import FavStack from "../components/hero/FavStack";
import Seo from "../components/Seo";

export default function Home() {
	return (
		<>
			<Seo title="Kreivc" />
			<Hero />
			<FavStack />
		</>
	);
}
