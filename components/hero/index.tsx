import {
	Stack,
	VStack,
	Heading,
	Text,
	Button,
	Icon,
	Link,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import HeroImage from "./HeroImage";

const Hero = () => {
	return (
		<Stack
			alignItems="center"
			spacing={12}
			w="full"
			direction={{ base: "column-reverse", md: "row" }}
		>
			<VStack spacing={3} alignItems="flex" w="full">
				<Stack
					spacing={3}
					w="full"
					direction={{ base: "column", md: "row" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					alignItems="center"
				>
					<Heading size="lg">Hi, I’m Ricky.</Heading>
				</Stack>
				<Stack
					spacing={3}
					direction="row"
					justifyContent={{ base: "center", md: "flex-start" }}
				>
					<Button
						as={Link}
						href="https://github.com/kreivc/"
						target="_blank"
						px={{ base: 2, md: 4 }}
						justifyContent={{ base: "flex-start", md: "center" }}
						rightIcon={<Icon as={FiArrowUpRight} />}
					>
						Github
					</Button>
					<Button
						as={Link}
						href="https://www.linkedin.com/in/kreivc/"
						target="_blank"
						px={{ base: 2, md: 4 }}
						justifyContent={{ base: "flex-start", md: "center" }}
						rightIcon={<Icon as={FiArrowUpRight} />}
					>
						Linkedin
					</Button>
					<Button
						px={{ base: 2, md: 4 }}
						justifyContent={{ base: "flex-start", md: "center" }}
						// justifyContent="center"
						rightIcon={<Icon as={FiArrowUpRight} />}
					>
						CV
					</Button>
				</Stack>
			</VStack>
			<HeroImage />
		</Stack>
	);
};

export default Hero;
