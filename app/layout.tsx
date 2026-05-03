import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeVoice – Audio Code Navigation for Visually Impaired Developers",
  description: "VS Code extension with AI-powered audio descriptions of code structure, changes, and navigation cues. Built for visually impaired developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ccdd3a7b-2b48-4ac1-8601-8b9921f246f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
