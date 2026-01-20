'use client'; // This must be at the very top

import { GENERAL_INFO } from '@/lib/data';
import React, { useEffect, useState } from 'react';

const StickyEmail = () => {
    // 1. Create a state to track if the component has "mounted" in the browser
    const [mounted, setMounted] = useState(false);

    // 2. useEffect only runs on the client side after the initial render
    useEffect(() => {
        setMounted(true);
    }, []);

    const mailtoLink = `mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(
        GENERAL_INFO.emailSubject
    )}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`;

    // 3. If not mounted, return null (renders nothing on the server)
    // This stops the "Hydration Failed" error permanently.
    if (!mounted) return null;

    return (
        <div className="hidden lg:block fixed bottom-32 left-0 z-[9999]">
            <a
                aria-label={`Send email to ${GENERAL_INFO.email}`}
                href={mailtoLink}
                className="px-3 text-muted-foreground tracking-[1px] transition-all duration-300 hover:text-primary hover:-translate-y-2 inline-block font-medium"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </a>
        </div>
    );
};

export default StickyEmail;