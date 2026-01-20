'use client';

import { IProject } from '@/types';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';
import TransitionLink from '@/components/TransitionLink';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import Image from 'next/image';

interface Props {
  project: IProject;
  index: number;
  selectedProjectSlug: string | null;
  onMouseEnter: (slug: string, el: HTMLDivElement) => void;
  onMouseLeave: () => void;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Project = ({
  project,
  index,
  selectedProjectSlug,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const isSelected = selectedProjectSlug === project.slug;
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

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

      tl.from(containerRef.current, {
        y: 50,
        opacity: 0,
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

  /* =====================================================
     HOVER ICON ANIMATION (UNCHANGED)
  ===================================================== */
  const { contextSafe } = useGSAP({ scope: svgRef });

  const handleIconEnter = contextSafe(() => {
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

  const handleLeave = contextSafe(() => {
    if (svgRef.current) {
      gsap.to(svgRef.current, { autoAlpha: 0, duration: 0.2 });
    }
    onMouseLeave();
  });

  /* =====================================================
     IMAGE PATH SAFETY
  ===================================================== */
  const imagePath = project.image.startsWith('/')
    ? project.image.trim()
    : `/${project.image.trim()}`;

  return (
    <div
      ref={containerRef}
      onMouseEnter={(e) => {
        onMouseEnter(project.slug, e.currentTarget);
        handleIconEnter();
      }}
      onMouseLeave={handleLeave}
      className="
        project-item group relative block
        border-b border-neutral-800
        py-6 md:py-8 lg:py-12
        transition-colors duration-300
        hover:border-primary
      "
    >
      <TransitionLink href={`/projects/${project.slug}`} className="block">

        {/* Mobile Image */}
        <div className="
          mb-4 block lg:hidden
          w-full overflow-hidden
          rounded-lg border border-neutral-800
          bg-neutral-900
        ">
          <Image
            src={imagePath}
            alt={project.title}
            width={800}
            height={450}
            className="
              w-full h-auto object-cover
              grayscale-[0.3]
              group-hover:grayscale-0
              transition-all duration-500
            "
            priority={index < 2}
          />
        </div>

        <div className="relative">
          {/* Index */}
          <span
            className={cn(
              'static lg:absolute lg:-left-12 top-0 block mb-2 lg:mb-0',
              'text-sm lg:text-lg font-anton transition-colors duration-300',
              isSelected ? 'text-primary' : 'text-neutral-600',
              'group-hover:text-primary'
            )}
          >
            {index < 9 ? `0${index + 1}` : index + 1}
          </span>

          {/* Title + Actions */}
          <div className="flex items-center justify-between gap-6">
            <h3
              className={cn(
                'text-2xl md:text-[38px] lg:text-[40px]',
                'leading-tight font-anton uppercase',
                'transition-colors duration-300',
                'group-hover:text-primary',
                isSelected && 'text-primary'
              )}
            >
              {project.title}
            </h3>

            <div className="
              flex items-center gap-4
              opacity-100 lg:opacity-0
              group-hover:opacity-100
              transition-opacity
            ">
              {project.sourceCode && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.sourceCode, '_blank');
                  }}
                  className="p-2 hover:text-primary transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={22} />
                </button>
              )}

              {project.liveUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank');
                  }}
                  className="relative w-[24px] h-[24px]"
                  aria-label="Live Site"
                >
                  <svg
                    ref={svgRef}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary lg:opacity-0"
                  >
                    <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <path id="arrow-line" d="M10 14 21 3" />
                    <path id="arrow-curb" d="M15 3h6v6" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <p className="
            mt-3 lg:mt-4
            text-xs lg:text-sm
            text-muted-foreground
            leading-relaxed
            max-w-[90%]
            uppercase tracking-widest
          ">
            {project.techStack.join(' • ')}
          </p>
        </div>
      </TransitionLink>
    </div>
  );
};

export default Project;
