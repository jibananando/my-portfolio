import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "JP Portfolio",
  description: "Modern portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar /> {/* ✅ Navbar component here */}
        <main className="pt-20 px-6">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} JP Portfolio
        </footer>
      </body>
    </html>
  );
}
