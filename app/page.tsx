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
import TermsOfUse from './TermsOfUse/page';
import PrivacyNotice from './PrivacyNotice/page';
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {

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
