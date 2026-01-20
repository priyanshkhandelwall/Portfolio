'use client';

import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    /* ---------------- Fade IN ---------------- */
    useGSAP(
        () => {
            // ✅ Safe: runs only on client
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
                return;

            const slideUpEls =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEls?.length) return;

            gsap.from(slideUpEls, {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef }
    );

    /* ---------------- Fade OUT ---------------- */
    useGSAP(
        () => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
                return;

            gsap.to(containerRef.current, {
                y: -150,
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12" key={key}>
                            <div className="sm:col-span-5">
                                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                                    {key.replace('_', ' ')}
                                </p>
                            </div>

                            <div className="sm:col-span-7 flex flex-wrap gap-x-11 gap-y-9">
                                {value.map((item) => (
                                    <div
                                        key={item.name}
                                        className="slide-up flex items-center gap-3.5 leading-none"
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="max-h-10"
                                        />
                                        <span className="text-2xl capitalize">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
