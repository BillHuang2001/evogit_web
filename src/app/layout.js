import "./globals.css";

export const metadata = {
  title: "EvoX Homepage",
  description: "The official homepage for the EvoX project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
