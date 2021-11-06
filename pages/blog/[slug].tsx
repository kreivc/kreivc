import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import marked from "marked";
import { GetStaticPaths, GetStaticProps } from "next";
import CloudinaryImg from "../../components/CloudinaryImg";
import Seo from "../../components/Seo";

const BlogPost = ({ data }: { data: IPost }) => {
	const getMarkdownText = () => {
		const rawMarkup = marked(data.content, { sanitize: true });
		return { __html: rawMarkup };
	};
	return (
		<>
			<Seo title={data.title} />
			<Box w="full" alignItems="flex-start" spacing={4}>
				<CloudinaryImg
					publicId={data.cover.provider_metadata.public_id}
					height={1080}
					width={1920}
					rounded={"md"}
				/>
				<Heading>{data.title}</Heading>
				<Box>
					<Box dangerouslySetInnerHTML={getMarkdownText()}></Box>
				</Box>
			</Box>
		</>
	);
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await axios.get(
		"https://kreivc-blog-api.herokuapp.com/posts/"
	);
	return {
		paths: data.map((page: IPost) => ({ params: { slug: page.id } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
	const { data } = await axios.get(
		`https://kreivc-blog-api.herokuapp.com/posts/${slug}`
	);
	return {
		props: {
			data,
		},
		revalidate: 10,
	};
};
