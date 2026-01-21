import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

import './globals.css';
import Providers from './_components/providers';

const antonFont = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
  weight: ['100', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-roboto-flex',
});

const siteTitle =
  'Priyansh Khandelwal | Data Analyst & Computer Science Graduate';
const siteDescription =
  'Portfolio of Priyansh Khandelwal, specializing in Python, SQL, and Power BI.';
const siteUrl = 'https://priyanshkhandelwal.dev';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'Data Analyst',
    'Computer Science',
    'Portfolio',
    'Python',
    'SQL',
    'Power BI',
    'Data Visualization',
  ],
  authors: [{ name: 'Priyansh Khandelwal' }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      { url: `${siteUrl}/og-image.png`, width: 1200, height: 630 },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Priyansh Khandelwal',
    jobTitle: 'Data Analyst',
    url: siteUrl,
    sameAs: [
      'https://github.com/priyanshkhandelwall',
      'https://www.linkedin.com/in/piyanshkhandelwal',
    ],
    description: siteDescription,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
        suppressHydrationWarning
      >
        <GoogleAnalytics gaId="G-MHLY1LNGY5" />

        <Script id="hotjar" strategy="afterInteractive">
          {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:6380611,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
