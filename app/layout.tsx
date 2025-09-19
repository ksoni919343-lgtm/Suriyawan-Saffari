import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import NavUserMenu from '../components/NavUserMenu';
import { UserProvider } from '../contexts/UserContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Suriyawan Saffari',
  description: 'E-commerce Ecosystem',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-beige text-warmBrown`}>
        <ThemeProvider attribute="class">
          <UserProvider>
            <NavUserMenu />
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
