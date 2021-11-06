import {
	Heading,
	LinkBox,
	LinkOverlay,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import CloudinaryImg from "./CloudinaryImg";

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
				<LinkOverlay href={`/blog/${post.id}`}>
					<Heading>{post.title}</Heading>
					<Text>{post.content}</Text>
				</LinkOverlay>
			</LinkBox>
		</>
	);
};

export default BlogCard;
