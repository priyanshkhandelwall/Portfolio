'use client';

import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState, useEffect } from 'react';
import Project from './Project';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedProject = PROJECTS.find((p) => p.slug === selectedProjectSlug);

  // Helper to ensure image paths are safe (same as in Project.tsx)
  const getSafePath = (path: string | undefined) => {
    if (!path) return '';
    return path.startsWith('/') ? path.trim() : `/${path.trim()}`;
  };

  const handleMouseEnter = (slug: string, el: HTMLDivElement) => {
    setSelectedProjectSlug(slug);
    if (!containerRef.current || !imageWrapperRef.current) return;

    const containerTop = containerRef.current.getBoundingClientRect().top;
    const itemTop = el.getBoundingClientRect().top;
    const offsetY = itemTop - containerTop;

    gsap.to(imageWrapperRef.current, {
      y: offsetY,
      opacity: 1,
      duration: 0.55,
      ease: 'power3.out',
    });
  };

  useGSAP(() => {
    gsap.from('.project-item', {
      y: 50,
      opacity: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 50%',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  useGSAP(() => {
    gsap.to(containerRef.current, {
      y: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'bottom 50%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  if (!mounted) return <section className="pb-section" id="selected-projects" />;

  return (
    <section className="pb-section px-4 md:px-0" id="selected-projects">
      <div className="container mx-auto" ref={containerRef}>
        <SectionTitle title="Featured Work" />

        <div className="relative grid grid-cols-1 md:grid-cols-[4fr_4fr] gap-8 md:gap-16">
          <div className="w-full">
            {PROJECTS.map((project, index) => (
              <Project
                key={project.slug}
                index={index}
                project={project}
                selectedProjectSlug={selectedProjectSlug}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => {}} 
              />
            ))}
          </div>

          {/* Hover image preview */}
          <div className="relative hidden md:block pointer-events-none">
            <div
              ref={imageWrapperRef}
              className="absolute right-0 top-0 opacity-0 will-change-transform pointer-events-auto"
            >
              {selectedProject?.image && (
                <img
                  src={getSafePath(selectedProject.image)} // USED SAFE PATH HERE
                  alt={selectedProject.title}
                  className="w-[520px] lg:w-[600px] xl:w-[680px] rounded-2xl shadow-2xl cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => setPreviewImage(selectedProject.image)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen preview modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={getSafePath(previewImage)} // USED SAFE PATH HERE
            alt="Project preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectList;