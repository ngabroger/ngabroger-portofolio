import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import ClientLayout from './components/ClientLayout';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Roger Simanjuntak - Portfolio',
  description: 'Welcome to my portfolio website!',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-dm-sans antialiased min-h-screen flex flex-col`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
