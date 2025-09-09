import { HeroSection } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ExperienceSection } from '@/components/sections/experience';
import { EducationSection } from '@/components/sections/education';
import { CertificationsSection } from '@/components/sections/certifications';
import { ContributionsSection } from '@/components/sections/contributions';
import { BlogSection } from '@/components/sections/blog';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Sections */}
      <div className="relative">
        {/* Projects Section */}
        <section id="projects" className="py-24 lg:py-32">
          <FeaturedProjects />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 lg:py-32 bg-muted/30">
          <ExperienceSection />
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 lg:py-32">
          <EducationSection />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 lg:py-32 bg-muted/30">
          <CertificationsSection />
        </section>

        {/* GitHub Contributions */}
        <section id="github" className="py-24 lg:py-32">
          <ContributionsSection />
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 lg:py-32 bg-muted/30">
          <BlogSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 lg:py-32">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}