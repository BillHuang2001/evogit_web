import "./globals.css";

export const metadata = {
  title: "EvoX Homepage",
  description: "The official homepage for the EvoX project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
