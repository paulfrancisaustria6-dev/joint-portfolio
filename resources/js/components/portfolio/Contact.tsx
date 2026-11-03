
import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpekjno';

const contacts = {
    Paul: {
        name: 'Paul Francis Austria',
        email: 'paulfrancis@gmail.com',
        location: 'Manaoag, Pangasinan',
        socials: [
            {
                name: 'GitHub',
                url: 'https://github.com/paulfrancisaustria6-dev',
                icon: 'https://cdn.simpleicons.org/github/ffffff',
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/paul_austria21/',
                icon: 'https://cdn.simpleicons.org/instagram/ffffff',
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/paulfrancis.austria.52/',
                icon: 'https://cdn.simpleicons.org/facebook/ffffff',
            },
        ],
    },
    Dave: {
        name: 'Christopher Dave Martin',
        email: 'dave@example.com',
        location: 'Laoac, Pangasinan',
        socials: [
            {
                name: 'GitHub',
                url: 'https://github.com/',
                icon: 'https://cdn.simpleicons.org/github/ffffff',
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/cd.dvee/',
                icon: 'https://cdn.simpleicons.org/instagram/ffffff',
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/cd.dvee',
                icon: 'https://cdn.simpleicons.org/facebook/ffffff',
            },
        ],
    },
};

export default function Contact() {
    const [activeContact, setActiveContact] = useState<'Paul' | 'Dave'>('Paul');
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

    const contact = contacts[activeContact];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
            setStatus('Please configure your Formspree endpoint first.');
            setStatusType('error');
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append('_subject', `New Portfolio Message for ${activeContact}`);
        formData.append('recipient', contact.name);

        setIsSending(true);
        setStatus('');
        setStatusType('');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Your message has been sent successfully. Thank you for reaching out!');
                setStatusType('success');
                form.reset();
            } else {
                setStatus(
                    result.errors?.map((error: { message: string }) => error.message).join(' ') ||
                    'Unable to send your message. Please try again.',
                );
                setStatusType('error');
            }
        } catch {
            setStatus('Something went wrong. Please check your internet connection and try again.');
            setStatusType('error');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            id="contact"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="scroll-mt-20 border-t border-slate-200 px-5 py-20 sm:px-8 sm:py-28 dark:border-slate-800"
        >
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white dark:bg-slate-900">
                <div className="grid lg:grid-cols-2">
                    <div className="p-8 sm:p-12 lg:p-16">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                            Contact —
                        </p>

                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                            Let's Build
                            <span className="text-sky-300"> Something Great.</span>
                        </h2>

                        <p className="mt-6 max-w-md leading-7 text-slate-300">
                            Have a question, an idea, or an opportunity to collaborate?
                            Feel free to reach out.
                        </p>

                        {/* CONTACT SELECTOR */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => setActiveContact('Paul')}
                                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                                    activeContact === 'Paul'
                                        ? 'bg-sky-500 text-white'
                                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                                }`}
                            >
                                Paul's Contact
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveContact('Dave')}
                                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                                    activeContact === 'Dave'
                                        ? 'bg-sky-500 text-white'
                                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                                }`}
                            >
                                Dave's Contact
                            </button>
                        </div>

                        {/* SELECTED CONTACT DETAILS */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold">
                                {contact.name}
                            </h3>

                            <a
                                href={`mailto:${contact.email}`}
                                className="mt-6 flex items-center gap-4 transition hover:text-sky-300"
                            >
                                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-xl text-sky-300">
                                    ✉
                                </span>

                                <span className="min-w-0">
                                    <span className="block text-xs text-slate-400">
                                        Email Address
                                    </span>
                                    <span className="mt-1 block break-all text-sm font-medium sm:text-base">
                                        {contact.email}
                                    </span>
                                </span>
                            </a>

                            <div className="mt-5 flex items-center gap-4">
                                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-xl text-sky-300">
                                    ⌖
                                </span>

                                <span>
                                    <span className="block text-xs text-slate-400">
                                        Location
                                    </span>
                                    <span className="mt-1 block text-sm font-medium sm:text-base">
                                        {contact.location}
                                    </span>
                                </span>
                            </div>

                            <div className="mt-10 flex gap-3">
                                {contact.socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-sky-500"
                                    >
                                        <img
                                            src={social.icon}
                                            alt=""
                                            className="h-5 w-5"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="bg-white p-8 text-slate-900 sm:p-12 lg:p-16 dark:bg-slate-950 dark:text-white">
                        <h3 className="text-2xl font-bold">
                            Send Me a Message
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Fill out the form and send your message directly.
                        </p>

                        <form
                            id="contact-form"
                            className="mt-8 space-y-5"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    maxLength={100}
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    maxLength={254}
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    maxLength={5000}
                                    placeholder="Write your message here..."
                                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-900"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                                <span aria-hidden="true">↗</span>
                            </button>

                            {status && (
                                <p
                                    className={`break-words text-sm leading-6 ${
                                        statusType === 'success'
                                            ? 'text-green-600 dark:text-green-400'
                                            : 'text-red-600 dark:text-red-400'
                                    }`}
                                    role="status"
                                    aria-live="polite"
                                >
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
