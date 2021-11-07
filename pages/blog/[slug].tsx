import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import CloudinaryImg from "../../components/CloudinaryImg";
import Seo from "../../components/Seo";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Mdx from "../../components/Mdx";

type Props = {
	title: string;
	cover: IImage;
	blog: MDXRemoteSerializeResult;
};

const BlogPost = ({ title, cover, blog }: Props) => {
	return (
		<>
			<Seo title={title} />
			<Box w="full" alignItems="flex-start" spacing={4}>
				<CloudinaryImg
					publicId={cover.provider_metadata.public_id}
					height={1080}
					width={1920}
					rounded={"md"}
				/>
				<Heading>{title}</Heading>
				<Box>
					<MDXRemote {...blog} components={Mdx} />
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
		revalidate: 10,
	};
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
	const {
		data: { title, cover, content },
	} = await axios.get(`https://kreivc-blog-api.herokuapp.com/posts/${slug}`);

	const blog = await serialize(content);

	return {
		props: {
			title,
			cover,
			blog,
		},
		revalidate: 10,
	};
};
