import emailjs from "emailjs-com";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	GridItem,
	Heading,
	Input,
	SimpleGrid,
	Text,
	Textarea,
	useBreakpointValue,
	useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiCheck } from "react-icons/hi";

const ContactMe = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [state, setState] = useState<"initial" | "submitting" | "success">(
		"initial"
	);
	const colSpan = useBreakpointValue({ base: 2, md: 1 });

	const sendEmail = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		setState("submitting");

		setTimeout(() => {
			emailjs.send(
				process.env.NEXT_PUBLIC_EMAIL_SERVICE,
				process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
				{ name, email, message },
				process.env.NEXT_PUBLIC_API_KEY
			);

			setState("success");
		}, 1000);
	};

	return (
		<Box w="full">
			<Heading size="lg" pb="3">
				Contact Me 🤙
			</Heading>
			<Flex
				direction={{ base: "column", md: "row" }}
				p={{ base: "4", md: "7" }}
				rounded="md"
				boxShadow={useColorModeValue(
					"lg",
					"rgba(252, 252, 252, 0.25) 0px 0px 5px 1px, rgba(255, 255, 255, 0.1) 0px 0px 1px 0px"
				)}
			>
				<Box as="form" w="100%" onSubmit={sendEmail}>
					<SimpleGrid columns={2} columnGap={3} rowGap={4} w="full">
						<GridItem colSpan={colSpan}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input
									placeholder="Name"
									type="text"
									onChange={(e) => setName(e.target.value)}
									value={name}
									disabled={state !== "initial"}
								/>
							</FormControl>
						</GridItem>
						<GridItem colSpan={colSpan}>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input
									placeholder="Email"
									type="email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									disabled={state !== "initial"}
								/>
							</FormControl>
						</GridItem>
						<GridItem colSpan={2}>
							<FormControl>
								<FormLabel>Message</FormLabel>
								<Textarea
									placeholder="Message"
									onChange={(e) => setMessage(e.target.value)}
									value={message}
									disabled={state !== "initial"}
								/>
							</FormControl>
						</GridItem>
						<GridItem
							d="flex"
							colSpan={2}
							justifyContent="space-between"
							alignItems="center"
							w="full"
						>
							<Text>
								{state === "success"
									? "I‘ll reply you asap 😉"
									: "Feel free to ask anything 🤙"}
							</Text>
							<Button
								// colorScheme={state === "success" ? "green" : "blue"}
								color="white"
								bg={state === "success" ? "green.500" : "blue.500"}
								_hover={{ bg: state === "success" ? "green.400" : "blue.400" }}
								_active={{ bg: state === "success" ? "green.400" : "blue.400" }}
								isLoading={state === "submitting"}
								w="25%"
								type={state === "success" ? "button" : "submit"}
							>
								{state === "success" ? <HiCheck /> : "Send"}
							</Button>
						</GridItem>
					</SimpleGrid>
				</Box>
			</Flex>
		</Box>
	);
};

export default ContactMe;
