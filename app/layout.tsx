import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Dekurþrif – Premium Cleaning',
  description: 'Professional home, office, and Airbnb cleaning in Reykjavík',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

