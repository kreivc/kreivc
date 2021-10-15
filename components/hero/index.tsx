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
import FavStack from "./FavStack";
import HeroImage from "./HeroImage";
import HeroPlay from "./HeroPlay";

const Hero = () => {
	return (
		<Stack
			alignItems="center"
			spacing={12}
			w="full"
			direction={{ base: "column-reverse", md: "row" }}
			className="fadeinUp"
		>
			<VStack spacing={3} alignItems="flex" w="full">
				<Stack
					spacing={3}
					w="full"
					direction={{ base: "column", md: "row" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					alignItems="center"
				>
					<Heading size="lg">Hi, I’m Ricky. </Heading>
					<Text as="cite" size="sm">
						/ree-kee/
					</Text>
					<HeroPlay />
				</Stack>
				<Text lineHeight="175%">
					I&lsquo;m a fast learner and hardworking CS Student at Bina Nusantara
					University. I&lsquo;m currently really interested in Frontend, Backend
					also Fullstack Development. Reach me out to talk more about how it
					works!
				</Text>
				<Stack spacing={3} direction="row" justifyContent="flex-start">
					<Button
						as={Link}
						href="https://github.com/kreivc/"
						target="_blank"
						px={{ base: 3, md: 4 }}
						justifyContent={{ base: "flex-start", md: "center" }}
						rightIcon={<Icon as={FiArrowUpRight} />}
					>
						Github
					</Button>
					<Button
						as={Link}
						href="https://www.linkedin.com/in/kreivc/"
						target="_blank"
						px={{ base: 3, md: 4 }}
						justifyContent={{ base: "flex-start", md: "center" }}
						rightIcon={<Icon as={FiArrowUpRight} />}
					>
						Linkedin
					</Button>
					<Button
						px={{ base: 3, md: 4 }}
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
