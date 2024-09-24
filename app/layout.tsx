import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Chilanka, Poppins } from "next/font/google";
import { Providers } from "@/app/providers/providers";
import Footer from "@/components/footer";
import { AppProvider } from "./context/usercontext";
import ClientLayout from "./clientlayout";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
	title: "The Coder'z",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className} style={{ scrollBehavior: "smooth" }}>
				<Providers>
					<AppProvider>
						<ClientLayout>
							{
								children
							}
						</ClientLayout>
					</AppProvider>
				</Providers>
			</body>
		</html>
	);
}
