import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "../context/userContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Customer Support",
  description: "AI Customer Support | Real-time Conversation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
          <ToastContainer />
        </UserProvider>
      </body>
    </html>
  );
}
