import MainHeader from "@/components/layout/mainHeader";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <MainHeader />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
