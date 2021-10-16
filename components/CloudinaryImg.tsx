import Image from "next/image";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
import { buildUrl } from "cloudinary-build-url";
import { Box } from "@chakra-ui/react";
// import { useState } from "react";

type CloudinaryImgProps = {
	publicId: string;
	height: number;
	width: number;
	rounded: string;
};

const CloudinaryImg = ({
	publicId,
	height,
	width,
	rounded,
}: CloudinaryImgProps) => {
	// const [isOpen, setIsOpen] = useState(false);

	const urlBlurred = buildUrl(publicId, {
		cloud: {
			cloudName: "dor0udr7t",
		},
		transformations: {
			effect: {
				name: "blur:1000",
			},
			quality: 1,
		},
	});

	const url = buildUrl(publicId, {
		cloud: {
			cloudName: "dor0udr7t",
		},
	});

	// const preview = true;

	return (
		<>
			<Box
				pos="relative"
				height="0"
				pt={`${(height / width) * 100}%`}
				bgImage={`url(${urlBlurred})`}
				bgPos="center center"
				bgRepeat="no-repeat"
				bgSize="100%"
				cursor="pointer"
				rounded={rounded}
				// onClick={preview ? () => setIsOpen(true) : undefined}
			>
				<Box pos="absolute" top={0} left={0}>
					<Image
						width={width}
						height={height}
						src={url}
						alt="Project Image"
						unoptimized={true}
						objectFit="cover"
					/>
				</Box>
			</Box>
			{/* {isOpen && (
					<Lightbox mainSrc={url} onCloseRequest={() => setIsOpen(false)} />
			)} */}
		</>
	);
};

export default CloudinaryImg;
