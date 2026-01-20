'use client';

import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ICertification {
  name: string;
  issuer: string;
  year: number | string;
  url: string;
}

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  /* =====================================================
     SCROLL FADE IN (IDENTICAL TO EXPERIENCE)
  ===================================================== */
  useGSAP(
    () => {
      if (typeof window === 'undefined') return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 50%',
          toggleActions: 'restart none none reverse',
          scrub: 1,
        },
      });

      tl.from('.certificate-item', {
        y: 50,
        opacity: 0,
        stagger: 0.3,
      });
    },
    { scope: containerRef }
  );

  /* =====================================================
     SCROLL FADE OUT (IDENTICAL TO EXPERIENCE)
  ===================================================== */
  useGSAP(
    () => {
      if (typeof window === 'undefined') return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 50%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-section" id="credentials">
      <div className="container mx-auto px-6" ref={containerRef}>
        <SectionTitle title="Credentials" />

        <div className="mt-10">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificateItem
              key={`${cert.name}-${index}`}
              cert={cert as ICertification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

/* ================================================================== */
/* ===================== Certificate Item ============================ */
/* ================================================================== */

const CertificateItem = ({
  cert,
  index,
}: {
  cert: ICertification;
  index: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      if (typeof window === 'undefined') return;
    },
    { scope: svgRef }
  );

  const handleMouseEnter = contextSafe(() => {
    if (typeof window === 'undefined') return;

    const svg = svgRef.current;
    if (!svg) return;

    const box = svg.querySelector('#box') as SVGPathElement | null;
    const line = svg.querySelector('#arrow-line') as SVGPathElement | null;
    const curb = svg.querySelector('#arrow-curb') as SVGPathElement | null;

    if (!box || !line || !curb) return;

    gsap.set(svg, { autoAlpha: 1 });

    gsap
      .timeline()
      .set([box, line, curb], {
        opacity: 0,
        strokeDasharray: (_, target: SVGPathElement) =>
          target.getTotalLength(),
        strokeDashoffset: (_, target: SVGPathElement) =>
          target.getTotalLength(),
      })
      .to(box, { opacity: 1, strokeDashoffset: 0, duration: 0.45 })
      .to(line, { opacity: 1, strokeDashoffset: 0, duration: 0.45 }, '<0.15')
      .to(curb, { opacity: 1, strokeDashoffset: 0, duration: 0.45 }, '<0.15');
  });

  const handleMouseLeave = contextSafe(() => {
    if (typeof window === 'undefined') return;
    gsap.to(svgRef.current, { autoAlpha: 0, duration: 0.2 });
  });

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`View ${cert.name} certificate issued by ${cert.issuer}`}
      className="
        certificate-item group relative block
        border-b border-neutral-800
        py-6 md:py-8
        transition-colors duration-300
        hover:border-primary
      "
    >
      <span
        className="
          absolute -left-4 md:-left-8 top-8
          text-sm md:text-lg font-anton text-neutral-600
          transition-colors duration-300
          group-hover:text-primary
        "
      >
        {index < 9 ? `0${index + 1}` : index + 1}
      </span>

      <div className="flex items-center justify-between gap-4">
        <h3
          className="
            text-2xl md:text-[38px]
            leading-tight font-anton uppercase
            transition-colors duration-300
            group-hover:text-primary
          "
        >
          {cert.name}
        </h3>

        <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <path id="arrow-line" d="M10 14 21 3" />
            <path id="arrow-curb" d="M15 3h6v6" />
          </svg>
        </span>
      </div>

      <p className="mt-2 text-sm md:text-base text-neutral-500 uppercase tracking-wide">
        {cert.issuer} · {cert.year}
      </p>
    </a>
  );
};
