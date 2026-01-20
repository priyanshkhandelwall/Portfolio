import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

const siteTitle = 'Priyansh Khandelwal | Data Analyst & Computer Science Graduate';
const siteDescription = 'Portfolio of Priyansh Khandelwal, a Data Analyst and Computer Science Graduate specializing in turning complex data into actionable insights through Python, SQL, and Power BI.';
const siteUrl = 'https://priyanshkhandelwal.com'; 

export const metadata: Metadata = {
    title: siteTitle,
    description: siteDescription,
    keywords: ['Data Analyst', 'Computer Science', 'Portfolio', 'Python', 'SQL', 'Power BI', 'Data Visualization'],
    authors: [{ name: 'Priyansh Khandelwal' }],
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        siteName: siteTitle,
        images: [
            {
                url: `${siteUrl}/og-image.png`, 
                width: 1200,
                height: 630,
                alt: 'Priyansh Khandelwal Portfolio',
            },
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
}: Readonly<{
    children: React.ReactNode;
}>) {
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
                suppressHydrationWarning // KEY FIX: This stops the red error screens for minor UI mismatches
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

                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}