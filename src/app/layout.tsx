import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/wrapper";
import Providers from "@/provider/providers";
import { Toaster } from "react-hot-toast";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-faustina",
});

export const metadata: Metadata = {
  title: "Valentina - Find Your Perfect Match",
  description:
    "Discover your ideal partner with Valentina, the ultimate matchmaking platform.",
  openGraph: {
    title: "Valentina - Find Your Perfect Match",
    description:
      "Discover your ideal partner with Valentina, the ultimate matchmaking platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/valentina-bg.png" sizes="any" />
      </head>
      <body className={lato.className}>
        <Providers>
          <Toaster />
          <Wrapper>{children}</Wrapper>
        </Providers>
      </body>
    </html>
  );
}
