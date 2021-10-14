import Head from "next/head";

type SeoProps = {
	title: string;
};

const Seo = ({ title }: SeoProps) => {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* <!-- Primary Meta Tags --> */}
			<title>{title}</title>
			<meta name="title" content="Kreivc" />
			<meta
				name="description"
				content="Hi, I’m Ricky. I‘m a fast learner and hardworking CS Student at Bina Nusantara University. I‘m currently really interested in Frontend, Backend also Fullstack Development. Reach me out to talk more about how it works!"
			/>

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.kreivc.com/" />
			<meta property="og:title" content="Kreivc" />
			<meta
				property="og:description"
				content="Hi, I’m Ricky. I‘m a fast learner and hardworking CS Student at Bina Nusantara University. I‘m currently really interested in Frontend, Backend also Fullstack Development. Reach me out to talk more about how it works!"
			/>
			<meta property="og:image" content="https://i.ibb.co/D1CzVpZ/logo.jpg" />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://www.kreivc.com/" />
			<meta property="twitter:title" content="Kreivc" />
			<meta
				property="twitter:description"
				content="Hi, I’m Ricky. I‘m a fast learner and hardworking CS Student at Bina Nusantara University. I‘m currently really interested in Frontend, Backend also Fullstack Development. Reach me out to talk more about how it works!"
			/>
			<meta
				property="twitter:image"
				content="https://i.ibb.co/D1CzVpZ/logo.jpg"
			/>

			{/* --- favicon --- */}

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/favicon/safari-pinned-tab.svg"
				color="#5bbad5"
			/>
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
	);
};

export default Seo;
