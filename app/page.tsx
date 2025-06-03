
import React from 'react';
import HeroSection from '@/components/HeroSection';
import InsightsSection from '@/components/InsightsSection';
import HiringSection from '@/components/HiringSection';
import ConsultingSection from '@/components/ConsultingSection';
import CareerSection from '@/components/CareerSection';
import JobCategoriesSection from '@/components/JobCategoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AccoladesSection from '@/components/AccoladesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InsightsSection />
      <HiringSection />
      <ConsultingSection />
      <CareerSection />
      <JobCategoriesSection />
      <TestimonialsSection />
      <AccoladesSection />
      <Footer />
    </div>
  );
};

export default Index;
