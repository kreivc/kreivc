import {
	Heading,
	LinkBox,
	LinkOverlay,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import CloudinaryImg from "./CloudinaryImg";
import Link from "next/link";

const BlogCard = ({ post }: { post: IPost }) => {
	return (
		<>
			<LinkBox
				p="5"
				rounded="md"
				boxShadow={useColorModeValue(
					"lg",
					"rgba(252, 252, 252, 0.25) 0px 0px 5px 1px, rgba(255, 255, 255, 0.1) 0px 0px 1px 0px"
				)}
			>
				<CloudinaryImg
					publicId={post.cover.provider_metadata.public_id}
					height={1080}
					width={1920}
					rounded={"md"}
				/>
				<Stack>
					<Link href={`/blog/${post.id}`} passHref>
						<LinkOverlay mt="3">
							<Heading size="sm">{post.title}</Heading>
						</LinkOverlay>
					</Link>
					<Text fontSize="sm" color="gray.500" noOfLines={[3, 4]}>
						{post.content}
					</Text>
				</Stack>
			</LinkBox>
		</>
	);
};

export default BlogCard;
