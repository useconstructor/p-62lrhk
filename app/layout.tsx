import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stream Deck Video Test 1',
  description: 'A premium product launch page for the Elgato Stream Deck NEO, featuring an Apple-style scroll cinematic that reveals the device\'s 8 LCD buttons and AI-powered features through immersive frame-by-frame animation.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0a0a0b', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
