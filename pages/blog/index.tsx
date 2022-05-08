import {
	Box,
	GridItem,
	Heading,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Seo from "../../components/Seo";
import axios from "axios";
import BlogCard from "../../components/BlogCard";

const Blog = ({ data }: { data: IPost[] }) => {
	return (
		<>
			<Seo title="Blog" />
			<VStack w="full" alignItems="flex-start" spacing={4}>
				<Box className="fadeinUp">
					<Heading>Blog</Heading>
					<Text>Some blog that I have made.</Text>
				</Box>
				<SimpleGrid
					columns={{ base: 1, md: 2 }}
					spacing={6}
					w="full"
					columnGap={12}
					rowGap={8}
				>
					{data.map((post: IPost) => (
						<GridItem key={post.id} className="fadeinUp">
							<BlogCard post={post} />
						</GridItem>
					))}
				</SimpleGrid>
			</VStack>
			<Heading className="fadeinDownInfinite">Comming Soon</Heading>
		</>
	);
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await axios.get(
		"https://kreivc-blog-api.herokuapp.com/posts"
	);
	return {
		props: {
			data,
		},
		revalidate: 10,
	};
};
