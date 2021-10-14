import { IconButton, Icon } from "@chakra-ui/react";
import { HiPlay, HiStop } from "react-icons/hi";
import { useAudio } from "react-use";

const HeroPlay = () => {
	const [audio, state, controls] = useAudio({
		src: "/pronounce.mp3",
		autoPlay: false,
	});

	const play = () => {
		controls.play();
	};

	const stop = () => {
		controls.pause();
		controls.seek(0);
	};

	const toggle = () => {
		state.playing ? stop() : play();
	};

	return (
		<>
			{audio}
			<IconButton
				aria-label="Play pronounce.mp3"
				icon={
					<Icon
						color="blue.400"
						as={state.playing ? HiStop : HiPlay}
						w={{ base: 12, md: 9 }}
						h={{ base: 12, md: 9 }}
					/>
				}
				variant="unstyled"
				size="lg"
				rounded="full"
				onClick={toggle}
			/>
		</>
	);
};

export default HeroPlay;
