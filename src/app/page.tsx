import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AwardsSection } from "@/components/sections/awards-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Tech Grid Background */}
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none" />
      
      <main className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="awards">
          <AwardsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
        
        <Footer />
      </main>
    </div>
  )
}
