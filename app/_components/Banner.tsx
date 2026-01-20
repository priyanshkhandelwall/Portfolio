'use client';

import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Move the content up on scroll
  useGSAP(
    () => {
      // SSR guard
      if (typeof window === 'undefined') return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 70%',
          end: 'bottom 10%',
          scrub: 1,
        },
      });

      tl.fromTo(
        '.slide-up-and-fade',
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 }
      );
    },
    { scope: containerRef }
  );

  return (
    <section className="relative overflow-hidden" id="banner">
      <ArrowAnimation />

      <div
        className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
            <span className="text-primary">DATA</span>
            <br />
            <span className="ml-4">ANALYST</span>
          </h1>

          <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
            I&apos;m{' '}
            <span className="font-medium text-foreground">
              Priyansh
            </span>
            . A Master’s student in Computer Science at the University of Sydney, specialising in data analytics and decision-making.
          </p>

          <Button
            as="link"
            target="_blank"
            rel="noopener noreferrer"
            href="/Priyansh_Khandelwal.pdf"
            variant="primary"
            className="mt-9 banner-button slide-up-and-fade"
          >
            View Resume
          </Button>
        </div>

        <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              1+
            </h5>
            <p className="text-muted-foreground">
              Years of Experience
            </p>
          </div>

          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              7+
            </h5>
            <p className="text-muted-foreground">
              Completed Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
