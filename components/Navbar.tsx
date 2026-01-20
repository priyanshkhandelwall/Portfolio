'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

// A "Radiant Gold" palette that matches your CSS variables
const COLORS = [
    'bg-[#FFD700] text-black shadow-[0_0_20px_rgba(255,215,0,0.6)]', // Pure Gold Glow
    'bg-[#FFB900] text-black shadow-[0_0_20px_rgba(255,185,0,0.5)]', // Amber Glow
    'bg-[#F59E0B] text-black shadow-[0_0_20px_rgba(245,158,11,0.5)]', // Warm Honey Glow
    'bg-[#D97706] text-white shadow-[0_0_20px_rgba(217,119,6,0.4)]', // Bronze Glow
    'bg-[#B45309] text-white shadow-[0_0_20px_rgba(180,83,9,0.4)]',  // Deep Ochre Glow
];

const MENU_LINKS = [
    { name: 'Home', url: '/' },
    { name: 'About Me', url: '/#about-me' },
    { name: 'Experience', url: '/#my-experience' },
    { name: 'Featured Work', url: '/#selected-projects' },
    { name: 'Credentials', url: '/#credentials' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="sticky top-0 z-[4]">
                <button
                    className={cn(
                        'group size-12 absolute top-5 right-5 md:right-10 z-[2]',
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {/* Hamburger Lines - Changed to foreground (Gold-tinted white) */}
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px]',
                            {
                                'rotate-45 -translate-y-1/2 bg-primary': isMenuOpen, // Turns Gold when open
                                'md:group-hover:rotate-12': !isMenuOpen,
                            },
                        )}
                    ></span>
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px]',
                            {
                                '-rotate-45 -translate-y-1/2 bg-primary': isMenuOpen, // Turns Gold when open
                                'md:group-hover:-rotate-12': !isMenuOpen,
                            },
                        )}
                    ></span>
                </button>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/80 backdrop-blur-sm transition-all duration-150', // Added blur for luxury feel
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14',
                    'flex flex-col lg:justify-center py-10 border-l border-primary/10', // Added a subtle gold border
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                {/* Background Circle - Uses background-light for a sleek obsidian look */}
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-card duration-700 delay-150 z-[-1]',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="text-primary text-xs tracking-[0.2em] font-bold mb-5 md:mb-8">
                                SOCIAL
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-lg capitalize text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-primary text-xs tracking-[0.2em] font-bold mb-5 md:mb-8">
                                MENU
                            </p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className="group text-xl flex items-center gap-3 text-foreground hover:text-primary transition-all"
                                        >
                                            <span
                                                className={cn(
                                                    'size-3.5 rounded-full flex items-center justify-center group-hover:scale-[180%] transition-all ring-1 ring-primary/20',
                                                    COLORS[idx],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="scale-0 group-hover:scale-100 transition-all text-black"
                                                />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="text-primary text-xs tracking-[0.2em] font-bold mb-4">GET IN TOUCH</p>
                    <a 
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="text-muted-foreground hover:text-white transition-colors"
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;