import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai expert system",
  description: "Ai expert system for animals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage:
            "url('https://aiworldschool.com/wp-content/uploads/2022/07/MicrosoftTeams-image-13-600x300.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}
