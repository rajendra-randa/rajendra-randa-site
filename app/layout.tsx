import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajendra Randa | AI / ML Researcher",
  description: "Academic research portfolio of Rajendra Randa — Machine Learning for Healthcare.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}