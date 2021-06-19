import { pageview } from "@lib/gtag";
import { siteData } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<title>{siteData.siteMetadata.title}</title>
				<meta
					name="description"
					content={siteData.siteMetadata.description}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
