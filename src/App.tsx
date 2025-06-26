import React, { useRef } from 'react';
import LandingSection from './components/LandingSection';
import MentorSection from './components/MentorSection';
import TeamSection from './components/TeamSection';
import GallerySection from './components/GallerySection';
import FinalSection from './components/FinalSection';

function App() {
  const mentorSectionRef = useRef<HTMLDivElement>(null);

  const scrollToMentorSection = () => {
    mentorSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="font-poppins">
      <LandingSection onScrollToNext={scrollToMentorSection} />
      <div ref={mentorSectionRef}>
        <MentorSection />
      </div>
      <TeamSection />
      {/* <GallerySection /> */}
      <FinalSection />
    </div>
  );
}

export default App;