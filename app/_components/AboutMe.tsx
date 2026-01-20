'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fade IN content
  useGSAP(
    () => {
      if (typeof window === 'undefined') return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-me-in',
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });

      tl.from('.slide-up-and-fade', {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: containerRef }
  );

  // Fade OUT content
  useGSAP(
    () => {
      if (typeof window === 'undefined') return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'about-me-out',
          trigger: containerRef.current,
          start: 'bottom 50%',
          end: 'bottom 10%',
          scrub: 0.5,
        },
      });

      tl.to('.slide-up-and-fade', {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={containerRef}>
<h3 className="text-2xl sm:text-3xl md:text-5xl font-light mb-10 slide-up-and-fade text-foreground">
  From learning the fundamentals to applying{' '}
  <span className="text-primary">analytics through real experience.</span>
</h3>


        <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
          An overview of what I do.
        </p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
        <h2 className="text-4xl sm:text-4xl md:text-5xl slide-up-and-fade">
        Hey, I&apos;m Priyansh Khandelwal.  
        </h2>



{/* Profile Image */}
<div className="mt-7 flex justify-center md:justify-start slide-up-and-fade">
  <div className="group inline-block">
    <img
      src="profile.png"
      alt="Priyansh Khandelwal"
      className="
        w-36 h-36
        sm:w-40 sm:h-40
        md:w-56 md:h-56
        lg:w-64 lg:h-64
        object-cover rounded-full
        border border-primary/20 
        transition-all duration-500 ease-out
        group-hover:scale-105
        group-hover:shadow-[0_0_30px_rgba(197,160,33,0.3)]
      "
    />
  </div>
</div> 
</div>

          <div className="md:col-span-7">
            <div className="text-sm md:text-base text-muted-foreground max-w-[420px] leading-[1.75]">
              <p className="slide-up-and-fade">
I’m currently pursuing a Master’s in Computer Science at the University of Sydney,
with a strong focus on data analytics and analytics-driven decision-making.
Through internships at Accenture, Alphonic Network Solutions, and Automatorr,
I’ve gained hands-on experience using Python, SQL, Excel, and Power BI to clean,
transform, and analyse data, and to build dashboards that support real business decisions.

              </p>

              <p className="mt-3 slide-up-and-fade">
Beyond technical skills, moving from India to Sydney and working in demanding
operational roles strengthened my communication, adaptability, and ability to
perform under pressure. These experiences shape how I approach stakeholder-facing
analytics work, allowing me to translate technical analysis into practical outcomes.
I approach every challenge with patience, tenacity, and a focus on doing things
properly, not just quickly.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
