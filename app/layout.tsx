import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

import getCurrentUser from './actions/getCurrentUser';
import { LoginModal, RegisterModal, RentModal } from './components/modals';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './providers/ToasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Namaste Nest',
  description: 'Streamlined Hotel Booking Solution for Effortless Reservations'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
