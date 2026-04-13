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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
