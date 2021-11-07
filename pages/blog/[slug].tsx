import {
	AspectRatio,
	Box,
	Divider,
	Flex,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";
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
	createdAt: Date;
};

const BlogPost = ({ title, cover, blog, createdAt }: Props) => {
	return (
		<>
			<Seo title={title} />
			<Box w="full" alignItems="flex-start" spacing={4}>
				<Box d="grid" gridRowGap={5}>
					<AspectRatio ratio={16 / 9} w="full">
						<CloudinaryImg
							publicId={cover.provider_metadata.public_id}
							height={1080}
							width={1920}
							rounded={"md"}
						/>
					</AspectRatio>
					<Flex justifyContent="space-between" alignItems="center">
						<Heading>{title}</Heading>
						<Text>{new Date(createdAt).toUTCString().substring(0, 16)}</Text>
					</Flex>
					<Divider />
				</Box>
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
		paths: data.map((page: IPost) => ({ params: { slug: page.slug } })),
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
	const {
		data: { title, cover, content, createdAt },
	} = await axios.get(`https://kreivc-blog-api.herokuapp.com/posts/${slug}`);

	const blog = await serialize(content);

	return {
		props: {
			title,
			cover,
			blog,
			createdAt,
		},
		revalidate: 10,
	};
};
