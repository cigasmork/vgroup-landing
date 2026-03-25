import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: 'V Financial Group | 글로벌 금융과 디지털 혁신',
  description:
    'V Financial Group은 V Pay, V Bazzar, V Phone, Healthcare를 통해 글로벌 금융과 디지털 혁신을 연결하는 미래지향적 기업 포트폴리오 그룹입니다.',
  keywords: [
    'V Financial Group',
    'V Pay',
    'V Bazzar',
    'V Phone',
    'Healthcare',
    'fintech',
    'digital finance',
    '크로스보더 송금',
    '디지털 금융',
  ],
  openGraph: {
    title: 'V Financial Group',
    description:
      'Connecting Global Finance and Digital Innovation through V Pay, V Bazzar, V Phone, and Healthcare.',
    type: 'website',
    siteName: 'V Financial Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V Financial Group',
    description: 'Connecting Global Finance and Digital Innovation',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={geist.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
