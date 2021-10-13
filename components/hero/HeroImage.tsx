import { Box, AspectRatio } from "@chakra-ui/react";

import Me from "./images/me.jpg";
import Image from "next/image";

const HeroImage = () => {
	return (
		<AspectRatio flexShrink={0} ratio={1} w={56} h={56}>
			<Box rounded="full">
				<Image
					alt="Ricky"
					src="/images/me.jpg"
					layout="fill"
					objectFit="cover"
					loading="eager"
					objectPosition={"100% 100%"}
				/>
			</Box>
		</AspectRatio>
	);
};

export default HeroImage;
