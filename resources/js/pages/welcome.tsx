
import Navbar from '@/components/portfolio/Navbar';
import Home from '@/components/portfolio/Home';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';

type Project = {
    id: number;
    partner: 'Paul' | 'Dave';
    title: string;
    description: string;
    category: string;
    technologies: string[];
    image: string | null;
    project_url: string | null;
};

type WelcomeProps = {
    projects: Project[];
};

export default function Welcome({ projects }: WelcomeProps) {
    return (
        <div className="min-h-screen bg-slate-50 font-['Inter'] text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
            <Navbar />

            <main>
                <Home />
                <About />
                <Skills />
                <Projects projects={projects} />
                <Education />
                <Contact />
            </main>
        </div>
    );
}
