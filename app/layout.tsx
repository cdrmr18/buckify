import "../styles/globals.css";
import Header from "./Header";

export const metadata = {
  title: "Buckify",
  description: "An app to make saving social and fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
