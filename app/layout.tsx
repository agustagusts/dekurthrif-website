import '../app/globals.css';

export const metadata = {
  title: 'Dekurþrif - Premium Cleaning',
  description: 'Professional home, office, and Airbnb cleaning in Reykjavík',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
