"use client";
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import InsightsSection from '@/components/InsightsSection';
import HiringSection from '@/components/HiringSection';
import ConsultingSection from '@/components/ConsultingSection';
import CareerSection from '@/components/CareerSection';
import JobCategoriesSection from '@/components/JobCategoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AccoladesSection from '@/components/AccoladesSection';
import Footer from '@/components/Footer';
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="min-h-screen bg-background">
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
