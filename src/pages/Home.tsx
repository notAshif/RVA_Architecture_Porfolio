import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import RealEstateSection from '../sections/RealEstateSection';
import ServicesSection from '../sections/ServicesSection';
import StatsSection from '../sections/StatsSection';
import GallerySection from '../sections/GallerySection';
import VideoShowcase from '../sections/VideoShowcase';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <RealEstateSection />
      <ProjectsSection />
      <VideoShowcase />
      <GallerySection />
      <ServicesSection />
      <StatsSection />
    </>
  );
};

export default Home;
