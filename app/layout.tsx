import type { Metadata } from "next";
import { headers } from "next/headers";
import { IBM_Plex_Sans, Sora } from "next/font/google";
import "./globals.css";
import { getDictionary, type Lang } from "@/lib/i18n";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const lang = (headerStore.get("x-lang") === "en" ? "en" : "es") as Lang;
  const t = getDictionary(lang);

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: t.meta.title,
    description: t.meta.description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const lang = headerStore.get("x-lang") === "en" ? "en" : "es";

  return (
    <html
      lang={lang}
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
