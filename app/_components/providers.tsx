'use client';

import { ReactLenis } from 'lenis/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import StickyEmail from './StickyEmail';

import 'lenis/dist/lenis.css';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
