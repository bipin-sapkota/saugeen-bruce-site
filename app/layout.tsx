import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import site from "@/content/site.json";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { Container } from "@/components/Container";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: { default: "Saugeen Bruce", template: "%s | Saugeen Bruce" },
  description:
    "Premium, nature-forward journeys along the Nokomis Trail and the Bruce Peninsula shoreline.",
  metadataBase: new URL("https://saugeenbruce.com"),
  openGraph: {
    title: "Saugeen Bruce",
    description:
      "Premium, nature-forward journeys along the Nokomis Trail and the Bruce Peninsula shoreline.",
    siteName: "Saugeen Bruce",
    type: "website",
    url: "https://saugeenbruce.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased bg-transparent text-iron`}
      >
        <div className="flex min-h-screen min-w-screen flex-col bg-transparent">
          <Header
            brandName={site.brandName}
            nav={site.nav}
            primaryCTA={site.primaryCTA}
          />
          <main className="flex-1">
            <PageTransition>
            <Container className="pt-0 pb-8 sm:pt-8">{children}</Container>
            </PageTransition>
          </main>
          <Footer
            nav={site.footer.nav}
            disclaimer={site.footer.disclaimer}
            social={site.footer.social}
          />
        </div>
      </body>
    </html>
  );
}
