import { Hero } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ExperienceSection } from '@/components/sections/experience';
import { ContributionsSection } from '@/components/sections/contributions';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <FeaturedProjects />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="github">
        <ContributionsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}