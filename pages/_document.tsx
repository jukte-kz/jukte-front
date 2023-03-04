import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Jukte.kz</title>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon-192x192.png"></link>
				<meta name="theme-color" content="#00abc2" />
				<script type="module" src="https://test.biometric.kz/liveness-detection/DistancePackage.js"></script>
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}
