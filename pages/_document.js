import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
            </Head>
            <body style={{ padding: 0, margin: 0, backgroundColor: "#F8F8F8" }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
