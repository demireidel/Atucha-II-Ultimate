import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atucha II — Educational 3D Schematic",
  description: "PHWR Atucha II — educational schematic (non-operational)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
