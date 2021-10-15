import {
	HStack,
	Heading,
	IconButton,
	useColorMode,
	Button,
	Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useAudio } from "react-use";

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [audio, state, controls] = useAudio({
		src: "/toggle.mp3",
		autoPlay: false,
	});

	const play = () => {
		controls.play();
		toggleColorMode();
	};

	const stop = () => {
		controls.pause();
		controls.seek(0);
		toggleColorMode();
	};

	const changeColorMode = () => {
		state.playing ? stop() : play();
	};

	return (
		<HStack as="nav" justifyContent="space-between" alignItems="center" py={3}>
			{audio}
			<NextLink href="/" passHref>
				<Link _focus={{ outline: "none" }}>
					<Heading size="sm">Kreivc.</Heading>
				</Link>
			</NextLink>
			<HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
				<NextLink href="/project" passHref>
					<Button as={Link} size="sm" variant="ghost">
						Project
					</Button>
				</NextLink>
				<NextLink href="/stack" passHref>
					<Button as={Link} size="sm" variant="ghost">
						Stack
					</Button>
				</NextLink>
				<NextLink href="/blog" passHref>
					<Button as={Link} size="sm" variant="ghost">
						Blog
					</Button>
				</NextLink>
				<IconButton
					aria-label="toggle theme"
					icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
					variant="ghost"
					size="sm"
					// onClick={toggleColorMode}
					onClick={changeColorMode}
				/>
			</HStack>
		</HStack>
	);
};

export default Header;
