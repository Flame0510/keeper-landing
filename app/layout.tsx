import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keeper — AI Narrative Engine",
  description: "Il Game Master che non dorme mai. Entra in una storia. Fai le tue scelte. Lascia che l'AI narri il resto.",
  keywords: ["D&D", "AI", "narrative", "RPG", "fantasy", "game master"],
  openGraph: {
    title: "Keeper — AI Narrative Engine",
    description: "Il Game Master che non dorme mai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
