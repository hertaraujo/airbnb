import { Navbar } from '@/components/navbar/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { RegisterModal } from '@/components/modals';
import { ToasterProvider } from '@/providers/toaster-provider';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone web app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
