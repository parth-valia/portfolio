import { HeroSection } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ExperienceSection } from '@/components/sections/experience';
import { EducationSection } from '@/components/sections/education';
import { BlogSection } from '@/components/sections/blog';
import { ContributionsSection } from '@/components/sections/contributions';
import { ContactSection } from '@/components/sections/contact';
import { EnhancedAnimatedSection } from '@/components/ui/enhanced-animated-section';
import { MinimalBackground } from '@/components/ui/minimal-background';

export default function Home() {
  return (
    <>
      <MinimalBackground />
      <EnhancedAnimatedSection id="home" animationType="matrix" duration={1.2}>
      <HeroSection />
      </EnhancedAnimatedSection>
      <EnhancedAnimatedSection id="projects" animationType="stagger" delay={0.2} staggerChildren={0.15}>
      <FeaturedProjects />
      </EnhancedAnimatedSection>
      <ExperienceSection />
      <EnhancedAnimatedSection id="education" animationType="matrix" delay={0.2}>
      <EducationSection />
      </EnhancedAnimatedSection>
      <EnhancedAnimatedSection id="blog" animationType="fade" delay={0.1}>
      <BlogSection />
      </EnhancedAnimatedSection>
      <EnhancedAnimatedSection id="github" animationType="scale" delay={0.2}>
      <ContributionsSection />
      </EnhancedAnimatedSection>
      <EnhancedAnimatedSection id="contact" animationType="blur" delay={0.3}>
      <ContactSection />
      </EnhancedAnimatedSection>
    </>
  );
}