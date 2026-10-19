
import "./globals.css";

export const metadata = {
  title: "Startup | Build Something Amazing",
  description:
    "Discover our startup services, pricing plans, creative team and solutions for your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
