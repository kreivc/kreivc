function validateEmail(email: string) {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export function validate(name: string, email: string, message: string) {
	if (name === "") {
		return {
			title: "Name cannot be null",
			description: "Input your name first 😉.",
			status: "error",
			duration: 4000,
			isClosable: true,
		};
	} else if (email === "") {
		return {
			title: "Email cannot be null ",
			description: "Input your email 🥲.",
			status: "error",
			duration: 4000,
			isClosable: true,
		};
	} else if (!validateEmail(email)) {
		return {
			title: "Email format invalid",
			description: "Please input your real message email 😔.",
			status: "error",
			duration: 4000,
			isClosable: true,
		};
	} else if (message === "") {
		return {
			title: "Message cannot be null",
			description: "Please input your message 😗.",
			status: "error",
			duration: 4000,
			isClosable: true,
		};
	} else {
		return { status: "success" };
	}
}
