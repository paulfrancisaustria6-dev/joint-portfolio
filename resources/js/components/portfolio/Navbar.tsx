
import { useEffect, useState } from 'react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;

            for (const link of navLinks) {
                const section = document.querySelector(link.href);

                if (section) {
                    const top = (section as HTMLElement).offsetTop;

                    if (scrollPosition >= top) {
                        setActiveSection(link.href.substring(1));
                    }
                }
            }

            // Keep Contact active at the bottom of the page.
            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 10
            ) {
                setActiveSection('contact');
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90"
        >
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
                aria-label="Main navigation"
            >
                <a href="#home" className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-sm font-extrabold text-white dark:bg-sky-400 dark:text-slate-950">
                        WD
                    </span>

                    <span className="hidden text-sm font-bold sm:block">
                        WebDevs<span className="text-sky-500"></span>
                    </span>
                </a>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative rounded-full px-3 py-2 text-sm transition ${
                                    isActive
                                        ? 'font-bold text-sky-600 dark:text-sky-400 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-sky-500'
                                        : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700 dark:text-slate-300 dark:hover:bg-slate-900'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    id="menu-toggle"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-xl md:hidden dark:border-slate-700"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav"
                >
                    <span aria-hidden="true">
                        {isOpen ? '✕' : '☰'}
                    </span>
                </button>
            </nav>

            {/* MOBILE NAVIGATION */}
            <div
                id="mobile-nav"
                className={`${isOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white px-5 pb-4 dark:border-slate-800 dark:bg-slate-950 md:hidden`}
            >
                <div className="mx-auto grid max-w-7xl gap-1 pt-3">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`rounded-xl px-4 py-3 text-sm transition ${
                                    isActive
                                        ? 'bg-sky-50 font-bold text-sky-700 dark:bg-slate-900 dark:text-sky-300'
                                        : 'text-slate-600 hover:bg-sky-50 dark:text-slate-300 dark:hover:bg-slate-900'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
