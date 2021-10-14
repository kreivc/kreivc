import { Box, AspectRatio } from "@chakra-ui/react";

// import Me from "./images/me.jpg";
// import Image from "next/image";
import CloudinaryImg from "../CloudinaryImg";

const HeroImage = () => {
	return (
		<AspectRatio flexShrink={0} ratio={1} w={56} h={56}>
			<CloudinaryImg
				publicId="kreivc/ik1lbhvsjdvnyegylphj"
				height={3448}
				width={3448}
				rounded={true}
			/>
		</AspectRatio>
	);
};

export default HeroImage;
