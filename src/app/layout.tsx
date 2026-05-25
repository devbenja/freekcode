import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreekCode — Software que impulsa negocios",
  description: "Desarrollo de aplicaciones web y móviles con performance extremo, SEO optimizado y código enterprise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-neutral-950 text-neutral-50 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
