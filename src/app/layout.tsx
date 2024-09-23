import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Layout } from "~/components/Layout";

export const metadata: Metadata = {
  title: "pixel by pixel",
  description: "create",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Layout>{children}</Layout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
