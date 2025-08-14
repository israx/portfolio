import { Header } from '@/components/Header';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
