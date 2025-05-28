// app/page.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="text-center px-4 py-20 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-cyan-400">
          Discover Top Talent. <br /> Hire Smarter.
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-6">
          We help companies scale by connecting them with pre-vetted professionals
          across various industries.
        </p>
        <Link href="/contact">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 text-lg">
            Contact Us
            <MoveRight className="ml-2" />
          </Button>
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-16 bg-zinc-900">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-cyan-300 mb-10">
          Why Choose Ezyly Hired?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-zinc-800 border-cyan-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Pre-Vetted Talent</h3>
              <p className="text-zinc-300">
                We carefully screen candidates to ensure you get the most qualified professionals.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-cyan-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Fast Hiring</h3>
              <p className="text-zinc-300">
                Reduce your time-to-hire with our efficient and seamless recruitment process.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-cyan-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Cost Effective</h3>
              <p className="text-zinc-300">
                Access top talent without breaking the bank. Our plans are affordable and scalable.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-cyan-300 mb-10">
          Our Hiring Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-zinc-800 border-cyan-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-2">1. Share Requirements</h4>
              <p className="text-zinc-300">
                Let us know the skills and experience you’re looking for.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-cyan-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-2">2. Get Matches</h4>
              <p className="text-zinc-300">
                Receive top vetted candidate profiles aligned with your goals.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-cyan-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-2">3. Hire & Scale</h4>
              <p className="text-zinc-300">
                Interview and onboard your perfect hire with our support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
