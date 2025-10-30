import type { Metadata } from "next";
import { vazirmatn } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoopArc - معماری پل‌های دیجیتال",
  description: "ما حلقه‌های پیچیده فنی را به آرک‌های موفقیت برای شما تبدیل می‌کنیم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
