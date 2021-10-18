import Seo from "../components/Seo";
import Hero from "../components/hero";
import FavStack from "../components/FavStack";
import Featured from "../components/Featured";
import Timeline from "../components/timeline";
import ContactMe from "../components/ContactMe";

export default function Home() {
	return (
		<>
			<Seo title="Kreivc" />
			<Hero />
			<FavStack />
			<Featured />
			<Timeline />
			<ContactMe />
		</>
	);
}
