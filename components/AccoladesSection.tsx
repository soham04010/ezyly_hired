"use client";
import React from 'react';
import { Button } from '@/components/ui/button';

const AccoladesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-light text-gray-900 mb-16">You're in good company</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Award 1 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-6 relative">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#10B981" strokeWidth="2"/>
                <path d="M30,60 Q40,30 60,35 Q80,30 90,60 Q80,90 60,85 Q40,90 30,60" fill="#10B981" opacity="0.1"/>
                {Array.from({length: 16}).map((_, i) => (
                  <line
                    key={i}
                    x1="60"
                    y1="10"
                    x2="60"
                    y2="18"
                    stroke="#10B981"
                    strokeWidth="2"
                    transform={`rotate(${i * 22.5} 60 60)`}
                  />
                ))}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-600">Fortune®</div>
                  <div className="text-sm font-bold text-gray-900">World's Most Admired Companies™</div>
                  <div className="text-xs text-gray-600">2025</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Award 2 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-6 relative">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#3B82F6" strokeWidth="2"/>
                <path d="M30,60 Q40,30 60,35 Q80,30 90,60 Q80,90 60,85 Q40,90 30,60" fill="#3B82F6" opacity="0.1"/>
                {Array.from({length: 16}).map((_, i) => (
                  <line
                    key={i}
                    x1="60"
                    y1="10"
                    x2="60"
                    y2="18"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    transform={`rotate(${i * 22.5} 60 60)`}
                  />
                ))}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-600">Forbes'</div>
                  <div className="text-sm font-bold text-gray-900">America's Best Professional Recruiting Firms</div>
                  <div className="text-xs text-gray-600">2025</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Award 3 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-6 relative">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
                <path d="M30,60 Q40,30 60,35 Q80,30 90,60 Q80,90 60,85 Q40,90 30,60" fill="#8B5CF6" opacity="0.1"/>
                {Array.from({length: 16}).map((_, i) => (
                  <line
                    key={i}
                    x1="60"
                    y1="10"
                    x2="60"
                    y2="18"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    transform={`rotate(${i * 22.5} 60 60)`}
                  />
                ))}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-600">Fortune®</div>
                  <div className="text-sm font-bold text-gray-900">America's Most Innovative Companies</div>
                  <div className="text-xs text-gray-600">2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8">*</p>
        
        <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-medium rounded-full">
          See all accolades
        </Button>
      </div>
    </section>
  );
};

export default AccoladesSection;

