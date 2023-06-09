import "../styles/globals.css";

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
    <html lang="en" data-theme="cupcake"  className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
